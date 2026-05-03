# Czym jest NoSQL?

**NoSQL** (ang. *Not Only SQL* lub *Non-SQL*) to szeroka kategoria systemów zarządzania bazami danych, które różnią się od tradycyjnych, relacyjnych baz danych (RDBMS). Bazy NoSQL zostały zaprojektowane z myślą o skalowalności poziomej, elastyczności modeli danych oraz wysokiej wydajności w przetwarzaniu ogromnych ilości danych (Big Data).

W przeciwieństwie do relacyjnych baz danych, bazy NoSQL nie opierają się na tabelach, sztywnych schematach ani języku zapytań SQL jako jedynym sposobie manipulacji danymi.

## Główne cechy baz NoSQL:

1. **Brak sztywnego schematu (Schemaless):** Struktura danych może się zmieniać w locie, co pozwala na przechowywanie danych nieustrukturyzowanych lub półustrukturyzowanych bez konieczności definiowania z góry tabel i relacji.
2. **Skalowalność pozioma (Scale-out):** W bazach NoSQL łatwo jest zwiększyć wydajność poprzez dodawanie kolejnych serwerów (węzłów) do klastra, co jest znacznie prostsze niż w przypadku baz relacyjnych, które skalują się głównie pionowo (poprzez dodawanie zasobów do jednego serwera).
3. **Szybkość i wysoka dostępność:** Wiele systemów NoSQL faworyzuje dostępność i tolerancję na partycjonowanie (zgodnie z twierdzeniem CAP) kosztem natychmiastowej spójności (tzw. spójność ostateczna - *Eventual Consistency*).

## Rodzaje baz NoSQL

W zależności od sposobu przechowywania danych, bazy NoSQL dzielimy na cztery główne kategorie:

### 1. Bazy klucz-wartość (Key-Value Stores)
Najprostszy typ bazy NoSQL. Dane są przechowywane jako para: unikalny klucz i przypisana do niego wartość. Są niezwykle szybkie i idealne do zastosowań wymagających błyskawicznego odczytu, np. buforowanie lub zarządzanie sesjami użytkowników.
*Przykłady:* Redis, Amazon DynamoDB, Riak.

### 2. Bazy dokumentowe (Document Stores)
Dane są przechowywane w formie dokumentów (najczęściej w formacie JSON, BSON lub XML). Każdy dokument jest niezależny, może mieć inną strukturę i zawiera pary klucz-wartość oraz zagnieżdżone obiekty.
*Przykłady:* MongoDB, CouchDB, RavenDB.

### 3. Bazy kolumnowe (Column-Family Stores)
Dane są przechowywane w kolumnach, a nie w wierszach, jak to ma miejsce w tradycyjnych bazach relacyjnych. Są zoptymalizowane do szybkiego odczytu i zapisu ogromnych zbiorów danych na dużej liczbie serwerów. Idealne do hurtowni danych i analityki.
*Przykłady:* Apache Cassandra, HBase.

### 4. Bazy grafowe (Graph Databases)
Zaprojektowane specjalnie do przechowywania i nawigowania po skomplikowanych relacjach między danymi. Składają się z węzłów (encji), krawędzi (relacji) oraz ich właściwości. Doskonale sprawdzają się w sieciach społecznościowych, systemach rekomendacyjnych czy wykrywaniu oszustw.
*Przykłady:* Neo4j, Amazon Neptune, ArangoDB.

## Podsumowanie

> Bazy NoSQL to nowoczesna odpowiedź na wyzwania związane z przetwarzaniem potężnych i różnorodnych zbiorów danych. Odrzucają one sztywne ramy tradycyjnych tabel. Oferują dzięki temu elastyczność i niesamowitą skalowalność poziomą. Wybór odpowiedniego typu bazy zależy w pełni od charakterystyki projektu. Możemy potrzebować błyskawicznego dostępu z wykorzystaniem struktur typu klucz-wartość. Czasem zależy nam na elastycznych dokumentach lub analizie ogromnych zbiorów kolumnowych. W innej sytuacji priorytetem będzie odkrywanie ukrytych wzorców w powiązaniach baz grafowych.
