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

`fixedRate` uruchamia metodę co N ms od startu poprzedniego wywołania (niezależnie od czasu jego trwania):

```java
@Scheduled(fixedRate = 5000)   // co 5 sekund
public void tick() { ... }
```

`fixedDelay` uruchamia metodę co N ms od zakończenia poprzedniego wywołania:

```java
@Scheduled(fixedDelay = 5000)  // 5s przerwy po zakończeniu
public void tick() { ... }
```

`cron` przyjmuje wyrażenie crontab w formacie `s m h d M dow`:

```java
@Scheduled(cron = "0 0 8 * * MON-FRI")  // pn-pt o 8:00
public void morningReport() { ... }
```

> Użyj `fixedDelay` gdy zadanie może trwać różnie długo i nie chcesz nakładania wywołań. `fixedRate` gdy zależy ci na regularnym takcie. `cron` gdy musisz uderzyć o konkretnej godzinie.
