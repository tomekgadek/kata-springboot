# Czym jest Swagger i jak go skonfigurować w Spring Boot?

**Swagger** to popularne narzędzie służące do projektowania, budowania i dokumentowania interfejsów REST API. W kontekście Spring Boot dostarcza on wizualną, interaktywną stronę internetową (tzw. Swagger UI), która pozwala programistom i użytkownikom zewnętrznym na zapoznanie się ze strukturą API oraz bezpośrednie testowanie poszczególnych endpointów z poziomu przeglądarki, bez potrzeby używania dodatkowych narzędzi takich jak Postman czy cURL.

Główne zalety Swagger:
* **Automatyczne generowanie dokumentacji** na podstawie adnotacji i struktury kontrolerów.
* **Interaktywność**, która pozwala wysyłać zapytania HTTP wprost ze strony z dokumentacją.
* **Standaryzację** formatu opisu (zazwyczaj generowany jest plik w formacie JSON lub YAML – zgodny ze specyfikacją OpenAPI).

### Jak skonfigurować Swagger w Spring Boot?

Dla projektów tworzonych w Spring Boot rekomendowanym rozwiązaniem jest użycie biblioteki `springdoc-openapi`.

**Krok 1: Dodanie zależności do `pom.xml`**

Wystarczy dodać nową zależność:

```xml
<dependency>
    <groupId>org.springdoc</groupId>
    <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
    <version>2.5.0</version>
</dependency>
```

**Krok 2: Uruchomienie aplikacji**

Dokumentacja w formie interaktywnego panelu będzie domyślnie dostępna w przeglądarerce pod adresem:
`http://localhost:8080/swagger-ui.html`

**Krok 3: Opcjonalna konfiguracja**

Możesz w łatwy sposób dostosować działanie biblioteki z poziomu właściwości, np. zmieniając domyślną ścieżkę do panelu dokumentacji:

Plik `application.properties`:
```properties
# Zmiana domyślnego adresu interfejsu (opcjonalne)
# Interfejs będzie od teraz pod: http://localhost:8080/moje-api-docs
springdoc.swagger-ui.path=/moje-api-docs
```

> Dokumentowanie REST API za pomocą Swagger pozwala w czytelny i interaktywny sposób przedstawić endpointy aplikacji.
