# Jakie mamy sposoby wiązania dokumentów w MongoDB używając Spring Boot?

MongoDB, jako nierelacyjna baza danych (NoSQL), podchodzi do powiązań między danymi zupełnie inaczej niż tradycyjne bazy RDBMS z użyciem kluczy obcych (Foreign Keys). Podczas pracy ze Spring Data MongoDB mamy do dyspozycji trzy główne strategie wiązania (relacjonowania) dokumentów.

## 1. Zagnieżdżanie (Embedding)

Najbardziej naturalne i polecane podejście w bazach dokumentowych. Polega na osadzeniu (zagnieżdżeniu) powiązanego obiektu bezpośrednio wewnątrz dokumentu nadrzędnego. W bazie wszystko przechowywane jest jako jeden duży dokument JSON (BSON).

**Kiedy używać:** Kiedy dane są silnie powiązane ("należą do") i rzadko ulegają zmianom niezależnie od dokumentu nadrzędnego (np. adres zamieszkania użytkownika).

```java
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class User {
    @Id
    private String id;
    private String name;
    
    // Obiekt Address zostanie osadzony bezpośrednio w dokumencie User
    private Address address;
}

public class Address {
    private String city;
    private String street;
}
```

## 2. Referencje (Referencing) za pomocą `@DBRef`

Jeśli zagnieżdżanie nie ma sensu (np. z powodu ryzyka duplikacji ogromnych ilości danych lub dokumenty podrzędne mają swój własny cykl życia), możemy przechowywać odniesienia (referencje) do innych dokumentów. Spring Data MongoDB udostępnia adnotację `@DBRef`, która przypomina działaniem klucz obcy (ORM). Mechanizm ten pozwala przechować w dokumencie głównym wskaźnik do dokumentu powiązanego i automatycznie doładować go (np. z opóźnieniem – lazy loading) podczas pobierania dokumentu głównego.

**Kiedy używać:** Kiedy dokumenty są niezależne i chcemy uniknąć gigantycznej duplikacji (np. autor piszący setki postów).

```java
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Document(collection = "posts")
public class Post {
    @Id
    private String id;
    private String title;
}

@Document(collection = "authors")
public class Author {
    @Id
    private String id;
    private String name;

    // Przechowujemy kolekcję referencji. Spring doładuje listę obiektów Post.
    // Warto użyć "lazy = true", by nie obciążać bazy niepotrzebnym pobieraniem listy,
    // dopóki faktycznie nie odwołamy się do niej w kodzie.
    @DBRef(lazy = true)
    private List<Post> posts;
}
```

> **Alternatywa: `@DocumentReference`**
> W nowszych wersjach Spring Data MongoDB (od 3.3) wprowadzono adnotację `@DocumentReference`. Pełni ona podobną rolę co `@DBRef`, ale jest "lżejsza". Zamiast trzymać w bazie pełną strukturę (zawierającą nazwę docelowej bazy i kolekcji), `@DocumentReference` domyślnie przechowuje tylko samo ID lub tablicę ID docelowych dokumentów (tak jak w ręcznym wiązaniu). Pomimo tej lekkości zapisu, Spring wciąż potrafi z nich automatycznie "doładować" obiekty. W nowoczesnych projektach zaleca się stosowanie `@DocumentReference` jako wydajniejszej alternatywy dla `@DBRef`.


## 3. Ręczne wiązanie za pomocą samego ID (Manual References)

Trzecim podejściem jest zapisanie w dokumencie wyłącznie identyfikatora (ID) dokumentu powiązanego bez użycia adnotacji `@DBRef`. Różni się to od `@DBRef` tym, że Spring Data nie spróbuje automatycznie rozwiązać relacji przy pobieraniu. Odpowiedzialność za dociągnięcie dodatkowego dokumentu w odpowiednim momencie spada na programistę.

**Kiedy używać:** Kiedy optymalizacja wydajności jest absolutnym priorytetem, a dane powiązane są potrzebne rzadko. Mechanizm `@DBRef` generuje dodatkowe zapytania (tzw. problem N+1), co przy ręcznym wiązaniu można łatwiej zoptymalizować po stronie serwisu.

```java
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "orders")
public class Order {
    @Id
    private String id;
    private double totalAmount;

    // Przechowujemy jedynie String z ID. Sami musimy wykonać zapytanie po usera
    private String customerId; 
}
```

## Podsumowanie

> Projektując modele danych w MongoDB za pomocą Spring Boot, powinniśmy najpierw rozważyć **zagnieżdżanie**. Dopiero gdy zagnieżdżenie nie jest optymalne (powoduje przekroczenie limitu wielkości dokumentu lub drastyczną duplikację), należy użyć **referencji** za pomocą `@DBRef` (lub wydajniejszego `@DocumentReference`) albo operując na czystych **ID**. Wybór odpowiedniego podejścia jest kluczowy dla ostatecznej wydajności i elastyczności aplikacji.
