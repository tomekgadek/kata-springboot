# Co to jest Ribbon?

**Ribbon** to projekt rozwijany w ramach ekosystemu **Netflix OSS** (często wykorzystywany w projektach opartych o Spring Cloud), który dostarcza mechanizm **Client-Side Load Balancing** (równoważenie obciążenia po stronie klienta).

W tradycyjnym podejściu (Server-Side Load Balancing), ruch od klientów trafia najpierw do zewnętrznego Load Balancera (np. Nginx, F5), który następnie przekierowuje go do konkretnych instancji docelowych.

W przypadku użycia biblioteki **Ribbon**:
* Twój mikroserwis (będący klientem) kontaktuje się z rejestrem usług (np. Eureka) w celu pobrania listy wszystkich dostępnych instancji innego mikroserwisu.
* Następnie, samodzielnie decyduje, do której konkretnej instancji ma wysłać następne żądanie (z pominięciem zewnętrznego load balancera). Korzysta w tym celu z wbudowanych algorytmów (np. *Round Robin*, czy *Weighted Response Time*).

## Główne cechy
* **Integracja z Eureka** – automatyczne pobieranie i aktualizacja adresów IP oraz portów mikroserwisów z rejestru.
* **Elastyczność reguł wyboru (Rules)** – m.in. Round Robin, Random, Availability Filtering.
* **Odporność na błędy** – łatwo zintegrować z mechanizmami takimi jak *Hystrix*, pozwalając na failover.

> **Uwaga!** Obecnie w nowszych wersjach ekosystemu Spring Cloud projekt Ribbon został oznaczony jako *maintenance mode* (jest przestarzały). Rekomendowanym, natywnym rozwiązaniem dostarczanym bezpośrednio przez zespół Springa jest **Spring Cloud LoadBalancer**.
