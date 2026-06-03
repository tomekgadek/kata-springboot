# Jak wyglądają testy jednostkowe w Spring Boot?

Testy jednostkowe w Spring Boot służą do testowania pojedynczych komponentów (klas, metod) w pełnej izolacji od kontenera Springa i zewnętrznych zależności (jak bazy danych). Zamiast podnosić cały kontekst aplikacji, skupiamy się na czystej logice biznesowej.

Do pisania takich testów wykorzystujemy standardowe narzędzia: **JUnit 5** do uruchamiania testów i weryfikacji wyników, oraz **Mockito** do symulowania (mockowania) zależności.

### Złote zasady:
+ **Brak `@SpringBootTest`**: Nie uruchamiamy całego Springa!
+ **Rozszerzenie Mockito**: Używamy `@ExtendWith(MockitoExtension.class)`, aby Mockito zarządzało zaślepkami.
+ **Adnotacje Mockito**: Wykorzystujemy `@Mock` do tworzenia sztucznych zależności oraz `@InjectMocks` do automatycznego wstrzyknięcia ich do testowanej klasy.

### Minimalistyczny przykład

**1. Serwis (klasa testowana):**
```java
@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.repository = userRepository;
    }

    public String getUserName(Long id) {
        return userRepository.findById(id)
                .map(User::getName)
                .orElse("Nieznany");
    }
}
```

**2. Test jednostkowy (Unit Test):**
```java
@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    @Test
    void shouldReturnUserNameWhenUserExists() {
        // Arrange
        User mockUser = new User(1L, "Jan Kowalski");
        when(userRepository.findById(1L)).thenReturn(Optional.of(mockUser));

        // Act
        String result = userService.getUserName(1L);

        // Assert
        assertEquals("Jan Kowalski", result);
    }
}
```

> **Podsumowanie:** Test jednostkowy w Spring Boot to po prostu zwykły test JUnit + Mockito. Dzięki izolacji od frameworka, testy te są ekstremalnie szybkie i niezawodne, co ułatwia stosowanie np. podejścia TDD.
