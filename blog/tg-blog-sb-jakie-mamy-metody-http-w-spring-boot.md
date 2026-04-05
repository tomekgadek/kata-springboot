# Jakie mamy metody HTTP w Spring Boot?

Domyślnie adnotacja `@RequestMapping` obsługuje żądania typu GET. Możesz jednak zawsze wskazać inną metodę HTTP za pomocą dodatkowego parametru. Obsługiwane są wszystkie standardowe akcje: GET, POST, PUT, PATCH, DELETE i inne.

Znacznie wygodniejszą opcją jest stosowanie aliasów. Są to dedykowane adnotacje, które od razu określają typ żądania. To powszechnie stosowana metoda, która poprawia czytelność kodu.

**Przykład użycia aliasów HTTP:**

```java
@RestController
@RequestMapping("/teams")
public class TeamController {

    @GetMapping("/list")
    public String getTeams() {
        return "Zwracam liste zespolow";
    }

    @PostMapping("/create")
    public String addTeam() {
        return "Zespol utworzony pomyslnie!";
    }
}
```

Oto najpopularniejsze skrócone adnotacje, z których będziesz korzystać:
* `@GetMapping`
* `@PostMapping`
* `@PutMapping`
* `@DeleteMapping`
* `@PatchMapping`

> Używanie dedykowanych aliasów zamiast podstawowego `@RequestMapping` to obecnie standard. Kod kontrolerów staje się dzięki temu krótszy i bardziej zrozumiały.
