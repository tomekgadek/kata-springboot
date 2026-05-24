# Jak zdefiniować beana w kodzie?

Istnieje kilka sposobów na zdefiniowanie beana w kodzie, aby był zarządzany przez Spring Context.

- Wykorzystanie adnotacji (np. **@Component**). – Powołanie instancji w metodach klasy konfiguracyjnej (adnotacja **@Bean**). – Użycie XML (metoda starsza, historyczna).

## Adnotacja @Component

Spring skanuje pakiety i automatycznie tworzy beana z każdej klasy oznaczonej jako komponent.

```java
@Component 
public class DataRepository {
    // Spring sam stworzy instancję tej klasy
}
```

## Adnotacja @Bean

Używane, gdy potrzebujemy jawnie skonfigurować beana. Metoda w klasie konfiguracyjnej oznaczonej adnotacją **@Configuration** zwraca instancję obiektu, który trafia do kontenera.

```java
@Configuration
public class SecurityConfig {

    @Bean // Metoda zwraca skonfigurowany obiekt
    public PasswordEncoder encoder() {
        return new BCryptPasswordEncoder();
    }
}
```

> Tworzenie beana polega na oznaczeniu klasy odpowiednią adnotacją (np. @Component) lub zdefiniowaniu go (adnotacja @Bean) w klasie konfiguracyjnej.