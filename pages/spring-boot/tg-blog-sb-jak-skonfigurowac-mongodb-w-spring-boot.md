# Jak skonfigurować MongoDB w Spring Boot?

Konfiguracja MongoDB w Spring Boot jest wyjątkowo prosta dzięki mechanizmowi Auto-Configuration. Wystarczą zaledwie dwa kroki, aby połączyć aplikację z bazą danych.

Poniżej znajduje się absolutne minimum konfiguracyjne (tzw. gotowiec).

## 1. Zależność w Maven (`pom.xml`)

Aby Spring Boot mógł zarządzać połączeniem z MongoDB, należy dodać dedykowany starter do pliku `pom.xml`:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-mongodb</artifactId>
</dependency>
```

## 2. Konfiguracja połączenia (`application.properties`)

Cała konfiguracja opiera się na dostarczeniu URI połączenia w pliku `src/main/resources/application.properties`. Spring Boot na tej podstawie automatycznie utworzy niezbędne obiekty i skonfiguruje połączenie.

```properties
# Szablon: mongodb://użytkownik:hasło@host:port/nazwa_bazy_danych
spring.data.mongodb.uri=mongodb://localhost:27017/moja_baza_danych
```

Jeśli Twoja baza jest uruchomiona lokalnie i nie wymaga uwierzytelniania, to jest wszystko, czego potrzebujesz!

## Podsumowanie

> Spring Boot i autokonfiguracja redukują proces podłączania bazy MongoDB do dodania jednej zależności w Mavenie i jednej linijki w `application.properties`. Cała reszta pracy (inicjalizacja połączenia i konfiguracja beanów) wykonywana jest automatycznie w tle, pozwalając programiście od razu przystąpić do działania.
