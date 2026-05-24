# Czym jest Spring Security?

**Spring Security** to potężny i wysoce konfigurowalny framework (będący częścią ekosystemu Spring), który dostarcza mechanizmy uwierzytelniania (authentication), autoryzacji (authorization) oraz ochrony przed powszechnymi atakami dla aplikacji w środowisku Java.

## Główne zadania Spring Security

1. **Uwierzytelnianie (Authentication):** Proces weryfikacji tożsamości użytkownika ("Kim jesteś?"). Framework wspiera wiele metod, m.in. logowanie formularzowe, Basic Auth, OAuth2, JWT czy logowanie przez LDAP.
2. **Autoryzacja (Authorization):** Proces sprawdzania uprawnień ("Co wolno Ci zrobić?"). Pozwala na określenie, którzy użytkownicy lub role mają dostęp do konkretnych zasobów (URL-i, metod w klasach).
3. **Ochrona przed atakami:** Spring Security automatycznie chroni aplikację przed popularnymi lukami w zabezpieczeniach, takimi jak:
   - **CSRF** (Cross-Site Request Forgery)
   - **CORS** (Cross-Origin Resource Sharing)
   - **Session Fixation**

## Kluczowe pojęcia

* **SecurityContext:** Przechowuje informacje o aktualnie zalogowanym użytkowniku.
* **Authentication:** Reprezentuje żeton uwierzytelnienia (dane użytkownika, jego role i status uwierzytelnienia).
* **GrantedAuthority:** Reprezentuje uprawnienie lub rolę przypisaną do użytkownika (np. `ROLE_USER`, `ROLE_ADMIN`).
* **Filter Chain:** Podstawa działania Spring Security – mechanizm oparty na łańcuchu filtrów (`SecurityFilterChain`), które przechwytują żądania HTTP i weryfikują je pod kątem bezpieczeństwa zanim dotrą do kontrolerów.

> Spring Security to standardowy i sprawdzony sposób na zabezpieczenie aplikacji tworzonych w oparciu o framework Spring Boot. Działa jako zapora oddzielająca nieautoryzowany ruch od biznesowej logiki aplikacji.
