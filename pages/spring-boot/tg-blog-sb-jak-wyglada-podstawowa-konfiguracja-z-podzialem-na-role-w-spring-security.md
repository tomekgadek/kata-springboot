# Jak wygląda podstawowa konfiguracja z podziałem na role w Spring Security?

W nowszych wersjach Spring Security (od wersji 6.x w Spring Boot 3.x) konfiguracja opiera się na definiowaniu beana typu `SecurityFilterChain`, który zastępuje przestarzałą klasę `WebSecurityConfigurerAdapter`. Podział na role pozwala w łatwy sposób określić, kto ma dostęp do jakich zasobów (ścieżek URL) w aplikacji.

## Przykład konfiguracji klasowej

Aby włączyć konfigurację bezpieczeństwa, tworzymy klasę z adnotacją `@Configuration` (oraz opcjonalnie `@EnableWebSecurity`). 

Poniżej znajduje się przykład podstawowej konfiguracji, w której: – Dostęp do ścieżki `/admin/**` ma tylko rola `ADMIN`. – Dostęp do ścieżki `/user/**` mają role `USER` oraz `ADMIN`. – Dostęp do pozostałych ścieżek jest otwarty (publiczny).

```java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(authz -> authz
                .requestMatchers("/admin/**").hasRole("ADMIN")
                .requestMatchers("/user/**").hasAnyRole("USER", "ADMIN")
                .anyRequest().permitAll()
            )
            .formLogin(form -> form.permitAll()) // Domyślny formularz logowania
            .logout(logout -> logout.permitAll());

        return http.build();
    }

    @Bean
    public UserDetailsService userDetailsService() {
        UserDetails user = User.builder()
            .username("user")
            .password("{noop}password") // {noop} oznacza brak szyfrowania hasła (tylko do testów!)
            .roles("USER")
            .build();

        UserDetails admin = User.builder()
            .username("admin")
            .password("{noop}admin")
            .roles("ADMIN")
            .build();

        return new InMemoryUserDetailsManager(user, admin);
    }
}
```

## Kluczowe elementy konfiguracji:

1. **`requestMatchers("ścieżka")`**: Określa, jakich adresów URL dotyczy reguła.
2. **`hasRole("ROLA")` / `hasAnyRole("ROLA1", "ROLA2")`**: Wymaga posiadania konkretnej roli (Spring automatycznie dodaje przedrostek `ROLE_` pod spodem, więc w kodzie używamy samej nazwy np. "ADMIN").
3. **`permitAll()`**: Zezwala na dostęp wszystkim (nawet niezalogowanym użytkownikom).
4. **`UserDetailsService`**: W tym przykładzie definiuje użytkowników w pamięci (In-Memory) wraz z ich hasłami i przypisanymi rolami. Rozwiązanie to jest idealne do celów deweloperskich i testowych.

## Przykład kontrolera (weryfikacja dostępu)

Zgodnie z powyższą konfiguracją, możemy stworzyć kontroler REST, w którym udostępnimy poszczególne ścieżki i sprawdzimy jak działa wdrożony podział na role w Spring Boot.

```java
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoController {

    // Dostęp publiczny – każdy może wywołać ten endpoint (permitAll)
    @GetMapping("/home")
    public String home() {
        return "To jest strona główna, dostępna dla wszystkich (niezalogowanych również).";
    }

    // Dostęp dla roli USER oraz ADMIN (zgodnie z konfiguracją dla /user/**)
    @GetMapping("/user/dashboard")
    public String userDashboard() {
        return "To jest panel użytkownika. Dostępny dla ról: USER, ADMIN.";
    }

    // Dostęp tylko dla roli ADMIN (zgodnie z konfiguracją dla /admin/**)
    @GetMapping("/admin/dashboard")
    public String adminDashboard() {
        return "To jest panel administratora. Dostępny TYLKO dla roli: ADMIN.";
    }
}
```

> Podział na role pozwala zabezpieczyć aplikację w czytelny i deklaratywny sposób. Reguły autoryzacji są dopasowywane w kolejności definicji, od góry do dołu. Należy uważać, aby reguły bardziej ogólne (np. `anyRequest()`) znajdowały się na samym końcu.
