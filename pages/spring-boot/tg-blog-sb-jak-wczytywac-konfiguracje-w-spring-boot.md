# Jak wczytywać konfigurację w Spring Boot?

Aby odczytać własne wartości zdefiniowane w pliku konfiguracyjnym (np. `application.properties`) i wykorzystać je w klasach Springa, najprościej jest posłużyć się adnotacją `@Value`. 

Pozwala ona wstrzyknąć wartość przypisaną do konkretnego klucza bezpośrednio do pola w klasie. Dobrą praktyką jest definiowanie kluczy małymi literami i oddzielanie słów myślnikiem lub kropką.

Tworzymy nowy wpis w pliku `application.properties`:

```properties
nazwa.mojego.klucza=Moja zdefiniowana wartość
```

W kodzie Java wstrzykujemy tę konfigurację korzystając ze zdefiniowanego wcześniej klucza:

```java
@Value("${nazwa.mojego.klucza}")
private String mojaZmienna;
```

> Adnotacja `@Value("${klucz}")` to najprostszy sposób na wczytanie własnych wartości z plików konfiguracyjnych (rozdzielanych kropkami lub myślnikami) bezpośrednio do pól klas. Wartości są automatycznie konwertowane na odpowiedni typ.
