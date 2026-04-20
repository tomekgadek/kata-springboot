# Jak używać interfejs repozytorium JPA?

**Interfejs repozytorium** w Spring Data JPA to centralny element, który odpowiada za komunikację z bazą danych. Zamiast samodzielnie pisać implementacje DAO (Data Access Object), wystarczy stworzyć interfejs rozszerzający jeden z bazowych interfejsów dostarczanych przez framework. Spring automatycznie wygeneruje implementację w trakcie uruchamiania aplikacji, dając nam dostęp do gotowych operacji CRUD oraz możliwość definiowania własnych zapytań.

### Hierarchia interfejsów

Spring Data JPA udostępnia kilka bazowych interfejsów, z których każdy oferuje inny zakres funkcjonalności:

*   **`Repository<T, ID>`** – interfejs znacznikowy (marker), nie zawiera żadnych metod. Służy jako punkt wyjścia do tworzenia własnych, w pełni niestandardowych repozytoriów.
*   **`CrudRepository<T, ID>`** – rozszerza `Repository` i dostarcza podstawowe operacje CRUD: `save()`, `findById()`, `findAll()`, `delete()`, `count()`, `existsById()`.
*   **`ListCrudRepository<T, ID>`** – wariant `CrudRepository`, który zwraca `List` zamiast `Iterable`.
*   **`PagingAndSortingRepository<T, ID>`** – dodaje obsługę stronicowania (`Pageable`) i sortowania (`Sort`).
*   **`JpaRepository<T, ID>`** – najczęściej używany interfejs. Łączy funkcjonalność wszystkich powyższych i dodaje metody specyficzne dla JPA, takie jak `flush()`, `saveAndFlush()` czy `deleteInBatch()`.

### Przykład użycia

Załóżmy, że mamy encję `Book`:

```java
@Entity
@Table(name = "books")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String author;

    @Column(name = "publication_year")
    private int publicationYear;

    // Konstruktory, gettery i settery ...
}
```

Tworzymy repozytorium rozszerzając `JpaRepository`:

```java
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

    // Gotowe metody (odziedziczone): save(), findById(), findAll(), delete() ...

    // Zapytania generowane z nazwy metody
    List<Book> findByAuthor(String author);
    List<Book> findByPublicationYearGreaterThan(int year);
    List<Book> findByTitleContainingIgnoreCase(String phrase);
}
```

### Użycie repozytorium w serwisie

Repozytorium wstrzykujemy jak każdy inny bean Springa:

```java
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    private final BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public Book addBook(Book book) {
        return bookRepository.save(book);
    }

    public List<Book> getBooksByAuthor(String author) {
        return bookRepository.findByAuthor(author);
    }

    public void deleteBook(Long id) {
        bookRepository.deleteById(id);
    }
}
```

### Konwencja nazewnictwa metod

Spring Data JPA automatycznie generuje zapytania SQL na podstawie nazwy metody. Oto najczęściej używane słowa kluczowe:

| Słowo kluczowe | Przykład metody | Fragment SQL |
|---|---|---|
| `findBy` | `findByTitle(String title)` | `WHERE title = ?` |
| `And` | `findByTitleAndAuthor(...)` | `WHERE title = ? AND author = ?` |
| `Or` | `findByTitleOrAuthor(...)` | `WHERE title = ? OR author = ?` |
| `Between` | `findByYearBetween(int s, int e)` | `WHERE year BETWEEN ? AND ?` |
| `LessThan` | `findByYearLessThan(int year)` | `WHERE year < ?` |
| `GreaterThan` | `findByYearGreaterThan(int year)` | `WHERE year > ?` |
| `Containing` | `findByTitleContaining(String s)` | `WHERE title LIKE %?%` |
| `OrderBy` | `findByAuthorOrderByYearDesc(...)` | `... ORDER BY year DESC` |

>
> Interfejs repozytorium JPA to potężne narzędzie eliminujące potrzebę pisania powtarzalnego kodu dostępu do danych. Wybierz odpowiedni bazowy interfejs (`CrudRepository`, `JpaRepository` itd.) w zależności od potrzeb, definiuj własne zapytania za pomocą konwencji nazewnictwa metod, a Spring zajmie się resztą.
>
