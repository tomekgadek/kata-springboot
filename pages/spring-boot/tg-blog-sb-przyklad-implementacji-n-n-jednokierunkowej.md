# Przykład implementacji N:N jednokierunkowej

Wiązanie jednokierunkowe (unidirectional) w relacji Many-to-Many (N:N) oznacza, że jedna encja przechowuje kolekcję drugiej encji, ale druga z nich nie ma informacji o tej relacji. Na poziomie bazy danych relacyjnej wymaga to zawsze utworzenia dodatkowej tabeli łączącej (join table), która przechowuje klucze obce z obu powiązanych tabel.

Poniżej znajduje się przykład implementacji relacji `N:N` pomiędzy encjami `Student` oraz `Course` (Kurs). W tej relacji zakładamy, że student zapisuje się na wiele kursów, co pozwala na nawigację od studenta do jego kursów. Jednak sam `Course` nie ma informacji o tym, jacy studenci na niego uczęszczają.

### Kod encji

```java
@Entity
@Table(name = "students")
public class Student {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    // Relacja N:N jednokierunkowa – Student posiada kolekcję kursów
    @ManyToMany
    @JoinTable(
        name = "student_courses", // Nazwa tabeli łączącej
        joinColumns = @JoinColumn(name = "student_id"), // Klucz obcy właściciela relacji
        inverseJoinColumns = @JoinColumn(name = "course_id") // Klucz obcy strony przeciwnej
    )
    private Set<Course> courses = new HashSet<>();

    // ... gettery i settery
}

@Entity
@Table(name = "courses")
public class Course {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    // Klasa Course nie posiada listy studentów.
    // Nawigacja od strony kursu do studentów nie jest możliwa.

    // ... gettery i settery
}
```

### Wyjaśnienie

*   **`@ManyToMany`**: Wskazuje, że jeden student może zapisać się na wiele kursów, a dany kurs może posiadać wielu zapisanych studentów (w tym modelu nawigujemy jednak tylko ze strony studenta). Domyślna strategia pobierania dla tej relacji to `FetchType.LAZY`.
*   **`@JoinTable`**: Służy do konfigurowania tabeli łączącej w bazie danych. Definiuje się w niej nazwę samej tabeli (`name`) oraz kolumny w niej zawarte: `joinColumns` (kolumna klucza obcego dla bieżącej encji) i `inverseJoinColumns` (kolumna klucza obcego dla docelowej encji).
*   **Użycie interfejsu `Set`**: Zastosowanie `Set` zamiast `List` bardzo często prowadzi do wyższej wydajności przy usuwaniu pojedynczych elementów ze zbioru. Kiedy usuwamy z `List` w relacji wiele-do-wielu, Hibernate często usuwa wszystkie rekordy z tabeli złączeniowej, po czym dodaje je na nowo. Dla struktury `Set` potrafi to zrobić o wiele efektywniej (pojedynczym usunięciem rekordu).
*   **Brak informacji po drugiej stronie**: Klasa `Course` nie ma pojęcia o studentach. Aby pobrać informację o studentach dla danego kursu, trzeba utworzyć dedykowane zapytanie JPQL (np. `SELECT s FROM Student s JOIN s.courses c WHERE c.id = :courseId`) w interfejsie `Repository`.

> Relacja N:N jest wymagająca pod względem wydajności dla bazy danych. W rzeczywistych systemach, "czyste" relacje Many-to-Many często zamieniane są na dwie relacje One-to-Many skierowane do dodatkowej encji reprezentującej sam fakt asocjacji (np. `StudentCourseEnrollment`). Pozwala to na przechowywanie dodatkowych informacji o samej relacji, takich jak np. data zapisu na kurs lub ocena końcowa.
