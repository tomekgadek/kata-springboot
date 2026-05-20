# Co to jest Discovery Service?

**Discovery Service** to mechanizm w architekturze mikroserwisów, który pozwala usługom automatycznie rejestrować się i odnajdywać nawzajem, bez ręcznego podawania adresów IP i portów. Działa jak książka telefoniczna: serwis przy starcie zgłasza się do rejestru, a inne serwisy odpytują ten rejestr, by go znaleźć.

W ekosystemie Spring Cloud najczęściej używa się do tego **Netflix Eureka**.

### Eureka Server

```java
@SpringBootApplication
@EnableEurekaServer
public class DiscoveryServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(DiscoveryServerApplication.class, args);
    }
}
```

```properties
server.port=8761
eureka.client.register-with-eureka=false
eureka.client.fetch-registry=false
```

### Rejestracja mikroserwisu (klient)

Wystarczy dodać zależność `spring-cloud-starter-netflix-eureka-client` i ustawić:

```properties
spring.application.name=user-service
eureka.client.service-url.defaultZone=http://localhost:8761/eureka/
```

Po uruchomieniu mikroserwis automatycznie zarejestruje się w Eureka Server pod nazwą `user-service` i będzie dostępny dla innych serwisów po tej nazwie.

> **Discovery Service** umożliwia automatyczne rejestrowanie i odnajdywanie usług w systemie mikroserwisowym, eliminując ręczne zarządzanie adresami.
