# Co to jest trofeum w kontekście testowania?

Trofeum testów to koncept skupiający się na maksymalizacji pewności działania kodu przy minimalnych kosztach utrzymania. Jest to alternatywa dla tradycyjnej piramidy testów, gdzie główny nacisk kładzie się na **testy integracyjne**.

**Struktura trofeum (od dołu do góry):**
+ **Analiza statyczna**. Podstawa. Wychwytuje literówki i błędy typów przed uruchomieniem kodu (np. lintery, kompilator).
+ **Testy jednostkowe**. Używane tylko do weryfikacji złożonej logiki biznesowej w izolacji. Jest ich stosunkowo mało.
+ **Testy integracyjne**. Najszersza i najważniejsza część. Sprawdzają współpracę wielu komponentów ze sobą bez nadmiernego mockowania. Dają największą pewność poprawnego działania systemu przy rozsądnym koszcie.
+ **Testy E2E**. Na samym szczycie. Zarezerwowane wyłącznie dla najbardziej krytycznych ścieżek, ponieważ są wolne i drogie w utrzymaniu.

> Główna zasada trofeum: **Pisz testy, ale nie za dużo, głównie integracyjne.**
