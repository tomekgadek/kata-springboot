# Co to jest AssertJ?

**AssertJ** to popularna biblioteka w języku Java, używana w testach jednostkowych do pisania bardzo czytelnych, łańcuchowych asercji.

### Do czego służy AssertJ?

AssertJ pozwala weryfikować zachowanie testowanego kodu w przejrzysty sposób. Zamiast standardowych metod takich jak `assertEquals(expected, actual)`, udostępnia rozbudowane API oparte najczęściej na metodzie `assertThat()`.


### Jak to wygląda w praktyce?

Oto banalny przykład użycia AssertJ do weryfikacji tekstu oraz kolekcji:

```java
class AssertJTest {

    @Test
    void shouldVerifyString() {
        String greeting = "Hello, Spring Boot!";

        // Łańcuchowe wywołania asercji dla tekstu
        assertThat(greeting)
            .isNotNull()
            .startsWith("Hello")
            .contains("Spring")
            .endsWith("Boot!");
    }

    @Test
    void shouldVerifyList() {
        List<String> frameworks = List.of("Spring", "Hibernate", "AssertJ");

        // Asercje dla kolekcji
        assertThat(frameworks)
            .hasSize(3)
            .contains("AssertJ")
            .doesNotContain("JUnit");
    }
}
```

> AssertJ znacząco ułatwia i przyspiesza proces pisania oraz utrzymywania testów jednostkowych. Posiada intuicyjne metody oraz wsparcie dla wielu typów.
