# Co to jest Spring WebFlux Framework?

**Spring WebFlux** to część Spring Framework, która służy do tworzenia aplikacji **lepiej skalujących się przy dużej liczbie równoczesnych połączeń**. Działa on w sposób **asynchroniczny i nieblokujący** (czyli reaktywny).

Aby zrozumieć różnicę, wyobraź sobie restaurację (serwer):
- **Tradycyjny Spring MVC (blokujący)**: Kelner (wątek) odbiera zamówienie, idzie do kuchni (bazy danych) i **czeka bezczynnie**, aż kucharz skończy gotować. Jeśli przyjdzie wielu klientów naraz, zabraknie Ci kelnerów (wątków) i nowi klienci muszą czekać na ulicy.
- **Spring WebFlux (nieblokujący)**: Kelner odbiera zamówienie, przekazuje do kuchni i **natychmiast wraca na salę obsługiwać kolejnych klientów**. Gdy jedzenie jest gotowe, kuchnia daje kelnerowi sygnał, a on zanosi je do stolika. Dzięki temu garstka kelnerów (mała pula wątków) obsługuje tysiące klientów jednocześnie.

### Jak to wygląda w kodzie?

Zamiast czekać na gotowe dane (co zablokowałoby wątek), deklarujemy **strumienie danych reprezentujące przyszłe wyniki**. Używamy do tego dwóch głównych typów (publisherów):
- **`Mono`**: strumień emitujący najwyżej **jeden** element (np. pojedynczy użytkownik z bazy).
- **`Flux`**: strumień emitujący **wiele** elementów, wydawanych po kolei (np. lista użytkowników).

W praktyce kod w WebFlux jest bardzo podobny do klasycznego Springa. Główna różnica polega na zwracanym typie z kontrolera, co doskonale obrazuje poniższy kontrast:
- **Spring MVC**: `public User getUser(...)` (blokuje wątek).
- **Spring WebFlux**: `public Mono<User> getUser(...)` (zwraca strumień, nie blokuje wątku).

```java
@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/{id}")
    public Mono<User> getUser(@PathVariable String id) {
        // Nie blokujemy wątku! Zwracamy "obietnicę" (Mono). 
        // Spring dostarczy dane klientowi asynchronicznie, gdy tylko baza je odnajdzie.
        return userRepository.findById(id); 
    }
}
```

**Przemyślenia:**
+ **Cały stos musi być reaktywny**: WebFlux ma sens tylko wtedy, gdy wszystkie operacje I/O (np. zapytania do bazy danych) są nieblokujące. Musisz korzystać z rozwiązań takich jak **R2DBC** (dla relacyjnych baz) czy reaktywnego sterownika MongoDB. Użycie klasycznego blokującego JDBC lub Hibernate całkowicie niszczy zalety tego podejścia.
+ **Krzywa uczenia**: Kod asynchroniczny i o wiele bardziej złożony model myślenia (reactive streams, backpressure) sprawiają, że debugowanie jest trudniejsze. Do większości prostych aplikacji (typowych CRUD-ów) klasyczny Spring MVC będzie lepszym, bezpieczniejszym i tańszym w utrzymaniu wyborem.

> WebFlux jest niezastąpiony tam, gdzie masz **bardzo duży ruch sieciowy** (tysiące jednoczesnych połączeń), czy platformach streamingowych.