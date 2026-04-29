# Przykład implementacji N:1 jednokierunkowej

Wiązanie jednokierunkowe (unidirectional) w relacji Many-to-One (N:1) oznacza, że wiele encji (dzieci) przechowuje referencję do jednej encji (rodzica), ale encja rodzica nie posiada kolekcji swoich dzieci. Jest to jedna z najczęściej stosowanych, najprostszych i najbardziej wydajnych relacji w bazach danych i JPA, ponieważ odzwierciedla naturalny układ tabel (tabela przechowuje klucz obcy).

Poniżej znajduje się przykład implementacji relacji `N:1` pomiędzy encjami `Employee` (dziecko posiadające klucz obcy) oraz `Department` (rodzic).

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

    // Relacja N:1 jednokierunkowa - Employee posiada referencję do Department.
    // FetchType.LAZY jest zalecane ze względów wydajnościowych, aby nie pobierać działu zawsze z pracownikiem.
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "department_id") // Definiuje klucz obcy w tabeli 'employees'
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

    // Klasa Department nie posiada listy pracowników.
    // Nawigacja z poziomu działu do pracowników nie jest możliwa.

    // ... gettery i settery
}
```

### Wyjaśnienie

*   **`@ManyToOne`**: Wskazuje, że wielu pracowników (`Employee`) może należeć do tego samego działu (`Department`). Użycie `FetchType.LAZY` jest dobrą praktyką, ponieważ domyślnie relacje z przyrostkiem `-ToOne` ładują dane w sposób zachłanny (`EAGER`), co może powodować niepotrzebne obciążenie przy ładowaniu wielu rekordów.
*   **`@JoinColumn(name = "department_id")`**: Wskazuje, że tabela `employees` będzie zawierała kolumnę z kluczem obcym o nazwie `department_id`, wskazującą na identyfikator działu.
*   **Brak kolekcji w rodzicu**: Klasa `Department` nie wie, jacy pracownicy są do niej przypisani. Aby pobrać pracowników danego działu, należy napisać dedykowane zapytanie używając interfejsu `Repository` (np. zapytanie JPQL `SELECT e FROM Employee e WHERE e.department.id = :deptId`).

> Relacja N:1 jednokierunkowa jest niezwykle optymalna, ponieważ nie musimy martwić się o wywoływanie zbędnych zapytań ani zarządzać stanem podwójnej asocjacji (brak konieczności stosowania metod pomocniczych). To dziecko jednoznacznie i samodzielnie zarządza kluczem obcym na poziomie relacyjnej bazy danych.
