---
name: add-blog-post
description: "Umiejętność dodawania nowego wpisu na blogu. Automatyzuje proces tworzenia pliku z treścią, aktualizacji sitemap.xml oraz courses-data.js."
---

# Dodawanie nowego wpisu na blogu (Add Blog Post)

Ta umiejętność definiuje kroki niezbędne do poprawnego dodania nowego posta na blogu w tym projekcie. Ze względu na statyczną naturę strony (klasyczny frontend z JS), wymaga to ręcznej aktualizacji kilku plików powiązanych. Zawsze postępuj zgodnie z poniższymi instrukcjami, gdy użytkownik poprosi o dodanie nowego wpisu.

## Proces krok po kroku

### 1. Utworzenie pliku z treścią wpisu (.md)
Treść wszystkich wpisów przechowywana jest w plikach z rozszerzeniem Markdown (`.md`) wewnątrz katalogu `pages/`. Na przykład wpisy dotyczące Spring Boot umieszczane są w `pages/spring-boot/`.
*   **Katalog:** `pages/<kategoria>/` (np. `pages/spring-boot/` lub `pages/about-me/`)
*   **Nazwa pliku:** Powinna być w formacie kebab-case i mieć rozszerzenie `.md` (np. `tg-blog-sb-nowy-temat.md`).
*   **Styl i język:** Wszelkie wpisy mają być pisane prostym i zwięzłym językiem. Krótko, prosto i na temat. Skupiaj się na "mięsie informacyjnym", unikaj długich myślników i lania wody. Używaj normalnego słownictwa z branży IT.
*   **Akcja:** Utwórz nowy plik `.md` we właściwym folderze i umieść w nim treść posta w formacie Markdown.

### 2. Aktualizacja pliku z danymi wpisów (`js/courses-data.js`)
Strona pobiera listę wpisów i metadane bezpośrednio z tablicy wewnątrz pliku JS.
*   **Plik:** `js/courses-data.js`
*   **Akcja:** Na końcu tablicy `coursesData` (lub w innym jej odpowiednim miejscu) dodaj nowy wpis w formacie JSON. Uważaj na przecinki, żeby nie popsuć struktury tablicy.
*   **Format wpisu:**
    ```javascript
    {
        "tag": "<tag-kategorii>", // np. "spring-boot", "database", "rest"
        "filename": "<kategoria>/<nazwa-pliku-bez-rozszerzenia>", // Ważne: bez .md!
        "title": "<Tytuł wpisu, który będzie wyświetlany na stronie>"
    }
    ```
    *Przykład:*
    ```javascript
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-nowy-temat",
        "title": "Mój nowy super wpis o Spring Boot"
    }
    ```

### 3. Aktualizacja mapy witryny (`sitemap.xml`)
Aby nowa strona była poprawnie odnajdywana i indeksowana przez przeglądarki i wyszukiwarki, niezbędna jest modyfikacja sitemapy.
*   **Plik:** `sitemap.xml`
*   **Akcja:** Dodaj nowy węzeł `<url>` jako dziecko w `<urlset>`.
*   **Format url:** Zawiera adres URL z parametrem query `?post=...`
    ```xml
    <url>
      <loc>https://tomekgadek.github.io/page.html?post=<kategoria>/<nazwa-pliku-bez-rozszerzenia></loc>
    </url>
    ```
    *Przykład:*
    ```xml
    <url>
      <loc>https://tomekgadek.github.io/page.html?post=spring-boot/tg-blog-sb-nowy-temat</loc>
    </url>
    ```

## Lista sprawdzająca (Checklist) po wykonaniu zadania
- [ ] Utworzono plik z treścią (z rozszerzeniem `.md`) w folderze `pages/`
- [ ] Zaktualizowano strukturę w pliku `courses-data.js` (uważając na przecinki, a wartość klucza `filename` nie ma rozszerzenia `.md`)
- [ ] Zaktualizowano `sitemap.xml` dodając odpowiedni adres URL z poprawną ścieżką posta (wewnątrz tagu `<loc>`)
- [ ] Zaktualizowano `README.md` dodając link do nowego wpisu na liście
