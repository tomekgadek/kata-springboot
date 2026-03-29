# Jak wstrzykiwać zależności przez pole w Spring?

Jest to jeden z najszybszych i najprostszych sposobów wstrzykiwania zależności.

```java
// Bean zarządzający logiką
@Service
class LibraryService {

}

@RestController
public class LibraryController {
    @Autowired // Wstrzykiwanie zależności przez pole
    private LibraryService libraryService;
}
```

> Wstrzykiwanie zależności przez pole polega na dodaniu adnotacji **@Autowired** nad polem klasy, które zostanie powiązane z odpowiednim beanem.