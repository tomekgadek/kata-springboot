# Przykład implementacji 1:1 dwukierunkowej

Wiązanie dwukierunkowe (bidirectional) w relacji One-to-One (1:1) oznacza, że obie encje z pary posiadają referencję do siebie nawzajem. W tym podejściu nawigacja pomiędzy obiektami w kodzie możliwa jest w obu kierunkach (np. od użytkownika do adresu, jak i od adresu do użytkownika).

Poniżej znajduje się przykład implementacji relacji `1:1` pomiędzy encjami `User` oraz `Address`.

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

    // Klasa Address posiada referencję do User (strona zależna).
    // Adnotacja 'mappedBy' wskazuje pole 'address' w klasie User.
    @OneToOne(mappedBy = "address")
    private User user;

    // ... gettery i settery
}
```

### Wyjaśnienie

*   **`@OneToOne` w klasie User**: Podobnie jak w relacji jednokierunkowej, `User` wskazuje na przypisany mu adres.
*   **`@JoinColumn(name = "address_id")`**: Definiuje, że `User` jest właścicielem relacji i to w jego tabeli będzie znajdował się klucz obcy.
*   **`@OneToOne(mappedBy = "address")` w klasie Address**: Jest to kluczowy element relacji dwukierunkowej. Wskazuje, że klasa `Address` jest stroną odwrotną (zależną) relacji, a klucz obcy jest w rzeczywistości mapowany i kontrolowany przez pole `address` w klasie `User`. Nie tworzy to nowej kolumny w tabeli `addresses`.
*   **Nawigacja**: Dzięki temu możemy pobrać adres i wywołać `address.getUser()`, aby dowiedzieć się, do kogo należy dany adres.
*   **Synchronizacja obustronna**: Posiadając relację dwukierunkową, należy dbać o spójność danych po obu stronach w kodzie Javy (np. tworząc specjalną metodę `setAddress` w klasie `User`, która jednocześnie przypisze powiązanego użytkownika w obiekcie adresu: `address.setUser(this)`).

> Implementacja relacji 1:1 dwukierunkowej pozwala na łatwiejszą nawigację pomiędzy obiektami w kodzie aplikacji. Wymaga jednak zdefiniowania strony będącej właścicielem (posiadającej klucz obcy, używającej `@JoinColumn`) oraz strony zależnej (odwrotnej, używającej atrybutu `mappedBy`). Należy również pamiętać o odpowiedniej synchronizacji stanu powiązanych obiektów w pamięci.
