# Co to jest Discovery Service?

**Discovery Service** to mechanizm w architekturze mikroserwisów, który pozwala usługom automatycznie rejestrować się i odnajdywać nawzajem, bez ręcznego podawania adresów IP i portów. 

W ekosystemie Spring Cloud najczęściej używa się do tego **Netflix Eureka**. Działa ona jak cyfrowa książka telefoniczna: serwis przy starcie zgłasza się do rejestru, a inne serwisy odpytują ten rejestr, by go znaleźć po nazwie.

## Świat bez Eureki vs Świat z Eureką

Aby zrozumieć, po co w ogóle nam ten mechanizm, wyobraźmy sobie scenariusz, w którym aplikacja `order-service` (Zamówienia) musi pobrać dane z `inventory-service` (Magazyn).

**Świat BEZ Eureki (Sztywne adresy IP):**
- **Konfiguracja:** W Zamówieniach musisz zapisać adres IP Magazynu na sztywno, np. `http://192.168.1.15:8080`.
- **Awarie i restarty:** Jeśli serwer z Magazynem ulegnie awarii i chmura uruchomi go ponownie na innym adresie IP, musisz ręcznie zaktualizować konfigurację w Zamówieniach i zrestartować aplikację.
- **Skalowanie:** Masz ogromny ruch i uruchamiasz 5 instancji Magazynu. Nagle w Zamówieniach musisz trzymać listę 5 różnych adresów IP i napisać własny mechanizm (lub wdrożyć osobny Load Balancer), aby rozdzielać między nimi zapytania.

**Świat Z Eureką (Service Discovery):**
- **Komunikacja po nazwie:** W Zamówieniach mówisz po prostu: *"Chcę uderzyć do serwisu o nazwie `inventory-service`"*. Adresy IP przestają mieć znaczenie.
- **Dynamiczna rejestracja:** Kiedy uruchamiasz 5 instancji Magazynu, każda z nich sama zgłasza się do Eureki: *"Cześć, nazywam się `inventory-service` i działam pod adresem 10.0.0.5 na porcie 8081"*.
- **Automatyczna odporność:** Jeśli jedna z instancji padnie, przestaje wysyłać tzw. "heartbeats" (bicie serca) do Eureki. Eureka po chwili wyrzuca ją ze swojej listy, dzięki czemu inne serwisy nie próbują już wysyłać tam zapytań.

---

Aby to zobrazować w kodzie, stwórzmy dwie osobne aplikacje: **Serwer** (rejestr) oraz **Klienta** (nasz `inventory-service`).

## 1. Eureka Server (Rejestr Usług)

To nasza "książka telefoniczna", centralny punkt, w którym rejestrują się wszystkie inne mikroserwisy w systemie.

**Zależności Maven**
Dodajemy zależność startową dla serwera Eureka:
```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
</dependency>
```

**Kod aplikacji**
Główną klasę aplikacji oznaczamy adnotacją `@EnableEurekaServer`. To wystarczy, aby Spring Boot skonfigurował aplikację jako rejestr.
```java
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class ServiceRegistryApplication {

    public static void main(String[] args) {
        SpringApplication.run(ServiceRegistryApplication.class, args);
    }
}
```

**Konfiguracja właściwości**
Serwer Eureka z definicji jest również swoim własnym klientem. Ponieważ to on jest głównym rejestrem, musimy powiedzieć mu, aby nie próbował rejestrować samego siebie.
```properties
server.port=8761
eureka.client.register-with-eureka=false
eureka.client.fetch-registry=false
```

---

## 2. Rejestracja mikroserwisu (Klient Eureka)

Stwórzmy docelową usługę biznesową – nasz `inventory-service`. Będzie ona klientem, który po uruchomieniu automatycznie poinformuje serwer Eureka o swoim istnieniu.

**Zależności Maven**
W projekcie klienta dodajemy odpowiednią zależność kliencką:
```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
</dependency>
```

**Kod aplikacji**
Obecność zależności Eureki z reguły automatycznie rejestruje aplikację jako klienta, ale adnotacja `@EnableDiscoveryClient` czyni ten kod bardziej czytelnym. Dodatkowo stworzyliśmy prosty kontroler biznesowy, który reprezentuje realną funkcjonalność (sprawdzanie stanu w magazynie).
```java
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@EnableDiscoveryClient
public class InventoryServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(InventoryServiceApplication.class, args);
    }
}

@RestController
class InventoryController {
    
    @GetMapping("/api/inventory/{productId}")
    public String checkStock(@PathVariable String productId) {
        // Symulacja sprawdzenia bazy danych...
        return "Produkt " + productId + " jest dostępny na magazynie (5 sztuk).";
    }
}
```

**Konfiguracja właściwości**
To najważniejszy krok po stronie klienta. Nadajemy aplikacji unikalną nazwę, pod którą będą szukać jej inne mikroserwisy, oraz wskazujemy, gdzie działa nasza główna Eureka (adres rejestru).
```properties
# Port aplikacji klienckiej
server.port=8081

# Nazwa, po której inne mikroserwisy odnajdą tę usługę
spring.application.name=inventory-service

# Adres serwera Eureka
eureka.client.service-url.defaultZone=http://localhost:8761/eureka/
```

---

Po uruchomieniu obu aplikacji, usługa `inventory-service` automatycznie zarejestruje się w Eureka Server. Jeśli wejdziesz w przeglądarce pod adres `http://localhost:8761`, zobaczysz graficzny panel Eureki, a na liście zarejestrowanych instancji (tzw. "Instances currently registered with Eureka") dumnie widnieć będzie wpis `INVENTORY-SERVICE`.

> Service Discovery, realizowane np. poprzez Netflix Eureka, to fundament chmurowych aplikacji. Rezygnacja ze sztywnych adresów IP na rzecz dynamicznego rejestru i wywoływania po nazwach sprawia, że mikroserwisy stają się elastyczne, odporne na awarie i mogą bez problemu skalować się w locie. To tak naprawdę pierwszy krok w budowie profesjonalnej i w pełni zautomatyzowanej architektury rozproszonej.
