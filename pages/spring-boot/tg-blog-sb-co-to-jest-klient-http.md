# Co to jest klient HTTP?

**Klient HTTP** to program lub biblioteka, która wysyła żądania do serwera i odbiera odpowiedzi. To właśnie po stronie klienta inicjowana jest komunikacja, serwer jedynie na nią odpowiada.

W świecie aplikacji webowych klientem może być przeglądarka internetowa, urządzenie mobilne, a także inna aplikacja backendowa. Może to być mikroserwis korzystający z zewnętrznego API. W każdym z tych przypadków schemat działania jest taki sam: klient wysyła żądanie HTTP, serwer je przetwarza i odsyła odpowiedź.

Typowe żądanie składa się z kilku elementów:

```text
GET http://localhost:8080/users HTTP/1.1
Accept: application/json
```

Odpowiedź serwera zawiera kod statusu oraz, opcjonalnie, dane — najczęściej w formacie **JSON**:

```text
HTTP/1.1 200 OK
Content-Type: application/json

[{"id": 1, "name": "Tomek"}]
```

W Spring Boot do wykonywania żądań HTTP po stronie aplikacji możemy użyć między innymi klasy `RestTemplate` (starszy sposób) lub nowszego, reaktywnego `WebClient`.

> **Klient HTTP** to strona inicjująca komunikację, wysyła żądanie i czeka na odpowiedź serwera. W aplikacjach Spring Boot do komunikacji między serwisami najczęściej stosuje się `RestTemplate` lub `WebClient`.
