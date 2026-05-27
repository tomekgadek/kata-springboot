# Co to jest piramida testów?

Piramida testów to koncepcja grupowania testów oprogramowania na różne warstwy (poziomy), określająca również to, ile testów z danej grupy powinniśmy posiadać w naszym projekcie. Została zaproponowana przez Mike'a Cohna i zazwyczaj składa się z trzech głównych poziomów:

+ **Testy jednostkowe (Unit Tests):** Stanowią podstawę piramidy. Powinno ich być najwięcej, ponieważ są najszybsze w wykonaniu i najtańsze w tworzeniu i utrzymaniu. Testują one małe, izolowane fragmenty kodu (np. pojedyncze metody lub klasy). W środowisku Java i Spring Boot wykorzystuje się tu m.in. JUnit i Mockito.
+ **Testy integracyjne (Integration Tests):** Znajdują się w środku piramidy. Sprawdzają, czy różne moduły aplikacji prawidłowo współpracują ze sobą lub czy integracja ze środowiskiem zewnętrznym (np. z bazą danych czy zewnętrznym API) przebiega pomyślnie. Są wolniejsze i trudniejsze w utrzymaniu niż testy jednostkowe.
+ **Testy End-to-End (E2E) / Systemowe:** Stanowią szczyt piramidy. Testują aplikację jako całość z perspektywy użytkownika końcowego. Obejmują całą ścieżkę od interfejsu po bazę danych. Są to testy najbardziej kosztowne, podatne na błędy i najwolniejsze, dlatego powinno ich być stosunkowo niewiele, pokrywając tylko krytyczne ścieżki biznesowe.


> Głównym przesłaniem piramidy testów jest zasada, aby **posiadać dużą liczbę małych, szybkich testów na dole, a znacznie mniej testów skomplikowanych na najwyższym poziomie**. Zapewnia to szybki feedback dla programistów o ewentualnych błędach i sprawia, że cały zestaw testów wykonuje się w akceptowalnym czasie.
