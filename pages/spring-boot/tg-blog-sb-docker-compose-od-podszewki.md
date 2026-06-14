# Docker compose od podszewki

### Czym jest Docker Compose?

Docker Compose to narzędzie, które pozwala definiować i uruchamiać wielokontenerowe aplikacje. Zamiast ręcznie zarządzać każdym kontenerem z osobna, cały swój system (np. aplikację, bazę danych, serwer kolejek) opisujesz w jednym spójnym pliku konfiguracyjnym.

### Plik docker-compose.yml

Konfigurację zapisuje się w formacie YAML, najczęściej w pliku `docker-compose.yml`. Deklarujesz w nim serwisy, czyli poszczególne kontenery wchodzące w skład Twojego środowiska.

```yaml
services:
  app:
    build: .
    ports:
      - "8080:8080"
    environment:
      - SPRING_DATASOURCE_URL=jdbc:postgresql://db:5432/mojabaza
    depends_on:
      - db

  db:
    image: postgres:15
    environment:
      - POSTGRES_PASSWORD=sekretne_haslo
      - POSTGRES_DB=mojabaza
```

Powyższy plik instruuje Dockera, aby zbudował aplikację z lokalnego pliku `Dockerfile` (serwis `app`) oraz pobrał gotowy obraz PostgreSQL (serwis `db`). Dodatkowo aplikacja otrzyma zmienne środowiskowe z odpowiednim adresem bazy.

### Sieci i komunikacja

Jedną z największych zalet Docker Compose jest to, że automatycznie tworzy wewnętrzną sieć dla Twoich serwisów. Zauważ, że w adresie URL do bazy danych (`jdbc:postgresql://db:5432/mojabaza`) użyliśmy słowa `db`. Docker Compose sam rozwiąże tę nazwę na wewnętrzny adres IP kontenera z bazą, co zwalnia nas z martwienia się o adresację.

### Uruchamianie i zatrzymywanie

Zarządzanie całym tym systemem sprowadza się do dwóch prostych komend, które wywołujesz w folderze z plikiem YAML. Aby powołać do życia całe środowisko wpisujesz:

```bash
docker compose up -d
```

Flaga `-d` uruchomi wszystko w tle. Aby z kolei zatrzymać i usunąć całe to środowisko, gdy skończysz pracę, wystarczy wpisać:

```bash
docker compose down
```

> Docker Compose to dyrygent Twojej orkiestry kontenerów. Pozwala opisać architekturę całego systemu jako kod, co radykalnie przyspiesza proces dewelopmentu i testowania, zwalniając Cię z konieczności zapamiętywania dziesiątek długich poleceń terminala.
