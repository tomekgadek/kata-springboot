# Co to jest API Gateway?

**API Gateway** (Brama API) to pojedynczy punkt wejścia (entry point) dla klientów komunikujących się z systemem opartym na mikroserwisach. Zamiast odpytywać każdy serwis osobno (i martwić się o adresy IP), klient wysyła zapytanie do bramy, która przekierowuje je we właściwe miejsce.

W ekosystemie Spring najczęściej wykorzystuje się do tego **Spring Cloud Gateway**.

## Główne zadania

- **Routing:** Przekierowywanie żądań do odpowiednich mikroserwisów (często we współpracy z rejestrem usług, np. Eureka).
- **Bezpieczeństwo:** Centralna weryfikacja autoryzacji (np. sprawdzanie tokenów JWT) przed wejściem do systemu.
- **Rate Limiting i Filtrowanie:** Zabezpieczenie przed przeciążeniem oraz dodawanie niezbędnych nagłówków do zapytań (np. śledzenie ID).

## Przykładowa implementacja

**Zależność Maven:**
```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-gateway</artifactId>
</dependency>
```

**Konfiguracja `application.properties`:**
Definiujemy tzw. drogi (routes), określając, pod jakim adresem brama ma nasłuchiwać i dokąd przekazywać ruch. Przedrostek `lb://` (Load Balancer) oznacza, że brama będzie odpytywać np. Eurekę o adres fizyczny usługi.

```properties
# Port dla aplikacji API Gateway
server.port=8080

# Przekierowanie ruchu do serwisu zamówień (order-service)
spring.cloud.gateway.routes[0].id=order-service-route
spring.cloud.gateway.routes[0].uri=lb://order-service
spring.cloud.gateway.routes[0].predicates[0]=Path=/api/orders/**

# Przekierowanie ruchu do serwisu magazynowego (inventory-service)
spring.cloud.gateway.routes[1].id=inventory-service-route
spring.cloud.gateway.routes[1].uri=lb://inventory-service
spring.cloud.gateway.routes[1].predicates[0]=Path=/api/inventory/**
```

Dzięki temu aplikacje klienckie wysyłają zapytania tylko na port `8080`, a brama dyskretnie przekazuje ruch dalej do usług schowanych w prywatnej sieci.

> API Gateway działa jak inteligentny recepcjonista w wielkim biurowcu - zamiast zmuszać klientów do błądzenia po piętrach, odbiera zapytanie, sprawdza "przepustkę" i bezpiecznie kieruje ich we właściwe miejsce.
