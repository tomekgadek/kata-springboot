# Przykład implementacji 1:N jednokierunkowej

Wiązanie jednokierunkowe (unidirectional) w relacji One-to-Many (1:N) oznacza, że encja rodzica posiada kolekcję encji dzieci, ale encje dzieci nie posiadają referencji zwrotnej do rodzica. W tym podejściu nawigacja pomiędzy obiektami w kodzie możliwa jest tylko od strony rodzica do dziecka.

Poniżej znajduje się przykład implementacji relacji `1:N` pomiędzy encjami `Department` (rodzic) oraz `Employee` (dziecko). W tym przypadku `Department` przechowuje listę swoich pracowników, ale obiekt klasy `Employee` nie posiada informacji o departamencie, do którego należy.

### Kod encji

```java
@Entity
@Table(name = "departments")
public class Department {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    // Relacja 1:N – Dział jest właścicielem powiązania i posiada listę pracowników.
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    // Tworzy klucz obcy 'department_id' w tabeli 'employees' unikając dodatkowej tabeli łączącej
    @JoinColumn(name = "department_id") 
    private List<Employee> employees = new ArrayList<>();

    // ... gettery i settery
}

@Entity
@Table(name = "employees")
public class Employee {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;
    private String lastName;

    // Klasa Employee nie posiada referencji do Department.
    // Nawigacja z poziomu pracownika do działu nie jest możliwa.

    // ... gettery i settery
}
```

### Wyjaśnienie

*   **`@OneToMany`**: Wskazuje, że jeden departament (`Department`) może posiadać wielu przypisanych do niego pracowników (`Employee`). Atrybut `orphanRemoval = true` oznacza, że usunięcie pracownika z listy w obiekcie `Department` spowoduje automatyczne usunięcie tego pracownika również z bazy danych.
*   **`@JoinColumn(name = "department_id")`**: W przypadku jednokierunkowej relacji 1:N, dodanie adnotacji `@JoinColumn` sprawia, że Hibernate dodaje kolumnę klucza obcego (`department_id`) do tabeli dziecka (`employees`). Gdybyśmy pominęli `@JoinColumn`, domyślnym zachowaniem dostawcy JPA (Hibernate) byłoby utworzenie dodatkowej tabeli pośredniej (tzw. *join table*).
*   **Brak referencji powrotnej**: Encja `Employee` w ogóle nie jest świadoma istnienia relacji. Nie definiujemy w niej adnotacji `@ManyToOne` z polem wskazującym na `Department`.

> Implementacja relacji 1:N jednokierunkowej pozwala ukryć powiązanie z perspektywy encji docelowej. Warto jednak pamiętać, że zarządzanie elementami w takiej kolekcji bywa niekiedy mniej zoptymalizowane pod kątem bazy danych (np. nadmiarowe instrukcje `UPDATE` wykonane na tabeli dzieci po instrukcjach `INSERT`), ponieważ encja podrzędna nie zarządza bezpośrednio swoim kluczem obcym.
