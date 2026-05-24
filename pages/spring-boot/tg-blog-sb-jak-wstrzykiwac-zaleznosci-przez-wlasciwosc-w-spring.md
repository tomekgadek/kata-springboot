# Jak wstrzykiwać zależności przez właściwość w Spring?

Potocznie takie wstrzykiwanie nazywa się wstrzykiwaniem przez metodę ustawiającą (setter).

```java
// Bean zarządzający logiką
@Service
class LibraryService {

}

@RestController
public class LibraryController {
    private LibraryService libraryService;

    @Autowired // Wstrzykiwanie zależności przez właściwość (setter)
    public void setLibraryService(LibraryService libraryService) {
        this.libraryService = libraryService;
    }
}
```

> Wstrzykiwanie zależności przez właściwość polega na dodaniu adnotacji **@Autowired** nad metodą ustawiającą (setter), która przyjmuje jako parametr obiekt beana do wstrzyknięcia.
