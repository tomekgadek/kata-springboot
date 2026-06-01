# Co to jest diament w kontekście testowania?

Diament testów (ang. *Testing Diamond*) to alternatywne podejście do strukturyzacji i priorytetyzacji testów w porównaniu do tradycyjnej piramidy testów. Model ten staje się coraz bardziej popularny w nowoczesnym tworzeniu oprogramowania, w tym w architekturze mikroserwisowej, gdzie aplikacje są mocno rozproszone.

W tradycyjnej **piramidzie testów** największy nacisk kładzie się na bardzo dużą liczbę izolowanych testów jednostkowych (podstawa piramidy), mniejszą liczbę testów integracyjnych w środku i małą liczbę powolnych testów E2E na samym szczycie.

**Diament testów** zmienia te proporcje i przypomina kształtem diament:
+ **Dół diamentu (wąski)**. To testy jednostkowe. Jest ich stosunkowo mało. Sprawdzają one głównie skomplikowaną logikę biznesową. Piszemy je tylko w miejscach wymagających precyzyjnej izolacji. Omijamy prosty kod i trywialne usługi.
+ **Środek diamentu (szeroki)**. Są to testy integracyjne. Stanowią one trzon wszystkich testów. Weryfikują współpracę komponentów. Sprawdzają komunikację z bazą danych lub zewnętrznym API. Zamiast mocków używamy prawdziwej infrastruktury. Często wykorzystujemy tu narzędzie *Testcontainers*. 
+ **Góra diamentu (wąska)**. To testy E2E. Jest ich bardzo mało. Uruchamiają się powoli. Są także trudniejsze w utrzymaniu. Testują jedynie najważniejsze ścieżki działania systemu.

> Współczesny kod backendowy najczęściej jedynie łączy elementy i deleguje zadania. Dlatego to testy integracyjne przynoszą największą wartość. Faktycznie weryfikują one komunikację pomiędzy warstwami i zewnętrznymi usługami.
