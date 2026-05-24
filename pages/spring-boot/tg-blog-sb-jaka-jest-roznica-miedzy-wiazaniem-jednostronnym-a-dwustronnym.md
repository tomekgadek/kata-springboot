# Jaka jest różnica między wiązaniem jednostronnym a dwustronnym?

Podział ten dotyczy nawigacji pomiędzy encjami na poziomie kodu obiektowego (w relacyjnej bazie danych klucze obce i tak działają zawsze w sposób niezależny od tego kierunku).

*   **Wiązanie jednostronne (Unidirectional):** Tylko jedna encja posiada referencję do drugiej. Przykładowo, `Order` posiada listę `OrderItem`, ale pojedyncza `OrderItem` nie przechowuje referencji do `Order`. Nawigacja w grafie obiektów (w Javie) jest możliwa tylko w jednym kierunku.
*   **Wiązanie dwustronne (Bidirectional):** Obie powiązane encje "wiedzą" o sobie i przechowują wzajemne referencje. `Order` posiada listę `OrderItem`, a każda `OrderItem` przechowuje referencję zwrotną do `Order`. Nawigacja jest możliwa w obu kierunkach.

### Studium przypadku: Wiązanie jednostronne (Unidirectional)

W tym przykładzie `Order` (Zamówienie) posiada referencję do listy swoich pozycji (`OrderItem`), ale pozycja **nie wie** o zamówieniu, do którego należy.

```java
@Entity
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Zamówienie nawiguje do swoich pozycji
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "order_id") // Definiuje kolumnę klucza obcego w tabeli po stronie OrderItem
    private List<OrderItem> items = new ArrayList<>();
}

@Entity
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String productName;
    
    // Brak referencji powrotnej do klasy Order!
}
```

### Studium przypadku: Wiązanie dwustronne (Bidirectional)

Tutaj zastosujemy obustronną nawigację. Zarówno `Order` ma dostęp do swoich pozycji, jak i każdy `OrderItem` posiada bezpośrednią referencję do swojego zamówienia.

```java
@Entity
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // "mappedBy" mówi JPA: "Ta relacja jest już skonfigurowana w polu 'order' w klasie OrderItem"
    // Order staje się stroną "niezarządzającą" (inverse side)
    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private List<OrderItem> items = new ArrayList<>();
}

@Entity
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String productName;

    // Właściciel relacji (posiada faktyczny klucz obcy "order_id" w tabeli bazy danych)
    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;
}
```

> W przypadku wiązania dwustronnego, jedna ze stron musi zostać oznaczona jako tzw. właściciel powiązania. Definiuje to, która encja jest fizycznie odpowiedzialna za utrzymywanie klucza obcego w bazie. Druga strona wykorzystuje atrybut `mappedBy`, aby poinformować JPA, że powiązanie jest już zdefiniowane po drugiej stronie.