# Jak działa @RequestMapping na poziomie klasy?

Adnotację `@RequestMapping` można stosować nad nazwą klasy. Wtedy podana ścieżka staje się bazowym prefiksem dla całego kontrolera. 

Wszystkie metody w takiej klasie będą odnosić się do adresów poprzedzonych tym prefiksem. Ułatwia to grupowanie logiki i unikanie powtórzeń w kodzie.

**Przykład użycia adnotacji na poziomie klasy:**

```java
@RestController
@RequestMapping("/orders")
public class OrderController {

    @RequestMapping("/create")
    public String addOrder() {
        return "Zamowienie utworzone!";
    }
}
```

W tym przypadku wywołanie metody `addOrder()` polega na połączeniu ścieżki bazowej oraz ścieżki metody. Musimy wykorzystać oba adresy.

**Adres docelowy wywołania to:**

```text
http://localhost:8080/orders/create
```

> Stosowanie adnotacji `@RequestMapping` nad klasą kontrolera pozwala uniknąć duplikacji tych samych przedrostków w linkach. Bardzo pomaga to w utrzymaniu przejrzystego API.
