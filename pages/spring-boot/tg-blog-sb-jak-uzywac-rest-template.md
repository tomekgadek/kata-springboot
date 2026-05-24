# Jak używać RestTemplate w Spring Boot?

**RestTemplate** to klasa Spring Boot służąca do wysyłania żądań HTTP z poziomu aplikacji, czyli do komunikacji z zewnętrznymi serwisami.

Aby z niego skorzystać, rejestrujemy go jako beana:

```java
@Bean
public RestTemplate restTemplate() {
    return new RestTemplate();
}
```

## GET — pobieranie danych

Pobieramy post z serwisu `jsonplaceholder.typicode.com`:

```java
@Service
public class PostService {

    private final RestTemplate restTemplate;

    public PostService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public Post getPost(int id) {
        String url = "https://jsonplaceholder.typicode.com/posts/" + id;
        return restTemplate.getForObject(url, Post.class);
    }
}
```

`getForObject` wysyła GET i deserializuje odpowiedź JSON na obiekt Javy.

## POST — wysyłanie danych

Tworzymy nowy post:

```java
public Post createPost(Post post) {
    String url = "https://jsonplaceholder.typicode.com/posts";
    return restTemplate.postForObject(url, post, Post.class);
}
```

`postForObject` serializuje obiekt do JSON, wysyła POST i zwraca odpowiedź jako obiekt Javy.

## Model

```java
public class Post {
    private int userId;
    private int id;
    private String title;
    private String body;
    // gettery, settery
}
```

> **RestTemplate** wstrzykujemy przez konstruktor, wywołujemy `getForObject` dla GET i `postForObject` dla POST. Serializacja/deserializacja JSON odbywa się automatycznie.
