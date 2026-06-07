# Co to jest Hamcrest?

**Hamcrest** to biblioteka w języku Java ułatwiająca pisanie testów jednostkowych poprzez dostarczanie rozbudowanego mechanizmu weryfikacji warunków. Zamiast standardowych metod, pozwala na budowanie czytelnych, deklaratywnych asercji.

### Do czego służy Hamcrest?

Pozwala na konstruowanie reguł w sposób zbliżony do języka naturalnego. Używając metody `assertThat()` w połączeniu z funkcjami weryfikującymi z Hamcrest, kod testu staje się bardziej ekspresyjny i łatwiejszy w utrzymaniu.

### Jak to wygląda w praktyce?

Oto podstawowy przykład użycia Hamcrest do weryfikacji wartości tekstowych oraz elementów kolekcji:

```java
class HamcrestTest {

    @Test
    void shouldVerifyString() {
        // given
        String frameworkName = "Spring Boot";

        // when
        String greeting = "Hello, " + frameworkName + "!";

        // then
        assertThat(greeting, is(notNullValue()));
        assertThat(greeting, startsWith("Hello"));
        assertThat(greeting, containsString("Spring"));
    }

    @Test
    void shouldVerifyList() {
        // given
        List<String> frameworks = new ArrayList<>(List.of("Spring", "Hibernate"));

        // when
        frameworks.add("Hamcrest");

        // then
        assertThat(frameworks, hasSize(3));
        assertThat(frameworks, hasItem("Hamcrest"));
        assertThat(frameworks, not(hasItem("JUnit")));
    }
}
```

> Choć Hamcrest był wbudowany w starsze wersje JUnit i nadal jest obecny w wielu projektach, obecnie często preferuje się nowsze biblioteki (np. AssertJ), ze względu na ich wygodniejsze i bardziej rozbudowane API.
