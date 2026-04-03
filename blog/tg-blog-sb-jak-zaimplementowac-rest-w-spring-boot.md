# Jak zaimplementować REST w Spring Boot?

Aby wystawić funkcjonalność naszej aplikacji na świat poprzez protokół HTTP, tworzymy tzw. **metody webowe**. To właśnie one pozwalają zewnętrznym klientom (na przykład przeglądarce internetowej) na komunikację z naszym systemem.

W Spring Boot wystawienie pierwszego endpointu jest bardzo proste i opiera się na adnotacjach. Klasę, która ma być naszym wejściem dla żądań, oznaczamy adnotacją `@RestController`. Natomiast samą metodę, która realizuje daną logikę i zwraca dane, dekorujemy jako `@RequestMapping`.

**Przykład prostej implementacji:**

```java
@RestController
public class Shop {

    @RequestMapping("/hello-tg-blog")
    public String purchase() {

        return "Czesc! Jestem Tomek!";
    }
}
```

W argumencie adnotacji `@RequestMapping` definiujemy ścieżkę dostępu do naszej metody, czyli tzw. **endpoint**. Pełny adres wywołania składa się z nazwy maszyny, portu aplikacji oraz tej właśnie ścieżki.

**Dostęp testowy dla lokalnego serwera:**

```text
http://localhost:8080/hello-tg-blog
```

Należy również pamiętać o innej, bardzo popularnej w świecie webowym konwencji nazewniczej. O ile w samej Javie metody oraz zmienne nazywamy używając *camelCase*, tak w adresach URI poszczególne wyrazy rozdzielamy po prostu **myślnikiem** (tzw. *kebab-case*).

> Projektowanie endpointów w Spring Boot sprowadza się do wykorzystywania oznaczonych klas jako `@RestController` oraz metod oznaczonych przez adnotację `@RequestMapping`. Parametr w tej adnotacji to wprost ścieżka do zasobów.
