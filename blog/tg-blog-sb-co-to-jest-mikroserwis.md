# Co to jest mikroserwis?

**Mikroserwisy** (lub architektura mikrousług) to podejście do tworzenia oprogramowania polegające na budowaniu aplikacji jako zestawu małych, niezależnych i luźno powiązanych ze sobą usług. Zamiast tworzyć jedną wielką, monolityczną aplikację, system dzielony jest na mniejsze, autonomiczne części.

Każdy mikroserwis:
- Jest odpowiedzialny za jedną, konkretną funkcjonalność biznesową (np. zarządzanie użytkownikami, płatności, wysyłka e-maili).
- Może być rozwijany w innym języku programowania i korzystać z innej technologii bazy danych.
- Jest wdrażany, aktualizowany i skalowany całkowicie niezależnie od pozostałych usług.

Komunikacja między mikroserwisami odbywa się zazwyczaj za pośrednictwem lekkich mechanizmów sieciowych. Najczęściej wykorzystuje się do tego **REST API** (wymieniając dane w formacie JSON) lub asynchroniczne systemy kolejkowania komunikatów (np. RabbitMQ, Kafka).

Podejście to sprawia, że awaria jednego modułu nie musi oznaczać przestoju całego systemu. Dodatkowo pozwala na równoległą pracę wielu mniejszych zespołów deweloperskich nad różnymi fragmentami aplikacji.

> **Mikroserwis** to niewielka, samodzielna aplikacja realizująca ściśle określoną funkcję biznesową. Wiele takich współpracujących usług tworzy system oparty na architekturze mikrousług. Ułatwia ona skalowanie, niezależne wdrażanie oraz rozwój projektów w porównaniu do tradycyjnych, monolitycznych aplikacji.
