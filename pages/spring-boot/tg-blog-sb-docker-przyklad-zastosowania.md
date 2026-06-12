# Docker - przykład zastosowania

### Współdzielenie aplikacji 

Wyobraź sobie gotową aplikację w Javie. Chcesz przekazać ją koledze do przetestowania. Normalnie musiałby on najpierw zainstalować Javę i konfigurować bazę danych. Często kończy się to stratą czasu i konfliktami oprogramowania.

### Rozwiązanie dzięki kontenerom

Docker praktycznie eliminuje te problemy. Kolega nie instaluje w ogóle Javy na swoim komputerze. Potrzebuje jedynie zainstalowanego programu Docker. Tworzysz dla niego specjalny plik o nazwie `Dockerfile`. Umieszczasz go w głównym katalogu projektu. Plik ten wymaga obecności skompilowanej aplikacji w podfolderze o nazwie `target`. Gotowy plik JAR musi po prostu tam się znajdować.

```dockerfile
FROM eclipse-temurin:17-jre
COPY target/moja-aplikacja.jar app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]
```

### Proste uruchomienie

Powyższy kod definiuje niezbędne środowisko. Definiuje on instalację bazowej wersji Javy 17 i skopiowanie pliku aplikacji. Twój znajomy buduje obraz i uruchamia go w terminalu. Wystarczą do tego zaledwie dwa krótkie polecenia.

```bash
docker build -t moja-aplikacja .
docker run -p 8080:8080 moja-aplikacja
```

Aplikacja działa natychmiast w pełnej izolacji.

### Złożone systemy z Docker Compose

Twoja aplikacja zazwyczaj wymaga również bazy danych. Używasz do tego pliku `docker-compose.yml`. Łączy on gotowy kod z czystą bazą PostgreSQL.

```yaml
services:
  aplikacja:
    image: moja-aplikacja
    ports:
      - "8080:8080"
    environment:
      SPRING_DATASOURCE_URL: jdbc:postgresql://baza:5432/mojabaza
  baza:
    image: postgres:15
    environment:
      POSTGRES_PASSWORD: supertajnehaslo
```

W konfiguracji aplikacji Java musisz użyć poprawnego adresu. Jako hosta bazy podajesz nazwę serwisu z powyższego pliku. Używasz nazwy `baza` zamiast domyślnego `localhost`. Wartość tę przekazujesz najczęściej przez zmienną środowiskową.

### Pełne środowisko w sekundę

Kolega wpisuje komendę `docker compose up`. Narzędzie automatycznie pobiera czystą bazę danych. Ustawia wewnętrzną sieć między serwisami. Dzięki temu aplikacja może swobodnie połączyć się z bazą danych. Całość działa bez jakiejkolwiek ingerencji w system operacyjny odbiorcy. Po wszystkim znajomy usuwa kontenery i zostawia swój komputer w idealnej czystości.

> Docker drastycznie upraszcza udostępnianie oprogramowania. Bardzo mocno ogranicza potrzebę żmudnej konfiguracji środowiska. Pozwala uruchomić skomplikowane systemy za pomocą jednej prostej komendy.
