# Co to jest Docker?

**Docker** to nowoczesna platforma. Umożliwia ona tworzenie wyizolowanych środowisk zwanych **kontenerami**. Kontener zawiera aplikację oraz wszystkie jej zależności. Znajdują się w nim biblioteki, konfiguracja i środowisko uruchomieniowe. 

Nie musisz już instalować baz danych bezpośrednio na serwerze. Nie musisz martwić się o specyficzne wersje języków programowania. Wszystkie te elementy uruchamiasz jako gotowe i odizolowane instancje.

### Dlaczego to jest takie ważne?

**Koniec problemów ze środowiskiem.** Dawniej aplikacja mogła działać u programisty, ale zgłaszała błędy na produkcji. Wynikało to często z różnych wersji oprogramowania. Docker rozwiązuje ten problem. Dostarcza on aplikację ze zdefiniowanym i niezmiennym środowiskiem. Daje to pewność identycznego działania w każdym miejscu.

**Logiczna izolacja.** Kontenery są od siebie odseparowane. Dzielą one jednak wspólne jądro systemu operacyjnego hosta. Nie jest to pełna izolacja znana z maszyn wirtualnych. Mimo to umożliwia równoległe uruchomienie wielu aplikacji obok siebie. Jedna może korzystać z Javy 8, a inna z Javy 21. Wszystko działa na tym samym serwerze bez konfliktów.

**Wydajność i maszyny wirtualne.** Maszyny wirtualne emulują całą warstwę sprzętową. Posiadają zawsze oddzielny system operacyjny. Kontenery wirtualizują jedynie warstwę oprogramowania. Współdzielą one zasoby hosta. Zużywają dzięki temu znacznie mniej pamięci. Uruchamiają się również w ułamku sekundy.

### Kluczowe pojęcia w ekosystemie Dockera

**Obraz (Image)** to niemodyfikowalny szablon. Służy on do tworzenia kontenerów. Zawiera kod źródłowy, biblioteki oraz niezbędne narzędzia. W programowaniu obiektowym obraz można traktować jako klasę.

**Kontener (Container)** to funkcjonująca instancja obrazu. W programowaniu obiektowym pełni rolę obiektu. Możesz go uruchamiać, zatrzymywać i usuwać. Kontenery powinny być traktowane jako efemeryczne. Zgodnie z dobrymi praktykami nie modyfikuje się ich stanu. W razie potrzeby zastępuje się je nowymi.

**Dockerfile** to plik deklaratywny. Zawiera on instrukcje do zbudowania obrazu. Definiuje on kolejne kroki. Wybiera bazową dystrybucję systemu. Instaluje środowisko uruchomieniowe. Kopiuje ostatecznie zbudowaną aplikację.

**Docker Compose** to przydatne narzędzie. Zarządza ono aplikacjami wielokontenerowymi. Wykorzystuje plik konfiguracyjny w formacie YAML. Umożliwia jednoczesne uruchomienie powiązanych usług. Jednym poleceniem włączasz aplikację i potrzebną bazę danych.

> Docker to obecnie absolutny standard. Stanowi podstawę wdrażania nowoczesnych aplikacji. Ogromnie minimalizuje problemy z różnicami w środowiskach. Upraszcza proces uruchamiania oprogramowania na serwerach produkcyjnych.
