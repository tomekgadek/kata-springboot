# Co to jest DDD?

**DDD** (Domain-Driven Design), czyli Projektowanie Sterowane Dziedziną, to podejście do tworzenia oprogramowania, które kładzie główny nacisk na zrozumienie i modelowanie złożonej domeny biznesowej (dziedziny problemu). Podejście to zostało spopularyzowane przez Erica Evansa.

Głównym założeniem DDD nie jest skupianie się w pierwszej kolejności na technologii, bazach danych czy architekturze, ale na **biznesie**. Programiści i eksperci domenowi (Domain Experts – np. analitycy, menedżerowie, specjaliści w danej dziedzinie) muszą ściśle współpracować, aby stworzyć oprogramowanie, które dokładnie odzwierciedla rzeczywiste procesy i reguły biznesowe.

### Kluczowe założenia i pojęcia DDD

DDD można podzielić na dwa obszary: – **Strategiczne DDD** – skupione na podziale systemu na konteksty (Bounded Context) i relacje między nimi. – **Taktyczne DDD** – skupione na implementacji modelu w kodzie.

1. **Wszechobecny język (Ubiquitous Language):**  
Wspólny, precyzyjny język używany przez ekspertów biznesowych i programistów. Powinien być obecny w dyskusjach, dokumentacji oraz kodzie (nazwy klas, metod, zmiennych).

2. **Ograniczony kontekst (Bounded Context):**  
Granica, w której dany model ma jedno, spójne znaczenie. To samo pojęcie może oznaczać coś innego w różnych kontekstach (np. „Klient” w fakturowaniu vs w systemie wsparcia).

3. **Bloki budowlane (Tactical Design):**  
- **Encje (Entities)** – posiadają tożsamość i mogą się zmieniać w czasie. – **Obiekty wartości (Value Objects)** – są niemutowalne i nie mają tożsamości. – **Agregaty (Aggregates)** – grupują obiekty i wyznaczają granicę spójności danych.

Przykład: w systemie e-commerce możemy wyróżnić konteksty takie jak Zamówienia, Płatności i Magazyn – każdy z nich ma własny model i znaczenie pojęć.

> Zastosowanie **DDD** jest często wykorzystywane przy projektowaniu architektury mikroserwisów. Koncepcja *Bounded Context* stanowi naturalną wskazówkę do wyznaczania granic usług, pomagając zachować ich spójność biznesową i niezależność.
