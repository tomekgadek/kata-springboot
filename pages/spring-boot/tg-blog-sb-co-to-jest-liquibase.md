# Co to jest Liquibase?

Liquibase to popularne narzędzie open-source do wersjonowania i migracji schematu bazy danych. Pozwala w prosty, zautomatyzowany i kontrolowany sposób zarządzać zmianami w strukturze bazy danych (np. dodawanie tabel, modyfikowanie kolumn) podobnie, jak systemy kontroli wersji (takie jak Git) zarządzają kodem źródłowym.

## Minipraktyczny przykład

W Spring Boot integracja z Liquibase jest niezwykle prosta. Wystarczy dodać odpowiednią zależność do projektu i umieścić skrypty (changelogi) w wyznaczonym folderze.

+ Dodaj zależność w pliku `pom.xml`:
```xml
<dependency>
    <groupId>org.liquibase</groupId>
    <artifactId>liquibase-core</artifactId>
</dependency>
```

+ Utwórz główny plik changelogu, np. `db.changelog-master.yaml` w folderze `src/main/resources/db/changelog`, a w nim odniesienie do plików z konkretnymi zmianami:
```yaml
databaseChangeLog:
  - include:
      file: db/changelog/changes/001-init-users-table.yaml
  - include:
      file: db/changelog/changes/002-add-phone-number-to-users.yaml
```

+ Następnie utwórz pierwszą migrację w `001-init-users-table.yaml`:
```yaml
databaseChangeLog:
  - changeSet:
      id: 1
      author: twoje_imie
      changes:
        - createTable:
            tableName: users
            columns:
              - column:
                  name: id
                  type: int
                  autoIncrement: true
              - column:
                  name: username
                  type: varchar(50)
```

+ Kolejna migracja w `002-add-phone-number-to-users.yaml`:
```yaml
databaseChangeLog:
  - changeSet:
      id: 2
      author: twoje_imie
      changes:
        - addColumn:
            tableName: users
            columns:
              - column:
                  name: phone_number
                  type: varchar(15)
```

Podczas startu aplikacji Spring Boot automatycznie wykryje obecność biblioteki Liquibase, odnajdzie główny changelog i po kolei zaaplikuje wskazane w nim pliki na bazie danych.

## Jak to działa?

Zamiast ręcznie uruchamiać skrypty SQL na różnych środowiskach (np. dev, test, prod) i zastanawiać się, w jakim aktualnie stanie jest baza danych, Liquibase automatyzuje ten proces. Zmiany w bazie danych są opisywane za pomocą formatów XML, YAML, JSON lub czystego SQL. To pozwala na niezależność od konkretnego dialektu bazy danych (w przypadku formatów innych niż SQL), co daje Liquibase ogromną zaletę w projektach używających różnych silników bazodanowych.

We wdrożonej bazie danych tworzona jest specjalna tabela (domyślnie `DATABASECHANGELOG`), w której zapisywana jest historia wszystkich wykonanych changesetów. Dzięki temu aplikacja zawsze **wie**, które zmiany już zostały wykonane na danej bazie, a które należy uruchomić. Znacząco upraszcza proces wdrożenia i minimalizuje ryzyko błędnej konfiguracji bazy danych.

> Twoja baza danych też zasługuje na swój własny system kontroli wersji, tak samo jak twój kod.
