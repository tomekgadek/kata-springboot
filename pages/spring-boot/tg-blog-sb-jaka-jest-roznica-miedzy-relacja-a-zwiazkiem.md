# Jaka jest różnica między relacją a związkiem pomiędzy encjami?

Zanim przejdziemy do JPA, warto wyjaśnić pewną językową i formalną zawiłość dotyczącą relacyjnych baz danych:
*   **Relacja (ang. *Relation*)** to w teorii baz danych po prostu... **tabela** (zbiór krotek).
*   **Związek (ang. *Relationship*)** to natomiast **powiązanie** pomiędzy tymi tabelami (np. poprzez klucze obce).

W potocznym żargonie programistów często używa się słowa "relacja" jako synonimu "powiązania" (np. "relacja jeden do wielu"), jednak w ścisłej teorii encje w modelu ERD łączą się ze sobą właśnie **związkami**.

W kontekście JPA (Java Persistence API) **związek pomiędzy encjami** to odzwierciedlenie bazodanowego powiązania w kodzie zorientowanym obiektowo. Pozwala to na nawigowanie pomiędzy połączonymi danymi bezpośrednio za pomocą referencji do obiektów w Javie.

### Rodzaje związków (powiązań)

W JPA wyróżniamy cztery główne typy powiązań, które mapujemy za pomocą odpowiednich adnotacji:

* **`@OneToOne` (Jeden do jednego)** – jeden rekord z tabeli A jest powiązany z dokładnie jednym rekordem z tabeli B. Przykład: Użytkownik (`User`) ma szczegółowy profil (`Profile`).
* **`@OneToMany` (Jeden do wielu)** – jeden obiekt strony A jest powiązany z wieloma obiektami strony B. Przykład: Pisarz (`Author`) napisał wiele książek (`Book`).
* **`@ManyToOne` (Wiele do jednego)** – odwrotność powyższego; wiele obiektów ze strony A odnosi się do jednego obiektu strony B.
* **`@ManyToMany` (Wiele do wielu)** – kolekcja obiektów typu A jest powiązana z kolekcją obiektów typu B (wymaga to dodatkowej tabeli łączącej w bazie). Przykład: Student (`Student`) uczęszcza na wiele kursów (`Course`), a na kurs uczęszcza wielu studentów.

### Dlaczego to ważne?

Mapowanie związków eliminuje potrzebę ręcznego pisania skomplikowanych zapytań SQL (`JOIN`). Framework ORM automatycznie zaciąga powiązane encje (tworząc strukturę grafu obiektów) i opcjonalnie potrafi kaskadowo przenosić operacje (np. usunięcie autora usunie jego książki).

>
> Formalnie w bazie danych łączymy ze sobą *relacje* (tabele) za pomocą *związków*. W JPA odwzorowujemy to jako związki pomiędzy obiektami (encjami), co znacznie ułatwia budowanie logiki biznesowej bez ciągłego myślenia o zapytaniach SQL.
>
