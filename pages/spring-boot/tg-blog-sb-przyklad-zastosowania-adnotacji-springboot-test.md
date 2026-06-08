# Przykład zastosowania adnotacji @SpringBootTest

Adnotacja `@SpringBootTest` służy do testów integracyjnych. Ładuje ona kontekst Springa, pozwalając weryfikować współpracę wielu komponentów ze sobą.

Oto praktyczny przykład testujący serwis (`UserService`), używający prawdziwego repozytorium (`UserRepository`) i mockujący klienta zewnętrznego (`ExternalPaymentClient`):

```java
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
class UserServiceIntegrationTest {

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @MockBean
    private ExternalPaymentClient paymentClient;

    @BeforeEach
    void setUp() {
        userRepository.deleteAll();
        userRepository.save(new User("123", "Jan Kowalski"));
    }

    @AfterEach
    void tearDown() {
        userRepository.deleteAll();
    }

    @Test
    void shouldProcessUserSuccessfully() {
        // Arrange
        when(paymentClient.checkStatus("123")).thenReturn("OK");

        // Act
        boolean result = userService.process("123");

        // Assert
        assertThat(result).isTrue();
    }
}
```

### Kluczowe elementy:

+ **`webEnvironment = NONE`** ładuje same beany, bez serwera HTTP (przyspiesza test). Do testów REST użyj `RANDOM_PORT`.
+ **`@Autowired`** wstrzykuje rzeczywiste obiekty z kontenera Springa.
+ **`@MockBean`** zastępuje wybrany bean jego mockiem w całym kontekście testowym.
+ Metody `@BeforeEach` / `@AfterEach` pozwalają przygotować / wyczyścić stan przed / po każdym teście.

> Zapamiętaj, że `@SpringBootTest` ładuje pełen kontekst aplikacji. W dużych projektach może to być wolne. Rozważ użycie dedykowanych adnotacji do konkretnych celów np. `@WebMvcTest`, `@DataJpaTest`.
