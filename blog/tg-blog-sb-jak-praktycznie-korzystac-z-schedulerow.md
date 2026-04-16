# Jak praktycznie korzystać z schedulerów w Spring Boot?

Kiedy masz już włączony `@EnableScheduling`, możesz precyzyjnie sterować tym, kiedy i jak często Twoja metoda będzie wywoływana. Do wyboru masz trzy tryby: `fixedRate`, `fixedDelay` i `cron`.

## fixedRate - stały takt niezależny od czasu trwania

Metoda jest uruchamiana co N ms licząc od **startu** poprzedniego wywołania. Jeśli wywołanie trwa dłużej niż interwał, kolejne startuje natychmiast po zakończeniu.

```java
@Scheduled(fixedRate = 5000)   // co 5 sekund
public void tick() { ... }
```

## fixedDelay - przerwa po zakończeniu

Metoda jest uruchamiana N ms po **zakończeniu** poprzedniego wywołania. To bezpieczniejsza opcja, gdy zadanie może trwać różnie długo i nie chcesz nakładania wywołań.

```java
@Scheduled(fixedDelay = 5000)  // 5s przerwy po zakończeniu
public void tick() { ... }
```

## initialDelay - opóźnienie pierwszego wywołania

Obydwa tryby (`fixedRate` i `fixedDelay`) można uzupełnić o `initialDelay`, który opóźnia pierwsze uruchomienie. Przydatne, gdy aplikacja potrzebuje chwili na rozgrzewkę (np. załadowanie cache).

```java
@Scheduled(fixedRate = 10000, initialDelay = 30000)  // czeka 30s, potem co 10s
public void warmupAwareTick() { ... }
```

```java
@Scheduled(fixedDelay = 5000, initialDelay = 60000)  // czekaj minutę, potem co 5s po zakończeniu
public void delayedJob() { ... }
```

## cron - uruchamianie o konkretnej porze

`cron` przyjmuje wyrażenie w formacie `s m h d M dow` (sekundy, minuty, godziny, dzień miesiąca, miesiąc, dzień tygodnia).

```java
@Scheduled(cron = "0 0 8 * * MON-FRI")  // pn-pt o 8:00
public void morningReport() { ... }
```

### Więcej przykładów wyrażeń cron

| Wyrażenie | Znaczenie |
|-----------|-----------|
| `0 * * * * *` | co minutę (w zerowej sekundzie) |
| `0 0 * * * *` | co godzinę (o pełnej godzinie) |
| `0 0 0 * * *` | każdego dnia o północy |
| `0 30 9 * * MON-FRI` | pn-pt o 9:30 |
| `0 0 12 1 * *` | 1. każdego miesiąca o 12:00 |
| `0 0 0 * * SUN` | w każdą niedzielę o północy |
| `0 */15 * * * *` | co 15 minut |

### Wartość cron z konfiguracji (application.properties)

Zamiast hardcodować wyrażenie, można je wyciągnąć do pliku konfiguracyjnego:

```bash
# application.properties
app.schedule.cron=0 0 8 * * MON-FRI
```

```java
@Scheduled(cron = "${app.schedule.cron}")
public void morningReport() { /*...*/ }
```

Dzięki temu możesz zmieniać harmonogram bez rekompilacji, wystarczy zmienić wartość w `application.properties` (lub nadpisać zmienną środowiskową).

> Użyj...
> + `fixedDelay` gdy zadanie może trwać długo i nie chcesz nakładania wywołań.
> + `fixedRate` gdy zależy ci na regularnym takcie. 
> + `cron` gdy musisz uderzyć o konkretnej godzinie. 
> + `initialDelay` umieść tam, gdzie potrzebujesz opóźnienia pierwszego wywołania.
