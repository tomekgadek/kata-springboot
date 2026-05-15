# Co to jest SOA?

**SOA** (Service-Oriented Architecture), czyli Architektura Zorientowana na Usługi, to podejście do projektowania systemów informatycznych, w którym aplikacja budowana jest z niezależnych, reużywalnych usług (serwisów). Każda usługa realizuje określoną funkcję biznesową i udostępnia ją innym komponentom za pośrednictwem dobrze zdefiniowanych interfejsów.

### Kluczowe cechy SOA

- **Luźne powiązanie (Loose Coupling):** Usługi są od siebie niezależne – zmiana wewnętrznej implementacji jednej usługi nie wymusza zmian w pozostałych.
- **Reużywalność:** Usługi projektowane są tak, aby mogły być wykorzystywane przez wiele różnych aplikacji i procesów biznesowych.
- **Odkrywalność:** Usługi są opisane w sposób umożliwiający ich wyszukiwanie i wykorzystanie (np. poprzez rejestr usług).
- **Standaryzowane kontrakty:** Komunikacja oparta jest na wspólnych standardach (np. SOAP, WSDL, XML), co zapewnia interoperacyjność między różnymi platformami i technologiami.

### ESB – Enterprise Service Bus

Centralnym elementem klasycznej architektury SOA jest **ESB** (Enterprise Service Bus) – magistrala integracyjna odpowiedzialna za trasowanie komunikatów, transformację danych, orkiestrację procesów i zarządzanie politykami bezpieczeństwa. ESB pełni rolę pośrednika między usługami, dzięki czemu nie muszą one komunikować się bezpośrednio.

Wadą tego podejścia jest jednak to, że ESB z czasem staje się „centralnym mózgiem" systemu – bardzo złożonym i trudnym w utrzymaniu. To właśnie ta wada była jednym z powodów, dla których architektura mikroserwisów odeszła od scentralizowanej magistrali na rzecz prostych, bezpośrednich kanałów komunikacji.

### SOA a mikroserwisy

SOA i mikroserwisy dzielą wspólną ideę budowy systemów z niezależnych usług, jednak różnią się w podejściu do integracji i zakresu. SOA kładzie nacisk na integrację dużych, korporacyjnych systemów za pomocą wspólnej infrastruktury (ESB), podczas gdy mikroserwisy stawiają na mniejsze, w pełni autonomiczne usługi komunikujące się bezpośrednio (np. przez REST lub kolejki wiadomości).

> **SOA** to styl architektoniczny, w którym system składa się z luźno powiązanych, reużywalnych usług komunikujących się przez ustandaryzowane interfejsy. Choć SOA wprowadziło fundamentalne zasady budowy systemów rozproszonych, jego klasyczna forma (oparta na ciężkim ESB) została w dużej mierze zastąpiona przez lżejszą architekturę mikroserwisów.
