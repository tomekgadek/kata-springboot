# Co to jest Ribbon?

**Ribbon** to biblioteka z ekosystemu **Netflix OSS** realizująca wzorzec **Client-Side Load Balancing** (równoważenie obciążenia po stronie klienta).

W klasycznym podejściu (Server-Side Load Balancing) żądania trafiają do centralnego load balancera (np. Nginx), który kieruje je do instancji docelowej. Ribbon całkowicie eliminuje ten punkt centralny. Mikroserwis pobiera z rejestru usług (np. Eureka) aktualną listę dostępnych instancji docelowego serwisu. Następnie, na podstawie skonfigurowanego algorytmu (np. *Round Robin*), samodzielnie wybiera adres IP i port jednej z nich i wysyła tam bezpośrednio żądanie HTTP.

## Główne cechy
* **Natywna integracja z Eureka** – automatyczne pobieranie i buforowanie fizycznych adresów instancji.
* **Pluggable Rules** – możliwość wpinania własnych lub użycia wbudowanych algorytmów trasowania (np. Round Robin, Random, Weighted Response Time).
* **Failover i resiliance** – płynna współpraca z mechanizmami typu Circuit Breaker (Hystrix) pozwalająca na ominięcie niedostępnych instancji.

> **Uwaga!** Projekt Ribbon jest przestarzały i znajduje się w trybie *maintenance mode*. W nowszych projektach Spring Cloud rekomendowanym rozwiązaniem jest **Spring Cloud LoadBalancer**.
