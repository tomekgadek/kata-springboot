# Czym jest JDBC?

**JDBC** (Java Database Connectivity) to standardowy interfejs API języka Java służący do komunikacji z relacyjnymi bazami danych. Pozwala wykonywać zapytania SQL bezpośrednio z poziomu kodu Java, niezależnie od konkretnego dostawcy bazy danych (MySQL, PostgreSQL, H2 itd.).

### Jak dodać JDBC do projektu Spring Boot?

**Dodaj zależności do `pom.xml`**

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-jdbc</artifactId>
</dependency>

<!-- Driver bazy danych, np. H2 (wbudowana baza do testów) -->
<dependency>
    <groupId>com.h2database</groupId>
    <artifactId>h2</artifactId>
    <scope>runtime</scope>
</dependency>
```

Spring Boot automatycznie skonfiguruje źródło danych (`DataSource`) na podstawie wpisów w `application.properties`.

### Proste użycie

Spring Boot udostępnia klasę `JdbcTemplate`, która upraszcza pracę z JDBC i eliminuje konieczność ręcznego zarządzania połączeniami. Poniżej znajduje się przykład operacji CRUD (Create, Read, Update, Delete) zapisany w języku angielskim:

```java
@Repository
public class UserRepository {

    private final JdbcTemplate jdbcTemplate;

    public UserRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    // CREATE
    public void createUser(String name) {
        jdbcTemplate.update(
            "INSERT INTO users (name) VALUES (?)",
            name
        );
    }

    // READ
    public List<String> getAllUserNames() {
        return jdbcTemplate.queryForList(
            "SELECT name FROM users",
            String.class
        );
    }

    // UPDATE
    public void updateUser(Long id, String newName) {
        jdbcTemplate.update(
            "UPDATE users SET name = ? WHERE id = ?",
            newName, id
        );
    }

    // DELETE
    public void deleteUser(Long id) {
        jdbcTemplate.update(
            "DELETE FROM users WHERE id = ?",
            id
        );
    }
}
```

Metoda `queryForList` pobiera wyniki zapytania jako listę, natomiast `update` służy do operacji modyfikujących dane (INSERT, UPDATE, DELETE).

> JDBC to niskopoziomowy API umożliwiający wykonywanie zapytań SQL z poziomu Javy. W Spring Boot najczęściej używa się klasy `JdbcTemplate`, która automatyzuje zarządzanie połączeniami i obsługę wyjątków.
