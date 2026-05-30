# Co to są testy E2E?

Testy E2E (End-to-End) to rodzaj testów, które weryfikują działanie całego systemu od początku do końca, dokładnie tak, jak używałby go końcowy użytkownik. Sprawdzają one, czy wszystkie komponenty aplikacji (frontend, backend, baza danych, zewnętrzne usługi) poprawnie ze sobą współpracują w pełnym i rzeczywistym środowisku.

Ze względu na swoją naturę testy E2E są powolne i kosztowne w utrzymaniu, dlatego powinny pokrywać tylko kluczowe ścieżki biznesowe (zgodnie z piramidą testów).

### Przykład testu E2E (Selenium w środowisku Java)

Prawdziwe testy E2E uruchamia się przeciwko całkowicie wdrożonemu systemowi (np. na zewnętrznym środowisku testowym), traktując całą aplikację (wraz z frontendem i bazą) jako **czarną skrzynkę**. Poniżej znajduje się przykład wykorzystania biblioteki Selenium, która steruje rzeczywistą przeglądarką:

```java
public class LoginE2ETest {

    private WebDriver driver;
    private RestTemplate apiClient;
    private String uniqueUsername;

    @BeforeEach
    public void setUp() {
        // Inicjalizacja przeglądarki
        driver = new ChromeDriver();
        apiClient = new RestTemplate();
        
        // Dynamiczne utworzenie unikalnego użytkownika w bazie przez REST API na środowisku testowym
        uniqueUsername = "test_user_" + UUID.randomUUID().toString();
        UserCreationRequest request = new UserCreationRequest(uniqueUsername, "secret123");
        apiClient.postForEntity("https://moje-srodowisko-testowe.pl/api/users", request, Void.class);
    }

    @Test
    public void shouldLoginSuccessfullyAndRedirectToDashboard() {
        // Given
        driver.get("https://moje-srodowisko-testowe.pl/login");
        
        // When - używamy dynamicznie wygenerowanego loginu
        driver.findElement(By.id("username")).sendKeys(uniqueUsername);
        driver.findElement(By.id("password")).sendKeys("secret123");
        driver.findElement(By.id("login-btn")).click();

        // Then
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(5));
        wait.until(ExpectedConditions.urlToBe("https://moje-srodowisko-testowe.pl/dashboard"));
        
        assertEquals("https://moje-srodowisko-testowe.pl/dashboard", driver.getCurrentUrl());
    }

    @AfterEach
    public void tearDown() {
        // Sprzątanie po teście. Usunięcie wygenerowanego użytkownika z bazy
        if (uniqueUsername != null) {
            apiClient.delete("https://moje-srodowisko-testowe.pl/api/users/" + uniqueUsername);
        }

        // Zakończenie sesji z przeglądarką
        if (driver != null) {
            driver.quit();
        }
    }
}
```

> Testy E2E to najwyższa warstwa piramidy testów. Traktują aplikację jak "czarną skrzynkę" i dają największą pewność, że system jako całość działa prawidłowo z perspektywy klienta.
