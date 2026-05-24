# W jaki sposób dodać konfigurację bazy danych w Spring Boot?

Aby Spring Boot mógł połączyć się z bazą danych, musimy dostarczyć odpowiednią konfigurację w pliku `application.properties` (lub `application.yml`). Spring Boot wykorzystuje te parametry do automatycznego utworzenia i skonfigurowania obiektu `DataSource`, który zarządza połączeniami z bazą.

### Podstawowa konfiguracja

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/my_database
spring.datasource.username=root
spring.datasource.password=secret
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

### Znaczenie parametrów

| Parametr | Opis |
|---|---|
| `spring.datasource.url` | Adres URL bazy danych w formacie JDBC. Zawiera protokół (`jdbc:mysql`), host, port i nazwę bazy. |
| `spring.datasource.username` | Nazwa użytkownika do uwierzytelniania w bazie danych. |
| `spring.datasource.password` | Hasło użytkownika bazy danych. |
| `spring.datasource.driver-class-name` | Klasa sterownika JDBC odpowiednia dla danej bazy. Spring Boot zazwyczaj wykrywa ją automatycznie na podstawie URL. |
| `spring.jpa.hibernate.ddl-auto` | Strategia generowania schematu bazy: `none` (brak zmian), `validate` (walidacja), `update` (aktualizacja), `create` (tworzenie od nowa), `create-drop` (tworzenie i usuwanie przy zamknięciu). |
| `spring.jpa.show-sql` | Gdy `true`, Hibernate wypisuje generowane zapytania SQL w konsoli — przydatne do debugowania. |

### Przykład konfiguracji dla bazy H2 (wbudowanej)

```properties
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driver-class-name=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=

spring.jpa.hibernate.ddl-auto=create-drop
spring.h2.console.enabled=true
```

Parametr `spring.h2.console.enabled=true` uruchamia wbudowaną konsolę webową H2, dostępną pod adresem `/h2-console`.

> Konfiguracja bazy danych w Spring Boot sprowadza się do ustawienia odpowiednich parametrów w `application.properties`. Najważniejsze to `url`, `username`, `password` (dane połączenia) oraz `ddl-auto` (strategia zarządzania schematem). W środowisku deweloperskim warto korzystać z bazy H2 i włączonej opcji `show-sql`.
