# Jakie adnotacje Advice mamy w AOP?

Spring AOP ma kilka adnotacji advice + `@Pointcut` do wydzielania wyrażeń.

`@Pointcut` — nazwane wyrażenie, reużywalne przez inne advice:

```java
@Pointcut("execution(* com.example.service.*.*(..))")
public void serviceLayer() {}
```

`@Before` — przed metodą:

```java
@Before("serviceLayer()")
public void before(JoinPoint jp) {
    log.info("Przed: {}", jp.getSignature().getName());
}
```

`@After` — zawsze po metodzie (niezależnie od wyniku):

```java
@After("serviceLayer()")
public void after(JoinPoint jp) { ... }
```

`@AfterReturning` — tylko gdy metoda zwróci wartość poprawnie:

```java
@AfterReturning(pointcut = "serviceLayer()", returning = "result")
public void afterReturning(Object result) { ... }
```

`@AfterThrowing` — tylko gdy metoda rzuci wyjątek:

```java
@AfterThrowing(pointcut = "serviceLayer()", throwing = "ex")
public void afterThrowing(Exception ex) { ... }
```

`@Around` — pełna kontrola nad wywołaniem (przed i po, z możliwością pominięcia):

```java
@Around("serviceLayer()")
public Object around(ProceedingJoinPoint pjp) throws Throwable {
    log.info("Przed");
    Object result = pjp.proceed(); // bez tego oryginalna metoda nie wykona się
    log.info("Po");
    return result;
}
```


**Konfiguracja:** dodaj `spring-boot-starter-aop` do `pom.xml`, a klasę aspektu oznacz `@Aspect @Component`. `@EnableAspectJAutoProxy` w Spring Boot jest zbędne — starter włącza proxy automatycznie.

> W AOP mamy kilka adnotacji advice: `@Before`, `@After`, `@AfterReturning`, `@AfterThrowing`, `@Around`. Warto zapamiętać, że `@Around` daje pełną kontrolę nad wywołaniem metody.
