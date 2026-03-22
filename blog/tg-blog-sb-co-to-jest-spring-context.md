# Co to jest Spring Context?

**Spring Context** to serce każdej aplikacji Spring. To kontener **IoC** (**Inversion of Control**), który zarządza cyklem życia komponentów i ich zależnościami. Dzięki niemu komponenty są **luźno powiązane** (**loose coupling**), co ułatwia rozbudowę, modyfikację i przede wszystkim testowanie.

## Czym jest kontener IoC?

Programista nie tworzy i nie łączy obiektów ręcznie, kontener przejmuje nad tym kontrolę. To jak reżyser, który zarządza aktorami (komponentami), a oni mogą skupić się na swojej roli.

## Co to jest Bean?

Obiekty zarządzane przez kontener to *beany*. Są to gotowe do użycia komponenty, którym kontener zapewnia wszystko, czego potrzebują.

```java
// Informuje kontener, że to bean i ma 
// się nim zająć (new CaptainAmerica())
@Component 
class CaptainAmerica {

    public String status() {
        return "active";
    }
}
```

>
> Spring Context to główny kontener, który zarządza, konfiguruje i łączy wszystkie komponenty (beany) aplikacji.
>