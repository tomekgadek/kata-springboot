# Co to jest programowanie aspektowe?

Programowanie aspektowe (AOP — **Aspect-Oriented Programming**) to technika pozwalająca wydzielić logikę przekrojową z głównego kodu aplikacji.

Przykłady logiki przekrojowej:
- logowanie
- obsługa transakcji
- bezpieczeństwo (autoryzacja)
- pomiar czasu wykonania metod

Bez AOP taka logika rozrzuca się po całej aplikacji. AOP pozwala zebrać ją w jednym miejscu — **aspekcie**.

**Kluczowe pojęcia:**

| Pojęcie | Znaczenie |
|---|---|
| `Aspect` | klasa zawierająca logikę przekrojową |
| `Advice` | *porada* — kod wykonywany w określonym momencie (before, after, around) |
| `Pointcut` | wyrażenie określające, które metody mają być przechwycone |
| `JoinPoint` | konkretne miejsce wykonania (np. wywołanie metody) |

**Przykład — logowanie przed wywołaniem metody:**

```java
@Aspect
@Component
public class LoggingAspect {

    // * - dowolny typ
    // .. - dowolna liczba argumentów
    // com.example.service.*.*(..)) - dowolna metoda w pakiecie com.example.service
    @Before("execution(* com.example.service.*.*(..))")
    public void logBefore(JoinPoint joinPoint) {
        System.out.println("Wywołano: " + joinPoint.getSignature().getName());
    }
}
```

Adnotacja `@Before` oznacza, że kod wykona się **przed** każdą metodą w pakiecie `com.example.service`.

> Spring Boot obsługuje AOP przez bibliotekę **AspectJ**. Wystarczy dodać `spring-boot-starter-aop` do `pom.xml` i dodać klasę aspektu z adnotacjami `@Aspect` oraz `@Component`.
