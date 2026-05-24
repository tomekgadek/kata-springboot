# Jakie podstawowe pojęcia związane są ze Spring Security?

Zrozumienie mechanizmów działania Spring Security wymaga znajomości kilku fundamentalnych pojęć. Poniżej znajduje się zestawienie najważniejszych z nich:

1. **Uwierzytelnianie (Authentication)**
   Proces weryfikacji tożsamości (odpowiada na pytanie: *"Kim jesteś?"*). Reprezentuje również obiekt, który przechowuje informacje o pomyślnie zweryfikowanym użytkowniku.

2. **Autoryzacja (Authorization)**
   Proces przyznawania lub odmawiania dostępu do zasobów (odpowiada na pytanie: *"Co wolno Ci zrobić?"*). Występuje zawsze po pomyślnym uwierzytelnieniu.

3. **Principal (Główny podmiot)**
   Obiekt reprezentujący obecnie uwierzytelnionego użytkownika. Najczęściej jest to instancja klasy implementującej interfejs `UserDetails` (zawierająca m.in. nazwę użytkownika, hasło i status konta).

4. **GrantedAuthority**
   Pojedyncze uprawnienie lub rola przyznana użytkownikowi (np. `ROLE_ADMIN`, `READ_PRIVILEGE`). Spring Security używa tych uprawnień do podejmowania decyzji autoryzacyjnych.

5. **SecurityContext oraz SecurityContextHolder**
   - **SecurityContext:** Kontekst przechowujący obiekt `Authentication` (czyli dane o aktualnie zalogowanym użytkowniku).
   - **SecurityContextHolder:** Klasa, która zarządza `SecurityContext`. Domyślnie używa mechanizmu `ThreadLocal`, co oznacza, że informacje o zabezpieczeniach są dostępne z dowolnego miejsca w kodzie w ramach danego wątku (np. żądania HTTP).

6. **UserDetailsService**
   Kluczowy interfejs wykorzystywany podczas logowania. Posiada jedną metodę `loadUserByUsername()`, która służy do pobierania danych użytkownika (np. z bazy danych, z pamięci itp.).

7. **SecurityFilterChain (Łańcuch filtrów)**
   Serce Spring Security na poziomie webowym. To seria filtrów, przez które przechodzi każde żądanie HTTP, zanim dotrze do właściwego kontrolera. Filtry te sprawdzają m.in. obecność sesji, tokenów JWT czy nagłówków CORS/CSRF.

> Znajomość mechanizmów działania Spring Security znacznie ułatwia czytanie dokumentacji oraz samodzielne konfigurowanie i wdrażanie zaawansowanych mechanizmów bezpieczeństwa.
