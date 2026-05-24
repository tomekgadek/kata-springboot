# Jak wygląda architektura mikroserwisów?

Architektura mikroserwisów to styl projektowania systemów, w którym aplikacja składa się z wielu małych, autonomicznych usług współpracujących ze sobą przez sieć. Każda usługa realizuje ściśle określoną funkcję biznesową i może być niezależnie rozwijana, wdrażana oraz skalowana.

### API Gateway

Punktem wejścia do systemu mikroserwisowego jest najczęściej **API Gateway**. Pełni on rolę centralnego punktu kontaktowego dla klientów (np. przeglądarki, aplikacje mobilne). Jego zadania to m.in. **routing żądań** do odpowiednich mikroserwisów, uwierzytelnianie, ograniczanie liczby żądań (rate limiting) oraz agregacja odpowiedzi z wielu serwisów w jedno wywołanie.

### Warstwa mikroserwisów

Sercem architektury jest zbiór niezależnych mikroserwisów. Każdy z nich: – Posiada **własną bazę danych** (wzorzec Database per Service), co zapewnia izolację danych. – Udostępnia dobrze zdefiniowane **API** (najczęściej REST lub gRPC). – Może być napisany w **dowolnej technologii** odpowiedniej do realizowanego zadania. – Jest wdrażany w **kontenerze** (np. Docker), co ułatwia zarządzanie środowiskiem uruchomieniowym.

### Komunikacja między serwisami

Mikroserwisy komunikują się ze sobą na dwa główne sposoby: – **Synchronicznie** – przez bezpośrednie wywołania HTTP/REST lub gRPC. Klient wysyła żądanie i czeka na odpowiedź. Stosowane tam, gdzie wymagana jest natychmiastowa reakcja. – **Asynchronicznie** – za pośrednictwem **brokera wiadomości** (np. RabbitMQ, Apache Kafka). Serwis publikuje zdarzenie, a zainteresowane serwisy subskrybują je i reagują we własnym tempie. Ten model zwiększa odporność systemu na awarie.

### Service Discovery

W dynamicznym środowisku, gdzie instancje serwisów mogą powstawać i znikać, konieczny jest mechanizm **Service Discovery** (np. Eureka, Consul). Pozwala on serwisowi automatycznie odnaleźć adres sieciowy innego serwisu bez konieczności ręcznej konfiguracji.

### Orkiestracja i konteneryzacja

Mikroserwisy są zazwyczaj uruchamiane w kontenerach zarządzanych przez platformę orkiestracji, taką jak **Kubernetes**. Odpowiada ona za automatyczne skalowanie instancji, równoważenie obciążenia (load balancing), wykrywanie awarii i ponowne uruchamianie niesprawnych kontenerów.

### Centralne logowanie i monitoring

Ponieważ żądanie użytkownika może przechodzić przez wiele serwisów, niezbędne są narzędzia do centralnego zbierania logów (np. **ELK Stack** – Elasticsearch, Logstash, Kibana) oraz monitoringu metryk (np. **Prometheus** + **Grafana**). Uzupełnieniem jest **distributed tracing** (np. Zipkin, Jaeger), który pozwala śledzić pełną ścieżkę żądania przez system.

### Zarządzanie konfiguracją

Konfiguracja mikroserwisów jest przechowywana centralnie (np. **Spring Cloud Config**, **Consul**), co pozwala na jednolite zarządzanie parametrami środowiskowymi bez konieczności ponownego budowania i wdrażania poszczególnych serwisów.

> **Architektura mikroserwisów** składa się z wielu współpracujących warstw: API Gateway jako punkt wejścia, niezależne mikroserwisy z własnymi bazami danych, mechanizmy komunikacji synchronicznej i asynchronicznej, Service Discovery, orkiestracja kontenerów oraz centralne logowanie i monitoring. Wszystkie te elementy tworzą elastyczny, skalowalny system, który wymaga jednak dojrzałej infrastruktury i odpowiednich narzędzi DevOps.
