# Co to jest Flyway?

Flyway to popularne narzędzie open-source do wersjonowania i migracji schematu bazy danych. Pozwala w prosty, zautomatyzowany i kontrolowany sposób zarządzać zmianami w strukturze bazy danych (np. dodawanie tabel, modyfikowanie kolumn) podobnie, jak systemy kontroli wersji (takie jak Git) zarządzają kodem źródłowym.

## Minipraktyczny przykład

W Spring Boot integracja z Flyway jest niezwykle prosta. Wystarczy dodać odpowiednią zależność do projektu i umieścić skrypty SQL w wyznaczonym folderze.

1. Dodaj zależność w pliku `pom.xml`:
```xml
<dependency>
    <groupId>org.flywaydb</groupId>
    <artifactId>flyway-core</artifactId>
</dependency>
```

2. Utwórz plik migracji z rozszerzeniem `.sql`, zachowując specjalną konwencję nazewnictwa, np. `V1__init_users_table.sql` w folderze `src/main/resources/db/migration`:
```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL
);
```

Podczas startu aplikacji Spring Boot automatycznie wykryje obecność biblioteki Flyway, odnajdzie skrypt i zaaplikuje go na bazie danych.

## Krótkie wyjaśnienie

Zamiast ręcznie uruchamiać skrypty SQL na różnych środowiskach (np. dev, test, prod) i zastanawiać się, w jakim aktualnie stanie jest baza danych, Flyway automatyzuje ten proces. Skrypty migracyjne są nazywane według określonej konwencji (np. `V1__...`, `V2__...`) i uruchamiane w sposób chronologiczny. 

We wdrożonej bazie danych tworzona jest również specjalna tabela (domyślnie `flyway_schema_history`), w której zapisywana jest historia wszystkich wykonanych migracji. Dzięki temu aplikacja zawsze **wie**, które skrypty już zostały wykonane na danej bazie, a które należy uruchomić. Upraszcza to kolosalnie proces deploymentu i zapobiega nieporozumieniom w zespole.

> Twoja baza danych też zasługuje na swój własny system kontroli wersji, tak samo jak twój kod.
