# Jak działa integracja Thymeleaf z Spring Boot?

**Thymeleaf** to nowoczesny silnik szablonów dla języka Java, który doskonale integruje się ze Spring Boot. Umożliwia generowanie dynamicznych stron HTML po stronie serwera, czyli zamiast zwracać czysty JSON z kontrolera, możemy zwrócić gotową stronę HTML wypełnioną danymi z aplikacji.

Thymeleaf działa na zasadzie wzbogacania zwykłych plików HTML o specjalne atrybuty (przestrzeń nazw `th:`), które są interpretowane po stronie serwera. Gotowy, wyrenderowany HTML trafia dopiero do przeglądarki użytkownika.

### Jak skonfigurować Thymeleaf w Spring Boot?

**Krok 1: Dodanie zależności do `pom.xml`**

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-thymeleaf</artifactId>
</dependency>
```

Spring Boot automatycznie skonfiguruje Thymeleaf dzięki mechanizmowi auto-konfiguracji.

**Krok 2: Stworzenie szablonu HTML**

Szablony umieszczamy domyślnie w katalogu `src/main/resources/templates/`. Plik `powitanie.html`:

```html
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<body>
    <h1 th:text="'Cześć, ' + ${imie} + '!'" >Cześć!</h1>
</body>
</html>
```

Atrybut `th:text` zastępuje treść elementu wartością przekazaną z kontrolera. Tekst `Cześć!` widoczny w surowym HTML pełni rolę podglądu i nie trafia do przeglądarki.

**Krok 3: Kontroler zwracający widok**

```java
@Controller
public class PowitanieController {

    @GetMapping("/powitanie")
    public String powitanie(Model model) {
        model.addAttribute("imie", "Anna");
        return "powitanie"; // nazwa pliku szablonu bez rozszerzenia
    }
}
```

Zwróć uwagę, że kontroler jest oznaczony adnotacją `@Controller` (nie `@RestController`). Metoda zwraca nazwę szablonu jako `String`, a dane przekazuje przez obiekt `Model`.

### Najważniejsze atrybuty `th:`

| Atrybut | Zastosowanie |
|---|---|
| `th:text` | Ustawia zawartość tekstową elementu |
| `th:href` | Dynamiczny adres URL dla linku |
| `th:each` | Iteracja po kolekcji (pętla) |
| `th:if` / `th:unless` | Warunkowe wyświetlanie elementu |

> Thymeleaf to silnik szablonów dla Spring Boot, który pozwala generować dynamiczne strony HTML po stronie serwera za pomocą specjalnych atrybutów `th:` w plikach HTML.
