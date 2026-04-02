# Co to jest REST?

**REST** to bardzo popularny styl architektoniczny. Służy do wymiany danych między różnymi aplikacjami. Nie ma znaczenia, w jakim języku czy frameworku zostały napisane. Chodzi o to, żeby mogły się ze sobą łatwo "dogadać".

Dzięki REST aplikacje mogą się swobodnie komunikować. Wyobraź sobie usługę, która analizuje dane giełdowe. Za pomocą REST może ona udostępniać te informacje dalej. Inna aplikacja je pobierze, przetworzy i wyświetli użytkownikowi na ekranie.

Aplikacje budujące **REST API** najczęściej "rozmawiają" ze sobą wymieniając dane w formacie **JSON** lub **XML**. Dostęp do tych danych uzyskujemy przez specjalne adresy URL. Nazywamy je punktami końcowymi (lub po prostu **endpointami**).

Typowa struktura adresu wygląda następująco:

```text
http://<adres-ip>:<port>/<endpoint>
```

Na przykład:

```text
http://localhost:8080/users
```

> **REST** to ustandaryzowany styl architektoniczny umożliwiający łatwą wymianę danych między systemami. Komunikacja opiera się na punktach końcowych (endpointach), a najczęstszym nośnikiem przesyłanych informacji jest format JSON lub XML.
