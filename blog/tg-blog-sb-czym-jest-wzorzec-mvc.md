# Czym jest wzorzec MVC?

**MVC** (z ang. *Model-View-Controller*) to jeden z najpopularniejszych wzorców architektonicznych w projektowaniu aplikacji, szczególnie tych webowych. Jego głównym celem jest przejrzysty podział kodu na trzy odrębne, współpracujące grupy komponentów.

Poszczególne warstwy we wzorcu MVC to:

1. **Model** - Reprezentuje dane aplikacji oraz jej logikę biznesową. Model zarządza stanem aplikacji, lecz nie wie absolutnie nic o tym, w jaki sposób te dane zostaną zaprezentowane użytkownikowi.
2. **View** - Odpowiada wyłącznie za interfejs użytkownika i prezentację danych. Są to najczęściej szablony HTML czy ekrany aplikacji. Widok tylko i wyłącznie wyświetla to, co otrzyma.
3. **Controller** - Pełni rolę pośrednika i "kierownika ruchu". Odbiera żądania od użytkownika, komunikuje się z modelem, by przetworzyć odpowiednie operacje, a ostatecznie decyduje, jaki widok wyświetlić jako odpowiedź.

**Dlaczego to takie ważne?**

Zastosowanie wzorca MVC wprowadza tzw. separację odpowiedzialności. Oddzielenie logiki biznesowej, od prezentacji i warstwy kontrolera sprawia, że kod jest łatwiejszy do utrzymania i testowania.

> **Wzorzec MVC** dzieli aplikację na warstwę danych (**Model**), warstwę prezentacji (**Widok**) i warstwę sterującą (**Kontroler**), dzięki czemu kod zyskuje większą przejrzystość i jest łatwy w rozbudowie.
