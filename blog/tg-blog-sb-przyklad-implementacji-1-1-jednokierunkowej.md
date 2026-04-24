# Przykład implementacji 1:1 jednokierunkowej

Wiązanie jednokierunkowe (unidirectional) w relacji One-to-One (1:1) oznacza, że tylko jedna encja z pary posiada referencję do drugiej. W tym podejściu nawigacja pomiędzy obiektami w kodzie możliwa jest tylko w jednym kierunku.

Poniżej znajduje się przykład implementacji relacji `1:1` pomiędzy encjami `User` oraz `Address`. W tym przypadku `User` posiada swój `Address`, ale `Address` nie przechowuje informacji o użytkowniku, do którego należy.

### Kod encji

```java
@Entity
@Table(name = "users")
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;

    // Relacja 1:1 - User jest właścicielem powiązania.
    // Tabela 'users' będzie posiadała kolumnę klucza obcego 'address_id'.
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id", referencedColumnName = "id")
    private Address address;

    // ... gettery i settery
}

@Entity
@Table(name = "addresses")
public class Address {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String city;
    private String street;

    // Klasa Address nie posiada referencji do User.
    // Nawigacja z poziomu adresu do użytkownika nie jest możliwa.

    // ... gettery i settery
}
```

### Wyjaśnienie

*   **`@OneToOne`**: Wskazuje, że jeden użytkownik (`User`) może posiadać przypisany do niego dokładnie jeden adres (`Address`).
*   **`@JoinColumn(name = "address_id")`**: Definiuje fizyczną nazwę kolumny w tabeli właściciela relacji (w tabeli `users`). Będzie ona zawierała klucz obcy wskazujący na klucz główny tabeli `addresses`.
*   **Właściciel relacji**: Encja definiująca `@JoinColumn` (w tym przypadku `User`) jest właścicielem relacji. To po jej stronie w bazie danych zapisany jest klucz obcy.
*   **Brak `mappedBy`**: Ponieważ jest to relacja jednokierunkowa, nigdzie nie używamy atrybutu `mappedBy`. Druga strona (`Address`) w ogóle nie jest świadoma istnienia tej relacji.

> Implementacja relacji 1:1 jednokierunkowej w JPA polega na zdefiniowaniu adnotacji `@OneToOne` (oraz opcjonalnie `@JoinColumn`) wyłącznie w encji, która jest właścicielem relacji. W efekcie to w jej tabeli znajduje się klucz obcy, a w kodzie możliwa jest nawigacja tylko w jedną stronę. Encja docelowa (np. `Address`) pozostaje niezależna i nie używa adnotacji `mappedBy`.
