# Porównanie RDBMS z MongoDB

Relacyjne bazy danych (RDBMS), takie jak PostgreSQL, MySQL czy Oracle, przez wiele lat stanowiły standard w projektowaniu systemów informatycznych. Wraz ze wzrostem zapotrzebowania na elastyczność i skalowanie, dużą popularność zyskały bazy typu NoSQL. Jedną z najpopularniejszych i najbardziej reprezentatywnych baz tego nurtu jest **MongoDB**, oparta na strukturze dokumentów. 

Oto zestawienie kluczowych różnic pomiędzy tradycyjnym RDBMS a MongoDB.

## Główne różnice

### 1. Struktura danych – **RDBMS:** Przechowuje dane w dwuwymiarowych **tabelach**, składających się z wierszy i kolumn. Każdy wiersz to jeden rekord, a każda kolumna to atrybut. – **MongoDB:** Przechowuje dane w postaci **dokumentów** BSON (binarny format podobny do JSON) wewnątrz **kolekcji**. Dokumenty te mogą zawierać zagnieżdżone obiekty i tablice.

### 2. Schemat danych – **RDBMS:** Posiada **sztywny schemat** (schema-based). Przed dodaniem danych należy zdefiniować tabele, typy danych dla kolumn i relacje. Zmiana schematu (np. dodanie nowej kolumny) wymaga wykonania operacji `ALTER TABLE`, co przy dużych bazach może być kosztowne. – **MongoDB:** Jest **elastyczna** (schemaless lub dynamic schema). Dokumenty w tej samej kolekcji mogą mieć różną strukturę, co ułatwia ewolucję aplikacji i szybkie dodawanie nowych funkcjonalności.

### 3. Relacje i złączenia (JOIN) – **RDBMS:** Opiera się na silnych powiązaniach między tabelami przy użyciu kluczy głównych (Primary Key) i obcych (Foreign Key). Skomplikowane zapytania łączące dane realizowane są za pomocą wydajnych operacji `JOIN`. – **MongoDB:** Zamiast skomplikowanych złączeń, często stosuje się **zagnieżdżanie dokumentów** (embedding) – powiązane dane trzymane są w jednym dokumencie. Alternatywą są referencje (odniesienia do innych dokumentów). Od wersji 3.2 dostępny jest operator `$lookup`, pozwalający na łączenie kolekcji, jednak nie jest on tak wydajny jak klasyczne `JOIN`-y.

### 4. Skalowalność – **RDBMS:** Historycznie opierały się na **skalowalności pionowej** (Scale-up), polegającej na zwiększaniu mocy obliczeniowej, RAM-u lub przestrzeni dyskowej pojedynczego serwera. – **MongoDB:** Od podstaw zaprojektowana do **skalowalności poziomej** (Scale-out). Poprzez mechanizm zwany *shardingiem*, dane są automatycznie rozpraszane na wiele serwerów.

### 5. Transakcje i spójność – **RDBMS:** Gwarantuje pełną zgodność z właściwościami **ACID** (Atomowość, Spójność, Izolacja, Trwałość) dla wielostopniowych transakcji obejmujących wiele tabel. – **MongoDB:** Domyślnie gwarantuje atomowość na poziomie **pojedynczego dokumentu**. Od wersji 4.0 wprowadzono obsługę wielodokumentowych transakcji ACID, co znacznie zbliżyło możliwości MongoDB do tradycyjnych rozwiązań relacyjnych.

## Tabela pojęć: RDBMS vs MongoDB

Wiele koncepcji z RDBMS ma swoje bezpośrednie odpowiedniki w MongoDB:

| RDBMS (SQL) | MongoDB (NoSQL) |
| --- | --- |
| Baza danych | Baza danych |
| Tabela | Kolekcja |
| Wiersz | Dokument |
| Kolumna | Pole (Field) |
| Relacja (JOIN) | Zagnieżdżenie (Embedded) / `$lookup` |
| Klucz główny (PK) | Pole `_id` |

## Podsumowanie

> RDBMS to idealny wybór dla systemów, w których struktura danych jest stabilna i z góry znana, a integralność relacyjna oraz skomplikowane transakcje (np. w systemach bankowych) są kluczowe. Z kolei MongoDB świetnie sprawdza się w nowoczesnych aplikacjach o dużej dynamice zmian, gdzie struktura danych ewoluuje. Zapewnia ogromną elastyczność, ułatwia horyzontalne skalowanie i pozwala na szybkie przetwarzanie wielkich zbiorów dokumentów, co jest bezcenne w systemach e-commerce, rozwiązaniach IoT czy systemach CMS.
