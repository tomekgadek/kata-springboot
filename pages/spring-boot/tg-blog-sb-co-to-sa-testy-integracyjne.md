# Co to są testy integracyjne?

Testy integracyjne sprawdzają współpracę różnych modułów systemu. Ich celem jest weryfikacja, czy połączone komponenty działają prawidłowo. Testy jednostkowe izolują badany kod. Testy integracyjne natomiast skupiają się na komunikacji między wieloma elementami. Sprawdzają one również integrację z zewnętrznymi zasobami, takimi jak baza danych, system plików czy API.

### Przykład testu integracyjnego w Spring Boot

Poniżej znajduje się przykład prostego testu integracyjnego z użyciem `@SpringBootTest` i `MockMvc`:

```java
@SpringBootTest
@AutoConfigureMockMvc
public class UserControllerIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void shouldReturnUserSuccessfully() throws Exception {
        mockMvc.perform(get("/api/users/1"))
               .andExpect(status().isOk())
               .andExpect(jsonPath("$.name").value("Jan Kowalski"));
    }
}
```

Powyższy test weryfikuje przepływ żądania od kontrolera REST aż po wygenerowanie odpowiedzi. Uruchamia kontekst Springa, wywołuje endpoint HTTP i sprawdza, czy zwrócony kod statusu to 200 (OK) oraz czy struktura JSON zawiera pole `name` o wartości `Jan Kowalski`.

> Testy integracyjne służą do walidacji interakcji pomiędzy warstwami aplikacji (kontrolery, serwisy, bazy danych) w połączonym i uruchomionym środowisku.
