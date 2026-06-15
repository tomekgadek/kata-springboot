# Docker - 12 przydatnych komend, które musisz znać

Podczas codziennej pracy z Dockerem, niektóre komendy są wykorzystywane niemalże bez przerwy. Aby w pełni swobodnie poruszać się po tym ekosystemie i opanować solidne podstawy, warto zaprzyjaźnić się z poniższą dwunastką poleceń. Stanowią one absolutny fundament wydajnej pracy ze środowiskiem kontenerowym.

## 1. `docker run`
Służy do tworzenia i uruchamiania nowego kontenera na podstawie obrazu. Jeśli obrazu nie ma jeszcze na Twoim lokalnym dysku, Docker automatycznie pobierze go z rejestru. Często używa się flag `-d` (uruchomienie w tle) oraz `-p` (mapowanie portów).

```bash
docker run -d -p 8080:80 --name moj-nginx nginx
```

## 2. `docker ps`
Podstawowe polecenie służące do wyświetlania listy aktualnie uruchomionych kontenerów. Dodanie flagi `-a` (`docker ps -a`) sprawia, że zobaczysz absolutnie wszystkie kontenery - zarówno te działające, jak i zatrzymane.

```bash
docker ps
docker ps -a
```

## 3. `docker stop`
Zatrzymuje działanie uruchomionego kontenera. Pozwala na bezpieczne wyłączenie procesu działającego wewnątrz (wysyła sygnał SIGTERM).

```bash
docker stop moj-nginx
```

## 4. `docker rm`
Usuwa zatrzymany kontener z dysku, zwalniając zasoby. Nie można domyślnie usunąć kontenera, który wciąż działa (chyba że użyjesz flagi `-f`, co wymusza usunięcie).

```bash
docker rm moj-nginx
```

## 5. `docker exec`
Bardzo przydatne, gdy kontener już działa, a Ty potrzebujesz wykonać w jego wnętrzu jakieś polecenie – na przykład zajrzeć do systemu plików. W połączeniu z flagami `-it` pozwala na interaktywną pracę wewnątrz kontenera, otwierając powłokę systemową.

```bash
docker exec -it moj-nginx bash
```

## 6. `docker logs`
Podstawowe narzędzie do diagnozowania problemów. Wyświetla to, co aplikacja wypisuje na standardowe wyjście wewnątrz kontenera. Flaga `-f` pozwala na śledzenie logów "na żywo".

```bash
docker logs -f moj-nginx
```

## 7. `docker pull`
Pobiera obraz z zewnętrznego rejestru (najczęściej z Docker Hub) na Twój dysk lokalny bez jego uruchamiania. Przydatne, gdy chcesz zaktualizować wersję obrazu przed jego użyciem.

```bash
docker pull ubuntu:22.04
```

## 8. `docker images`
Wyświetla listę wszystkich obrazów, które zostały pobrane lub zbudowane i znajdują się obecnie na Twoim dysku lokalnym wraz z informacją o ich rozmiarze.

```bash
docker images
```

## 9. `docker rmi`
Służy do usuwania obrazów (Remove Image). Obrazy potrafią zajmować sporo miejsca na dysku, więc warto regularnie usuwać te, z których już nie korzystasz. Zauważ różnicę: `rm` usuwa kontener, a `rmi` usuwa obraz.

```bash
docker rmi ubuntu:22.04
```

## 10. `docker build`
Polecenie służące do tworzenia własnego obrazu na podstawie instrukcji zawartych w pliku `Dockerfile`. Flaga `-t` nadaje obrazowi nazwę (tag). Kropka na końcu oznacza, że kontekstem budowania jest obecny katalog.

```bash
docker build -t moja-aplikacja:1.0 .
```

## 11. `docker inspect`
Zaawansowane narzędzie diagnostyczne. Zwraca ogromny plik JSON zawierający wszystkie niskopoziomowe informacje o kontenerze lub obrazie – w tym jego wewnętrzny adres IP, zmienne środowiskowe czy zmapowane ścieżki na dysku.

```bash
docker inspect moj-nginx
```

## 12. `docker system prune`
Jedna z najważniejszych komend do zachowania porządku. Automatycznie wyszukuje i usuwa nieużywane kontenery, sieci oraz tzw. "wiszące" obrazy. Oczyszcza dysk z gigabajtów śmieci powstałych podczas codziennej pracy.

```bash
docker system prune
```
