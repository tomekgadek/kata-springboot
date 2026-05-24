# Przykład implementacji N:1 dwukierunkowej

Wiązanie dwukierunkowe (bidirectional) w relacji Many-to-One (N:1) to z technicznego punktu widzenia dokładnie ta sama relacja co One-to-Many (1:N) dwukierunkowa. Różnica polega jedynie na perspektywie, z której na nią patrzymy. W tym przypadku skupiamy się na encji dziecka (strona `N`), która jest właścicielem relacji i posiada klucz obcy, ale jednocześnie encja rodzica (strona `1`) posiada kolekcję dzieci.

Poniżej znajduje się przykład implementacji relacji `N:1` pomiędzy encjami `Employee` (dziecko posiadające klucz obcy) oraz `Department` (rodzic posiadający kolekcję pracowników).

### Kod encji

```java
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

@Entity
@Table(name = "departments")
public class Department {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    // Relacja 1:N – odwrotna strona powiązania N:1. Atrybut mappedBy wskazuje, że relacją zarządza encja Employee
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
```

### Wyjaśnienie

*   **`@ManyToOne` i `@JoinColumn` w `Employee`**: Ta strona jest **właścicielem relacji**. To na podstawie adnotacji w klasie `Employee` (dziecko) generowane są zapytania SQL, które modyfikują klucz obcy `department_id`. Użycie `FetchType.LAZY` jest wysoce zalecane dla zachowania odpowiedniej wydajności.
*   **`@OneToMany(mappedBy = "department")` w `Department`**: Ta strona jest stroną **odwrotną (mapped by)**. Dzięki atrybutowi `mappedBy` informujemy Hibernate, że powiązanie zostało już zdefiniowane po drugiej stronie (w polu `department` w klasie `Employee`). Zapewnia to, że nie zostanie utworzona dodatkowa tabela łącząca.
*   **Synchronizacja stanu**: Relacja dwukierunkowa nakłada na nas obowiązek utrzymywania spójności po obu jej stronach w pamięci aplikacji. Dlatego w klasie `Department` stosuje się metody pomocnicze (`addEmployee`, `removeEmployee`), które aktualizują stan zarówno listy `employees`, jak i referencji w obiekcie `Employee`.

> Mimo że relację tę możemy nazywać `N:1 dwukierunkową` lub `1:N dwukierunkową` w zależności od encji wyjściowej, w rzeczywistości na poziomie kodu oraz bazy danych jest to jedna i ta sama struktura powiązań. Zrozumienie, że strona z kluczem obcym jest zawsze właścicielem relacji, jest kluczowe w pracy z JPA.
