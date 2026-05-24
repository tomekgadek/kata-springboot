# Co to jest Discovery Service?

**Discovery Service** to mechanizm w architekturze mikroserwisów, który pozwala usługom na automatyczną rejestrację i odnajdywanie się nawzajem, eliminując potrzebę ręcznego podawania adresów IP i portów. 

W ekosystemie Spring Cloud do tego celu najczęściej wykorzystywana jest usługa **Netflix Eureka**. Działa ona jako centralny rejestr: serwisy przy uruchomieniu zgłaszają swoją obecność, a inne serwisy komunikują się z nimi, używając ich nazw.

## Świat bez Eureki vs Świat z Eureką

Różnicę najlepiej zilustrować na przykładzie komunikacji dwóch aplikacji: `order-service` i `inventory-service`.

**Bez Eureki:** – **Konfiguracja:** Wymaga ręcznego wpisania adresu IP na sztywno (np. `http://192.168.1.15:8080`). – **Awarie i restarty:** Zmiana adresu IP po restarcie instancji wymaga aktualizacji konfiguracji w serwisach zależnych i ich ponownego uruchomienia. – **Skalowanie:** Uruchomienie wielu instancji danego serwisu wymusza zarządzanie pulą adresów IP oraz implementację load balancera.

**Z Eureką:** – **Komunikacja po nazwie:** Wywołanie serwisu odbywa się za pomocą jego identyfikatora (np. `inventory-service`), a adres IP jest abstrakcją. – **Dynamiczna rejestracja:** Każda nowa instancja automatycznie zgłasza swój adres i port do rejestru Eureka. – **Automatyczna odporność:** Mechanizm heartbeats weryfikuje dostępność instancji. Niedostępne instancje są automatycznie usuwane z rejestru.

## 1. Eureka Server (Rejestr Usług)

Centralny punkt architektury, w którym rejestrują się pozostałe mikroserwisy.

**Zależność Maven:**
```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
</dependency>
```

**Kod aplikacji:**
Adnotacja `@EnableEurekaServer` konfiguruje aplikację jako rejestr usług.
```java
@SpringBootApplication
@EnableEurekaServer
public class ServiceRegistryApplication {

    public static void main(String[] args) {
        SpringApplication.run(ServiceRegistryApplication.class, args);
    }
}
```

**Konfiguracja `application.properties`:**
Wyłączenie rejestracji własnej instancji w Eurece.
```properties
server.port=8761
eureka.client.register-with-eureka=false
eureka.client.fetch-registry=false
```

## 2. Klient Eureka (Mikroserwis)

Aplikacja pełniąca funkcję biznesową (np. `inventory-service`), która po uruchomieniu rejestruje się w serwerze Eureka.

**Zależność Maven:**
```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
</dependency>
```

**Kod aplikacji:**
Adnotacja `@EnableDiscoveryClient` włącza mechanizm klienta.
```java
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
        return "Produkt " + productId + " jest dostępny.";
    }
}
```

**Konfiguracja `application.properties`:**
Definicja nazwy aplikacji i adresu głównego serwera Eureka.
```properties
server.port=8081
spring.application.name=inventory-service
eureka.client.service-url.defaultZone=http://localhost:8761/eureka/
```

Po uruchomieniu obu projektów, `inventory-service` zarejestruje się w Eureka Server. Panel zarządzania Eureki pod adresem `http://localhost:8761` wyświetli wpis dotyczący instancji `INVENTORY-SERVICE`.

## 3. Komunikacja między serwisami

Gdy `inventory-service` jest zarejestrowany w Eurece, inne aplikacje (np. wspomniany wcześniej `order-service`) mogą z nim łatwo porozmawiać. 

Najpopularniejszym sposobem jest użycie klienta HTTP (np. `RestTemplate`) z adnotacją `@LoadBalanced`. Spring pod spodem odpyta Eurekę i automatycznie podmieni nazwę serwisu na jego fizyczny adres IP przed wykonaniem zapytania.

**Konfiguracja klienta w `order-service`:**
```java
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
class RestTemplateConfig {

    @Bean
    @LoadBalanced
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}
```

**Wywołanie usługi po nazwie:**
```java
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
class OrderController {

    private final RestTemplate restTemplate;

    public OrderController(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @GetMapping("/api/orders/check")
    public String checkInventoryForOrder() {
        // Używamy nazwy serwisu "inventory-service" zamiast sztywnego adresu IP!
        String url = "http://inventory-service/api/inventory/123";
        return restTemplate.getForObject(url, String.class);
    }
}
```

Dzięki temu `order-service` jest w pełni niezależny od adresów IP infrastruktury, w której został uruchomiony.

> Service Discovery to kluczowy element architektur rozproszonych. Eliminuje problemy ze sztywnymi adresami IP, wprowadzając elastyczność i skalowalność, niezbędne w profesjonalnych wdrożeniach chmurowych.
