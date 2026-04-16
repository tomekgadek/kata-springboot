# Co to są schedulery i jak je definiować?

Scheduler pozwala cyklicznie wykonywać metodę w tle bez zewnętrznego triggera. W Spring Boot wystarczą dwie adnotacje i zero konfiguracji XML.

Konfiguracja: dodaj `@EnableScheduling` do klasy głównej, a metodę oznacz `@Scheduled`.

```java
@SpringBootApplication
@EnableScheduling
public class App { ... }
```

```java
@Component
public class ReportJob {

    @Scheduled(fixedRate = 5000)
    public void run() { ... }
}
```

Parametr `@Scheduled` określa tryb uruchamiania:

+ `fixedRate` - uruchamia metodę co N ms od startu poprzedniego wywołania (niezależnie od czasu jego trwania).
+ `fixedDelay` - uruchamia metodę co N ms od zakończenia poprzedniego wywołania.
+ `cron` - uruchamia metodę o określonej porze.


> Zadania cykliczne w Spring Boot możemy skonfigurować za pomocą dwóch adnotacji: `@EnableScheduling` i `@Scheduled` nad metodą, którą chcemy uruchamiać w tle z określonym interwałem.
