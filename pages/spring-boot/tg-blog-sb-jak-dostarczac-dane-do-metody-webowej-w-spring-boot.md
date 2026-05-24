# Jak dostarczać dane do metody webowej w Spring Boot?

Podczas budowy REST API bardzo często musimy przekazać dane wejściowe do naszych endpointów. Spring Boot udostępnia cztery podstawowe podejścia, aby zasilić nasze metody kontrolera danymi z żądania.

Dane możemy pozyskać korzystając z:
* **Ścieżki żądania** (`@PathVariable`)
* **Parametrów zapytania** (`@RequestParam`)
* **Ciała żądania** (`@RequestBody`)
* **Nagłówków HTTP** (`@RequestHeader`)

**Przykład użycia:**

```java
@RestController
@RequestMapping("/orders")
public class OrderController {

    @GetMapping("/{id}")
    // Ścieżka żądania (@PathVariable)
    public String getOrderDetails(@PathVariable("id") Long orderId) {
        return "Pobrano zamówienie ze ścieżki o ID: " + orderId;
    }

    @GetMapping
    // Parametry zapytania (@RequestParam)
    public String searchOrders(@RequestParam("status") String status) {
        return "Skorzystano z parametru, szukam zamówień ze statusem: " + status;
    }

    @PostMapping
    // Ciało żądania (@RequestBody)
    public String placeOrder(@RequestBody OrderDto newOrder) {
        return "Otrzymano ciało żądania dla nowego zamówienia: " + newOrder.getItem();
    }

    @GetMapping("/secure")
    // Nagłówki HTTP (@RequestHeader)
    public String secureEndpoint(@RequestHeader("API-Key") String apiKey) {
        return "Odczytano nagłówek z kluczem: " + apiKey;
    }
}
```

> W Spring Boot mamy cztery sposoby pozyskiwania danych z żądania. Zmienne w ścieżce świetnie identyfikują zasób, parametry służą do filtrowania, nagłówki przenoszą metadane (jak autoryzacja), a ciało pozwala przesyłać obszerne i złożone obiekty.
