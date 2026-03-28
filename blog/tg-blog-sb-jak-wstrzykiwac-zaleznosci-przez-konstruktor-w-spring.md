# Jak wstrzykiwać zależności przez konstruktor w Spring?

Jest to jeden z najczęściej stosowanych i rekomendowanych sposobów.

```java
// Bean zarządzający logiką
@Service
class LibraryService {

}

@RestController
public class LibraryController {
    private final LibraryService libraryService;

    @Autowired // Wstrzykiwanie zależności przez konstruktor
    public LibraryController(LibraryService libraryService) {
        this.libraryService = libraryService;
    }
}
```

> Wstrzykiwanie zależności przez konstruktor polega na dodaniu 
> adnotacji **@Autowired** nad konstruktorem klasy oraz 
> zdefiniowaniu wymaganych zależności w jego parametrach.