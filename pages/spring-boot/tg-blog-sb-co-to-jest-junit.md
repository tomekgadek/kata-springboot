# Co to jest JUnit?

**JUnit** to standardowy framework do testów jednostkowych w języku Java.

### Do czego służy JUnit?

Zadaniem JUnit jest zapewnienie struktury, dzięki której możemy w powtarzalny sposób zweryfikować, czy nasz kod działa poprawnie. Framework JUnit dostarcza:
+ **Adnotacje** (np. `@Test`, `@BeforeEach`, `@AfterEach`) do oznaczania metod testowych i zarządzania cyklem życia testu.
+ **Asercje** (np. `assertEquals`, `assertTrue`, `assertThrows`) do weryfikacji, czy rzeczywisty wynik działania kodu zgadza się z wynikiem oczekiwanym.
+ **Runner** (silnik uruchomieniowy), który znajduje testy, wykonuje je i raportuje wyniki.

### Jak to wygląda w praktyce?

Oto najprostszy możliwy przykład testu weryfikującego działanie prostej metody odpowiedzialnej za dodawanie dwóch liczb całkowitych:

```java
class CalculatorTest {

    @Test
    void shouldAddTwoNumbers() {
        // Arrange
        Calculator calculator = new Calculator();

        // Act
        int result = calculator.add(2, 3);

        // Assert
        assertEquals(5, result, "2 + 3 powinno równać się 5");
    }
}
```

> JUnit to fundament testowania w Javie. Określa sposób pisania testów (adnotacje, asercje) i ich uruchamiania.
