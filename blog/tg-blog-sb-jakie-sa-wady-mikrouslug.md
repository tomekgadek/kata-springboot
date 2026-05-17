# Jakie są wady mikrousług?

Architektura mikrousług, mimo licznych zalet, niesie ze sobą istotne wyzwania i kompromisy. Poniżej przedstawiono najważniejsze wady tego podejścia.

### Złożoność operacyjna

Zarządzanie dziesiątkami lub setkami niezależnych serwisów jest znacznie trudniejsze niż utrzymanie jednego monolitu. Wymaga to zaawansowanej infrastruktury obejmującej **orkiestrację kontenerów** (np. Kubernetes), centralne logowanie, monitoring oraz automatyzację wdrożeń. Bez odpowiednich narzędzi DevOps utrzymanie takiego systemu staje się bardzo kosztowne.

### Komunikacja między serwisami

W monolicie wywołania między modułami odbywają się w pamięci procesu. W architekturze mikrousług komunikacja odbywa się przez sieć (REST, gRPC, kolejki wiadomości), co wprowadza **opóźnienia (latency)**, ryzyko utraty wiadomości oraz konieczność obsługi błędów sieciowych. Wymaga to implementacji wzorców takich jak **retry**, **timeout** i **Circuit Breaker**.

### Spójność danych

Każdy mikroserwis zarządza własną bazą danych, co utrudnia zachowanie spójności danych w całym systemie. Transakcje rozproszone są trudne do implementacji, a wzorce takie jak **Saga** czy **eventual consistency** zwiększają złożoność logiki biznesowej i wymagają starannego projektowania.

### Trudności w debugowaniu i testowaniu

Śledzenie błędów w systemie rozproszonym jest znacznie bardziej skomplikowane niż w monolicie. Pojedyncze żądanie użytkownika może przechodzić przez wiele serwisów, co wymaga narzędzi do **distributed tracing** (np. Zipkin, Jaeger). Testy integracyjne obejmujące wiele serwisów są trudniejsze do przygotowania i utrzymania.

### Duplikacja kodu i danych

Niezależność mikroserwisów może prowadzić do powielania logiki biznesowej, modeli danych lub bibliotek pomocniczych w wielu serwisach. Choć istnieją strategie radzenia sobie z tym problemem (np. wspólne biblioteki), każda z nich wprowadza dodatkowe zależności i kompromisy.

### Overhead infrastrukturalny

Każdy mikroserwis potrzebuje własnego środowiska uruchomieniowego, konfiguracji, pipeline'u CI/CD, monitoringu i logowania. Dla małych zespołów lub prostych aplikacji ten **narzut infrastrukturalny** może przewyższać korzyści wynikające z dekompozycji systemu.

### Wyzwania organizacyjne

Skuteczne wdrożenie mikrousług wymaga dojrzałej kultury DevOps, dobrze zorganizowanych zespołów oraz jasno zdefiniowanych granic między serwisami. Organizacje nieprzygotowane na ten model pracy mogą doświadczyć problemów z koordynacją, rozmyciem odpowiedzialności i spadkiem produktywności.

> **Wady mikrousług** obejmują m.in. złożoność operacyjną, wyzwania związane z komunikacją sieciową, trudności w zachowaniu spójności danych, skomplikowane debugowanie, duplikację kodu oraz znaczny overhead infrastrukturalny. Dlatego decyzja o wyborze architektury mikrousługowej powinna być poprzedzona rzetelną analizą potrzeb i możliwości zespołu – nie każdy system wymaga tego poziomu złożoności.
