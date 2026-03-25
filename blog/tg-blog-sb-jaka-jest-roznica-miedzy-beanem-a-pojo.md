# Jaka jest różnica między beanem a POJO?

**POJO** to prosta klasa Java, niezależna od frameworków, służąca do przechowywania danych.

**Bean** to obiekt zarządzany przez Spring, któremu kontener nadaje życie, wstrzykuje zależności i zarządza cyklem życia.

## Biblioteka książek

Biblioteka (bean) zawiera listę książek (POJO).

```java
// Prosta klasa POJO
class Book {
    private String title;

    public Book(String title) {
        this.title = title;
    }
}

// Bean zarządzający logiką
@Service
public class LibraryService {
    private List<Book> books;

    public LibraryService() {
        this.books = new ArrayList<>();
    }

    public void addBook(String title) {
        books.add(new Book(title));
    }
}
```

>
> POJO to lekka, niezależna klasa danych. Bean zarządza logiką, tworzy i manipuluje POJO. To jasny podział odpowiedzialności i prostota działania w Spring.
>