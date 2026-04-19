# Jak wygląda encja JPA?

**Encja** w JPA (Java Persistence API) to w gruncie rzeczy zwykła klasa Javy (tzw. POJO), która podlega zarządzaniu przez framework (np. Hibernate) i jest trwale zapisywana w relacyjnej bazie danych. Klasa taka jest mapowana na tabelę bazodanową. Każda instancja (obiekt) tej klasy reprezentuje jeden konkretny wiersz (rekord) w tabeli, natomiast pola klasy odpowiadają bezpośrednio kolumnom tej tabeli.

### Przykład implementacji

Aby uczynić zwykłą klasę Javy encją, musimy zastosować odpowiednie adnotacje pochodzące z pakietu `jakarta.persistence` (w starszych wersjach `javax.persistence`):

```java
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 50)
    private String username;

    @Column(unique = true, nullable = false)
    private String email;

    // Pusty konstruktor wymagany przez JPA
    public User() {}

    public User(String username, String email) {
        this.username = username;
        this.email = email;
    }

    // Gettery i settery ...
}
```

### Podstawowe adnotacje

*   **`@Entity`** – to najważniejsza adnotacja, bez której mapa obiektowo-relacyjna nie zadziała. Wskazuje, że dana klasa jest encją. Domyślnie nazwa tabeli będzie taka sama jak nazwa klasy.
*   **`@Id`** – obowiązkowa adnotacja wskazująca, które pole w klasie będzie pełniło rolę klucza głównego (Primary Key) w tabeli.
*   **`@GeneratedValue`** – definiuje strategię generowania unikalnych wartości dla klucza głównego. Strategia `GenerationType.IDENTITY` oznacza, że generowanie klucza powierzamy samej bazie danych (narzędzie autoinkrementacji).
*   **`@Table`** – używana jest całkowicie eksperymentalnie lub wręcz jest zbędna w przypadku domyślnej konwencji nazewnictwa. Przydaje się jednak wtedy, gdy nazwa naszej tabeli różni się od nazwy klasy w kodzie (np. klasa to `User`, po stronie bazy chcemy tabelę `users`).
*   **`@Column`** – adnotacja uściślająca mapowanie danego pola. Pozwala m.in. nadać inną nazwę kolumnie (`name = "nazwa"`), określić, czy wartość może być nullem (`nullable`), definiować limit znaków dla kolumn typu string (`length`) czy ograniczać duplikaty w tabeli (`unique = true`).

>
> Tworzenie encji w Spring Data JPA to szybki proces wykorzystujący adnotacje do zmapowania obiektów do formy relacyjnej. Wystarczy stworzyć zwykłą klasę, oznaczyć ją `Entity`, określić unikalny identyfikator `Id` i gotowe!
>
