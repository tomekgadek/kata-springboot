# Mikroserwis = SOA + DDD?

Często można spotkać się ze stwierdzeniem, że architektura mikroserwisów to ewolucja podejścia **SOA** (Service-Oriented Architecture) połączona z zasadami **DDD** (Domain-Driven Design). Choć jest to pewne uproszczenie, dobrze oddaje ono istotę i genezę mikrousług.

### SOA (Service-Oriented Architecture)
Podejście SOA, popularne na początku lat 2000, zakładało budowę systemu z wykorzystaniem reużywalnych usług. W praktyce jednak SOA często kojarzyło się z potężnymi, skomplikowanymi rozwiązaniami i scentralizowaną magistralą usług (ESB – Enterprise Service Bus). 

Mikroserwisy czerpią z SOA samą ideę podziału na usługi (skupienie na biznesie), ale odrzucają scentralizowane zarządzanie. Zamiast skomplikowanego ESB stawiają na tzw. **"smart endpoints and dumb pipes"** (inteligentne punkty końcowe i proste, szybkie kanały komunikacji, np. REST lub kolejki wiadomości).

### DDD (Domain-Driven Design)
Największym wyzwaniem przy tworzeniu mikroserwisów nie jest technologia, ale odpowiedni podział systemu na mniejsze części. W tym miejscu z pomocą przychodzi DDD i jego kluczowe pojęcie: **Bounded Context** (ograniczony kontekst). 

Bounded Context definiuje wyraźną granicę w domenie biznesowej, wewnątrz której dany model ma sens i jest w pełni spójny. W optymalnie zaprojektowanej architekturze mikroserwisowej, pojedynczy mikroserwis powinien idealnie odpowiadać jednemu ograniczonemu kontekstowi (Bounded Context) zaczerpniętemu z DDD.

> Architektura mikroserwisów jest często określana jako **SOA + DDD**. Z **SOA** czerpie ideę systemu rozproszonego opartego na niezależnych usługach (odrzucając jednak ciężkie szyny ESB), natomiast **DDD** dostarcza zasad (np. Bounded Context) do wyznaczania granic tych usług, dbając o ich spójność i autonomię biznesową.
