# Docker - budowa i uruchomienie obrazu od podszewki

### Czym jest obraz Dockera?

Obraz Dockera to gotowy, niezmienny szablon zawierający wszystko, czego aplikacja potrzebuje do działania. Składa się on z warstw, które definiują system operacyjny, narzędzia systemowe, biblioteki oraz sam kod aplikacji.

### Tworzenie pliku Dockerfile

Aby zbudować własny obraz, musisz utworzyć plik tekstowy o nazwie `Dockerfile`. To w nim umieszczasz instrukcje krok po kroku, w jaki sposób Docker ma przygotować środowisko. Każda linijka w tym pliku tworzy nową warstwę w finalnym obrazie.

```dockerfile
# Wybieramy bazowy obraz z systemem i środowiskiem Java
FROM eclipse-temurin:17-jre

# Ustawiamy katalog roboczy wewnątrz kontenera
WORKDIR /app

# Kopiujemy nasz plik JAR z lokalnego systemu do kontenera
COPY target/moja-aplikacja.jar app.jar

# Wskazujemy komendę, która uruchomi się przy starcie kontenera
ENTRYPOINT ["java", "-jar", "app.jar"]
```

### Budowanie obrazu

Mając gotowy `Dockerfile`, możesz zbudować swój obraz. Używasz do tego polecenia `docker build`. Flaga `-t` pozwala na nadanie obrazowi czytelnej nazwy, co ułatwi późniejsze zarządzanie nim.

```bash
docker build -t moja-aplikacja:1.0 .
```

Kropka na końcu polecenia wskazuje na obecny katalog. Z tego miejsca Docker pobiera wszystkie niezbędne pliki, w tym `Dockerfile`.

### Uruchamianie kontenera

Zbudowany obraz jest gotowy do uruchomienia. Kontener to po prostu działająca instancja Twojego obrazu. Uruchamiasz go za pomocą polecenia `docker run`. 

```bash
docker run -d -p 8080:8080 --name moja-apka moja-aplikacja:1.0
```

Flaga `-d` uruchamia kontener w tle (detached mode). Flaga `-p` mapuje port 8080 z Twojego komputera na port 8080 wewnątrz kontenera, dzięki czemu możesz połączyć się z aplikacją. Parametr `--name` nadaje kontenerowi unikalną i łatwą do zapamiętania nazwę.

> Dockerfile to dokładny przepis na środowisko Twojej aplikacji. Dzięki komendom `build` i `run` zamieniasz ten przepis w żywy, odizolowany i w pełni działający system, który zachowa się dokładnie tak samo na dowolnym serwerze.
