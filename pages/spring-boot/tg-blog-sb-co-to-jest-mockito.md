# Co to jest Mockito?

**Mockito** to popularny framework do tworzenia obiektów imitujących (tzw. mocków) w języku Java, używany w testach jednostkowych.

### Do czego służy Mockito?

Zadaniem Mockito jest izolacja testowanego kodu od jego zależności. Pozwala na:
+ **Tworzenie mocków** (zaślepek) zamiast rzeczywistych obiektów.
+ **Definiowanie zachowań** tych obiektów (np. co ma zwrócić dana metoda).
+ **Weryfikację interakcji**, czyli sprawdzenie ile razy dana metoda została wywołana z określonymi argumentami.

Dzięki temu testujesz wybraną klasę, a nie cały łańcuch zależności (np. z bazą danych czy zewnętrznym API).

### Jak to wygląda w praktyce?

Oto banalny przykład użycia Mockito:

```java
class UserServiceTest {

    @Test
    void shouldReturnUserName() {
        // Arrange
        UserRepository userRepositoryMock = mock(UserRepository.class);
        when(userRepositoryMock.findNameById(1)).thenReturn("Jan Kowalski");
        
        UserService userService = new UserService(userRepositoryMock);

        // Act
        String name = userService.getUserName(1);

        // Assert
        assertEquals("Jan Kowalski", name);
        // Sprawdza, czy metoda została wywołana z argumentem 1
        verify(userRepositoryMock).findNameById(1);
    }
}
```

> Mockito dostarcza testowanemu obiektowi zdefiniowane atrapy (mocki) w miejsce prawdziwych zależności, co zapewnia jego pełną izolację.
