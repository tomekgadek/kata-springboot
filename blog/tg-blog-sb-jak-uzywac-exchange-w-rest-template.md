# Jak używać exchange() w RestTemplate?

Metoda `exchange()` daje pełną kontrolę nad żądaniem HTTP — pozwala ustawić nagłówki, wybrać dowolną metodę HTTP i otrzymać pełną odpowiedź jako `ResponseEntity`.

Przydaje się gdy potrzebujemy czegoś więcej niż `getForObject` lub `postForObject` — np. odczytać kod statusu lub nagłówki odpowiedzi.

**Przykład — GET z własnym nagłówkiem:**

```java
public Post getPost(int id) {
    String url = "https://jsonplaceholder.typicode.com/posts/" + id;

    HttpHeaders headers = new HttpHeaders();
    headers.set("Accept", "application/json");

    HttpEntity<Void> request = new HttpEntity<>(headers);

    ResponseEntity<Post> response = restTemplate.exchange(
        url, HttpMethod.GET, request, Post.class
    );

    System.out.println(response.getStatusCode());   // 200 OK
    System.out.println(response.getHeaders());       // nagłówki odpowiedzi
    return response.getBody();                       // deserializowany obiekt
}
```

**Przykład — POST z body i nagłówkiem:**

```java
public Post createPost(Post post) {
    String url = "https://jsonplaceholder.typicode.com/posts";

    HttpHeaders headers = new HttpHeaders();
    headers.setContentType(MediaType.APPLICATION_JSON);

    HttpEntity<Post> request = new HttpEntity<>(post, headers);

    ResponseEntity<Post> response = restTemplate.exchange(
        url, HttpMethod.POST, request, Post.class
    );

    return response.getBody();
}
```

**Klasa `Post` (model danych):**

```java
public class Post {
    private int id;
    private int userId;
    private String title;
    private String body;

    // getters and setters
}
```

> Metoda `exchange()` zwraca `ResponseEntity<T>`, z którego pobieramy ciało (`getBody()`), status (`getStatusCode()`) i nagłówki odpowiedzi (`getHeaders()`). Używamy jej gdy `getForObject` / `postForObject` nie wystarczają.
