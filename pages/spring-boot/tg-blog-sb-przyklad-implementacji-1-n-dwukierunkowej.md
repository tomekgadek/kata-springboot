# JPA: Relacja 1:N dwukierunkowa

Wiązanie dwukierunkowe (bidirectional) w relacji One-to-Many (1:N) oznacza, że obie encje są świadome swojego istnienia. Encja rodzica posiada kolekcję encji dzieci, a z kolei każda encja dziecka przechowuje referencję zwrotną do rodzica. Dzięki temu nawigacja w kodzie jest możliwa w obu kierunkach.

Poniżej znajduje się przykład implementacji relacji `1:N` pomiędzy encjami `Department` (rodzic) oraz `Employee` (dziecko). Aby prawidłowo zarządzać taką relacją w środowisku zorientowanym obiektowo, stosuje się metody pomocnicze (tzw. *utility methods* lub *convenience methods*) do synchronizacji obu stron powiązania.

### Kod encji

```java
@Entity
@Table(name = "departments")
public class Department {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    // Relacja 1:N – atrybut mappedBy wskazuje, że relacją zarządza encja Employee
    @OneToMany(mappedBy = "department", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Employee> employees = new ArrayList<>();

    // ... gettery i settery

    // Metody pomocnicze do zarządzania dwukierunkową relacją
    public void addEmployee(Employee employee) {
        employees.add(employee);
        employee.setDepartment(this);
    }

    public void removeEmployee(Employee employee) {
        employees.remove(employee);
        employee.setDepartment(null);
    }
}

@Entity
@Table(name = "employees")
public class Employee {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;
    private String lastName;

    // Relacja N:1 – Employee jest właścicielem powiązania w bazie danych
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "department_id")
    private Department department;

    // ... gettery i settery
}
```

### Wyjaśnienie

*   **`@OneToMany(mappedBy = "department")`**: Parametr `mappedBy` znajduje się zawsze po stronie encji, która **nie jest właścicielem** relacji w sensie bazy danych (czyli w rodzicu). Informuje on dostawcę JPA (np. Hibernate), że kolumna z kluczem obcym konfigurowana jest na podstawie pola `department` w klasie `Employee`.
*   **`@ManyToOne` oraz `@JoinColumn`**: Znajdują się w encji docelowej (`Employee`), która staje się **właścicielem relacji**. To na podstawie tej encji generowane są zapytania modyfikujące klucz obcy `department_id` w tabeli `employees`. Fetch type dla asocjacji do pojedynczego obiektu zazwyczaj nadpisuje się na `LAZY` ze względów wydajnościowych.
*   **Synchronizacja obiektowa (`addEmployee`, `removeEmployee`)**: Ponieważ zarządzanie stanem w pamięci RAM działa niezależnie od działania mechanizmów bazodanowych, programista ma obowiązek dbać o synchronizację stanu po obu stronach relacji w czasie runtime'u. Właśnie dlatego tworzy się metody dodające i usuwające, które jednocześnie dbają o ustawienie wskaźnika rodzica w encji dziecka.

> Relacja 1:N dwukierunkowa jest najbardziej polecanym podejściem, jeśli chodzi o powiązania tego typu. Unika ona generowania nadmiarowych instrukcji SQL (jak to ma miejsce przy relacji 1:N jednokierunkowej) oraz pozwala na pełną kontrolę i nawigację z każdej strony domeny, co bardzo ułatwia budowanie zapytań JPQL.
