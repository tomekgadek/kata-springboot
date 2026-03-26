# Co to jest mechanizm wstrzykiwania zależności w Spring?

Wstrzykiwanie zależności (Dependency Injection, DI) to wzorzec projektowy, który pozwala na automatyczne dostarczanie obiektów (beanów) do innych obiektów, które ich potrzebują. W Spring DI jest realizowane przez kontener IoC (Inversion of Control), który zarządza cyklem życia beanów i ich zależnościami.

## Co zyskuje programista?

Programista otrzymuje automatyczne zarządzanie cyklem życia obiektów oraz automatyczne wstrzykiwanie zależności tam, gdzie są potrzebne.

```java
// Bean zarządzający logiką
@Service
class LibraryService {

}

@RestController
public class LibraryController {
    private final LibraryService libraryService;

    @Autowired // Wstrzykiwanie zależności
    public LibraryController(LibraryService libraryService) {
        this.libraryService = libraryService;
    }
}
```

>
> Wstrzykiwanie zależności (DI) w Spring polega na automatycznym dostarczaniu potrzebnych obiektów (beanów) aby je powiązać i używać bez konieczności ręcznego tworzenia instancji.
>
