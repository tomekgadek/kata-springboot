# Co to są testy jednostkowe?

Testy jednostkowe (z ang. *Unit Tests*) to podstawowy poziom testowania oprogramowania. Ich celem jest sprawdzenie poprawności działania najmniejszych, dających się wyizolować fragmentów kodu – zazwyczaj pojedynczych metod lub klas.

Kluczowe cechy testów jednostkowych:
+ **Szybkość:** Wykonują się błyskawicznie, często cała paczka tysięcy testów potrafi przejść w kilkanaście sekund.
+ **Izolacja:** Nie zależą od zewnętrznych systemów, takich jak bazy danych, systemy plików czy zewnętrzne API. Zależności wstrzykiwane do testowanej klasy są najczęściej **mockowane** (symulowane).
+ **Dokładność:** Gdy test jednostkowy nie przechodzi, precyzyjnie wskazuje na miejsce wystąpienia błędu.
+ **Tanie w utrzymaniu:** Zmiany w logice biznesowej często pociągają za sobą małe zmiany w konkretnym teście.

W ekosystemie Javy najpopularniejszymi narzędziami do tworzenia testów jednostkowych są **JUnit** (do uruchamiania testów i asercji) oraz **Mockito** (do mockowania zależności).

### Przykład testu jednostkowego w Java (z użyciem JUnit 5)

Poniżej znajduje się prosty przykład testowanej klasy `Calculator` oraz przypisanego do niej testu jednostkowego.

**Klasa, którą chcemy przetestować:**
```java
public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
}
```

**Klasa testowa (Unit Test):**
```java
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

class CalculatorTest {

    @Test
    void shouldAddTwoNumbersCorrectly() {
        // Arrange - przygotowanie danych do testu
        Calculator calculator = new Calculator();
        
        // Act - wywołanie testowanej metody
        int result = calculator.add(2, 3);
        
        // Assert - sprawdzenie, czy wynik jest zgodny z oczekiwaniami
        assertEquals(5, result, "2 + 3 powinno dać 5");
    }
}
```

W powyższym przykładzie metoda oznaczona adnotacją `@Test` tworzy instancję `Calculator`, wywołuje metodę `add()` i za pomocą metody `assertEquals()` sprawdza, czy wynik to faktycznie `5`.

> Testy jednostkowe to pierwsza linia obrony w walce z błędami. Dają one programistom pewność, że **wprowadzane zmiany czy refaktoryzacja nie psują istniejącej logiki biznesowej**. Im więcej małych, izolowanych i szybkich testów jednostkowych posiada aplikacja, tym jest ona stabilniejsza i tańsza w rozwoju.
