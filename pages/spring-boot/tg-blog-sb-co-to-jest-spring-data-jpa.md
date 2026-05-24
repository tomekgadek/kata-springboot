# Co to jest Spring Data JPA?

**Spring Data JPA** to podprojekt rozwijany w ramach Spring Data, stanowiący nakładkę na API JPA (Java Persistence API), czyli zaawansowanego mapowania obiektowo-relacyjnego (ORM) w Javie (najczęściej w implementacji Hibernate). Jego głównym celem jest maksymalne uproszczenie pracy z bazami danych poprzez redukcję powtarzalnego kodu (boilerplate). Zamiast pisać własne klasy DAO (Data Access Object) do interakcji z bazą, wystarczy zdefiniować interfejs, a Spring automatycznie wygeneruje jego implementację w trakcie działania aplikacji.

### Jak dodać Spring Data JPA do projektu?

**Dodaj zależność do `pom.xml`**

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
```

### Proste użycie

Aby skorzystać z podstawowych operacji bazodanowych (CRUD) nie musimy pisać żadnego zapytania SQL, wystarczy stworzyć odpowiedni interfejs i rozszerzyć bazowy `JpaRepository`:

```java
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    // Metody typu save(), findById(), delete() są dostępne od ręki!

    // Własne zapytanie tworzysz poprzez odpowiednie nazwanie metody
    List<User> findByNameAndAgeGreaterThan(String name, int age);

    // Możesz również pisać własne zapytania (JPQL lub natywne SQL) używając @Query
    @Query("SELECT u FROM User u WHERE u.email LIKE %:domain")
    List<User> findUsersByEmailDomain(String domain);
}
```

### Zalety i wady

**Zalety:**
* Ogromna oszczędność czasu na implementacji podstawowych operacji bazodanowych i brak konieczności ręcznego wypisywania zapytań SQL/HQL.
* Automatyczne generowanie zapytań SQL bezpośrednio na podstawie nazw metod w interfejsie (`findBy...`).
* Wbudowane mechanizmy wspierające stronicowanie (pagination) i sortowanie wyników.

**Wady:**
* Gorsza kontrola i optymalizacja nad faktycznie wykonywanym zapytaniem SQL zmuszająca do ręcznego profilowania (np. problem N+1 zapytań).
* Zauważalny narzut wydajnościowy w porównaniu do "czystego", bezpośredniego używania JDBC.

>
> Spring Data JPA to bardzo potężny mechanizm, przyspieszający komunikację z bazą danych w aplikacjach Spring Boot. Pozwala na tworzenie zapytań stosując:
> – odpowiedni standard nazewnictwa metod lub
> – adnotacji JPQL/SQL.
> 
