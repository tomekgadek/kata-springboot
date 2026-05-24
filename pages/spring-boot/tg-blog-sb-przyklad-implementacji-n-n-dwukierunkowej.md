# Przykład implementacji N:N dwukierunkowej

Wiązanie dwukierunkowe (bidirectional) w relacji Many-to-Many (N:N) oznacza, że obie strony relacji posiadają informacje o sobie nawzajem. Jedna encja przechowuje kolekcję drugiej, a druga encja posiada kolekcję pierwszej. Na poziomie bazy danych wciąż wymaga to tylko jednej tabeli łączącej (join table), ale w kodzie Javy zyskujemy możliwość nawigacji w obu kierunkach.

Aby poprawnie skonfigurować taką relację, musimy wybrać stronę zarządzającą relacją (właściciela) oraz stronę odwrotną (oddaną, `mappedBy`). Właściciel relacji jest odpowiedzialny za definiowanie tabeli łączącej i to operacje na nim powodują aktualizację asocjacji w bazie danych.

Poniżej znajduje się przykład implementacji relacji `N:N` pomiędzy encjami `Student` oraz `Course` (Kurs). Zakładamy, że student może być zapisany na wiele kursów, a dany kurs może posiadać wielu zapisanych studentów.

### Kod encji

```java
@Entity
@Table(name = "students")
public class Student {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    // Relacja N:N dwukierunkowa – strona zarządzająca (właściciel relacji)
    @ManyToMany
    @JoinTable(
        name = "student_courses",
        joinColumns = @JoinColumn(name = "student_id"),
        inverseJoinColumns = @JoinColumn(name = "course_id")
    )
    private Set<Course> courses = new HashSet<>();

    // Metody pomocnicze do synchronizacji obu stron relacji w pamięci
    public void addCourse(Course course) {
        this.courses.add(course);
        course.getStudents().add(this);
    }

    public void removeCourse(Course course) {
        this.courses.remove(course);
        course.getStudents().remove(this);
    }

    // ... gettery i settery
}

@Entity
@Table(name = "courses")
public class Course {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    // Relacja N:N dwukierunkowa – strona odwrotna (mappedBy)
    @ManyToMany(mappedBy = "courses")
    private Set<Student> students = new HashSet<>();

    // ... gettery i settery
}
```

### Wyjaśnienie

*   **Strona zarządzająca (`Student`)**: Definiuje adnotację `@JoinTable`, co wskazuje, że jest ona właścicielem relacji. To zapisy w kolekcji `courses` w encji `Student` decydują o tym, jakie wiersze powstaną w tabeli łączącej.
*   **Strona odwrotna (`Course`)**: Używa atrybutu `mappedBy = "courses"` w adnotacji `@ManyToMany`. Informuje to providera JPA (np. Hibernate), że ta strona odzwierciedla relację, która jest już zarządzana przez pole `courses` w klasie `Student`. Strona z `mappedBy` nie modyfikuje kluczy obcych / tabeli złącznej.
*   **Metody pomocnicze (`addCourse`, `removeCourse`)**: W relacjach dwukierunkowych niezwykle ważne jest, aby utrzymać spójność obiektów w pamięci operacyjnej (zanim zostaną zapisane do bazy). Dodając kurs do studenta, musimy dodać studenta do kursu. Metody te hermetyzują ten proces, chroniąc przed błędami i niespójnym stanem.
*   **Zastosowanie `Set`**: Podobnie jak w wariancie jednokierunkowym, kolekcja typu `Set` (zamiast `List`) działa dużo efektywniej przy operacjach na asocjacjach wiele-do-wielu, zapobiegając nadmiernym instrukcjom `DELETE` i `INSERT` ze strony Hibernate'a podczas modyfikacji elementów w tabeli łączącej.

> Mimo że relacja N:N dwukierunkowa pozwala na wygodną nawigację w obie strony, w rzeczywistych aplikacjach często się jej unika na rzecz dwóch relacji 1:N (oraz N:1) do jawnej encji łączącej. Pozwala to na przechowywanie dodatkowych atrybutów relacji (np. daty zapisu, roli) i daje pełniejszą kontrolę nad modelem danych. Niezależnie od wybranego podejścia, w relacjach dwukierunkowych należy zawsze dbać o ścisłą synchronizację danych po obu stronach w pamięci aplikacji.
