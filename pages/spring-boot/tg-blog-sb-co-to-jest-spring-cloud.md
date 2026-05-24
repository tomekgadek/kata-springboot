# Co to jest Spring Cloud?

**Spring Cloud** to zestaw narzędzi i bibliotek rozszerzających Spring Boot o funkcjonalności potrzebne w architekturze mikroserwisów. Dostarcza gotowe rozwiązania m.in. do odkrywania usług, centralnej konfiguracji, routingu czy odporności na awarie.

Najważniejsze komponenty to m.in.: – **Eureka** – odkrywanie usług (Service Discovery). – **Spring Cloud Config** – centralne zarządzanie konfiguracją. – **Spring Cloud Gateway** – brama API (routing, filtrowanie żądań). – **OpenFeign** – deklaratywny klient HTTP do komunikacji między serwisami.

### Przykład – klient Feign

Zamiast ręcznie tworzyć żądania HTTP za pomocą `RestTemplate`, Spring Cloud pozwala zdefiniować wywołanie REST jako zwykły interfejs:

```java
@FeignClient(name = "user-service")
public interface UserClient {

    @GetMapping("/users/{id}")
    UserDto getUserById(@PathVariable Long id);
}
```

Wystarczy wstrzyknąć `UserClient` jak każdego innego beana – Spring Cloud sam odnajdzie instancję `user-service` przez Eurekę i wykona żądanie HTTP.

> **Spring Cloud** to ekosystem narzędzi, który rozszerza Spring Boot o mechanizmy niezbędne w systemach rozproszonych – odkrywanie usług, centralną konfigurację, routing i odporność na awarie.
