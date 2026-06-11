const coursesData = [
    {
        "tag": "about-me",
        "filename": "about-me/tg-blog-am-poznajmy-sie",
        "title": "O mnie"
    },
    {
        "tag": "security",
        "filename": "spring-boot/tg-blog-sb-czym-jest-spring-security",
        "title": "Czym jest Spring Security?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-przyklad-implementacji-1-1-jednokierunkowej",
        "title": "JPA: Relacja 1:1 jednokierunkowa"
    },
    {
        "tag": "rest",
        "filename": "spring-boot/tg-blog-sb-jak-uzywac-exchange-w-rest-template",
        "title": "Jak używać exchange() w RestTemplate?"
    },
    {
        "tag": "database",
        "filename": "spring-boot/tg-blog-sb-jak-skonfigurowac-mongodb-w-spring-boot",
        "title": "Jak skonfigurować MongoDB w Spring Boot?"
    },
    {
        "tag": "database",
        "filename": "spring-boot/tg-blog-sb-jakie-mamy-sposoby-wiazania-dokumentow-w-mongodb",
        "title": "Jakie mamy sposoby wiązania dokumentów w MongoDB używając Spring Boot?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-przyklad-implementacji-n-1-jednokierunkowej",
        "title": "JPA: Relacja N:1 jednokierunkowa"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jak-dziala-integracja-thymeleaf-z-spring-boot",
        "title": "Jak działa integracja Thymeleaf z Spring Boot?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-przyklad-implementacji-1-n-dwukierunkowej",
        "title": "JPA: Relacja 1:N dwukierunkowa"
    },
    {
        "tag": "architecture",
        "filename": "spring-boot/tg-blog-sb-jakie-sa-zalety-mikrouslug",
        "title": "Jakie są zalety mikrousług?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jak-dodac-konfiguracje-bazy-danych",
        "title": "W jaki sposób dodać konfigurację bazy danych w Spring Boot?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jaka-jest-roznica-miedzy-wiazaniem-jednostronnym-a-dwustronnym",
        "title": "Jaka jest różnica między wiązaniem jednostronnym a dwustronnym?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-co-to-sa-stereotypy-w-spring",
        "title": "Co to są stereotypy w Spring?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jak-wyglada-architektura-mikroserwisow",
        "title": "Jak wygląda architektura mikroserwisów?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jak-zarzadzac-konfiguracja-w-spring-boot",
        "title": "Jak zarządzać konfiguracją w Spring Boot?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-co-to-jest-mikroserwis",
        "title": "Co to jest mikroserwis?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-mikroserwis-soa-ddd",
        "title": "Mikroserwis = SOA + DDD?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jaka-jest-roznica-miedzy-relacja-a-zwiazkiem",
        "title": "Jaka jest różnica między relacją a związkiem pomiędzy encjami?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-co-to-jest-programowanie-aspektowe",
        "title": "Co to jest programowanie aspektowe?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-co-to-jest-api-gateway",
        "title": "Co to jest API Gateway?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-czym-jest-jdbc",
        "title": "Czym jest JDBC?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-przyklad-implementacji-1-1-dwukierunkowej",
        "title": "JPA: Relacja 1:1 dwukierunkowa"
    },
    {
        "tag": "database",
        "filename": "spring-boot/tg-blog-sb-jak-wyglada-mini-aplikacja-w-spring-boot-oraz-mongodb",
        "title": "Jak wygląda mini aplikacja w Spring Boot oraz MongoDB?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-co-to-sa-schedulery-w-spring-boot",
        "title": "Co to są schedulery i jak je definiować?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-czym-jest-nosql",
        "title": "Czym jest NoSQL?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jaka-jest-roznica-miedzy-beanem-a-pojo",
        "title": "Jaka jest różnica między beanem a POJO?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jakie-mamy-sposoby-wstrzykiwania-zaleznosci-w-spring",
        "title": "Jakie mamy sposoby wstrzykiwania zależności w Spring?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jakie-adnotacje-advice-mamy-w-aop",
        "title": "Jakie adnotacje Advice mamy w AOP?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jak-wczytywac-konfiguracje-w-spring-boot",
        "title": "Jak wczytywać konfigurację w Spring Boot?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-co-to-jest-soa",
        "title": "Co to jest SOA?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jak-wstrzykiwac-zaleznosci-przez-wlasciwosc-w-spring",
        "title": "Jak wstrzykiwać zależności przez właściwość w Spring?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-przyklad-implementacji-1-n-jednokierunkowej",
        "title": "JPA: Relacja 1:N jednokierunkowa"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-co-to-jest-spring-cloud",
        "title": "Co to jest Spring Cloud?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jak-zaimplementowac-rest-w-spring-boot",
        "title": "Jak zaimplementować REST w Spring Boot?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-przyklad-implementacji-n-n-jednokierunkowej",
        "title": "JPA: Relacja N:N jednokierunkowa"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-przyklad-implementacji-n-n-dwukierunkowej",
        "title": "JPA: Relacja N:N dwukierunkowa"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jak-zdefiniowac-beana-w-kodzie",
        "title": "Jak zdefiniować beana w kodzie?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jakie-podstawowe-pojecia-zwiazane-sa-ze-spring-security",
        "title": "Jakie podstawowe pojęcia związane są ze Spring Security?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-co-to-jest-discovery-service",
        "title": "Co to jest Discovery Service?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jak-wstrzykiwac-zaleznosci-przez-konstruktor-w-spring",
        "title": "Jak wstrzykiwać zależności przez konstruktor w Spring?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jak-praktycznie-korzystac-z-schedulerow",
        "title": "Jak praktycznie korzystać z schedulerów w Spring Boot?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jak-wstrzykiwac-zaleznosci-przez-pole-w-spring",
        "title": "Jak wstrzykiwać zależności przez pole w Spring?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-co-to-jest-klient-http",
        "title": "Co to jest klient HTTP?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jak-uzywac-rest-template",
        "title": "Jak używać RestTemplate w Spring Boot?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jak-uzywac-interfejs-repozytorium-jpa",
        "title": "Jak używać interfejs repozytorium JPA?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jakie-sa-wady-mikrouslug",
        "title": "Jakie są wady mikrousług?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jak-wyglada-podstawowa-konfiguracja-z-podzialem-na-role-w-spring-security",
        "title": "Jak wygląda podstawowa konfiguracja z podziałem na role w Spring Security?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-co-to-jest-mechanizm-wstrzykiwania-zaleznosci",
        "title": "Co to jest mechanizm wstrzykiwania zależności w Spring?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-co-to-jest-ddd",
        "title": "Co to jest DDD?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-przyklad-implementacji-n-1-dwukierunkowej",
        "title": "JPA: Relacja N:1 dwukierunkowa"
    },
    {
        "tag": "database",
        "filename": "spring-boot/tg-blog-sb-porownanie-rdbms-z-mongodb",
        "title": "Porównanie RDBMS z MongoDB"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jak-wyglada-encja-jpa",
        "title": "Jak wygląda encja JPA?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-czym-jest-wzorzec-mvc",
        "title": "Czym jest wzorzec MVC?"
    },
    {
        "tag": "database",
        "filename": "spring-boot/tg-blog-sb-co-to-jest-mongodb-compass",
        "title": "Co to jest MongoDB Compass?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jakie-mamy-metody-http-w-spring-boot",
        "title": "Jakie mamy metody HTTP w Spring Boot?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-co-to-jest-spring-context",
        "title": "Co to jest Spring Context?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-co-to-jest-spring-data-jpa",
        "title": "Co to jest Spring Data JPA?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jak-dziala-request-mapping-na-poziomie-klasy",
        "title": "Jak działa @RequestMapping na poziomie klasy?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jak-dostarczac-dane-do-metody-webowej-w-spring-boot",
        "title": "Jak dostarczać dane do metody webowej w Spring Boot?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-co-to-jest-rest",
        "title": "Co to jest REST?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-co-to-jest-swagger-i-jak-go-skonfigurowac",
        "title": "Czym jest Swagger i jak go skonfigurować w Spring Boot?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-co-to-jest-spring-boot",
        "title": "Co to jest Spring Boot?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-co-to-jest-ribbon",
        "title": "Co to jest Ribbon?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-co-to-jest-piramida-testow",
        "title": "Co to jest piramida testów?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-co-to-sa-testy-jednostkowe",
        "title": "Co to są testy jednostkowe?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-co-to-sa-testy-integracyjne",
        "title": "Co to są testy integracyjne?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-co-to-sa-testy-e2e",
        "title": "Co to są testy E2E?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-co-to-jest-diament-w-kontekscie-testowania",
        "title": "Co to jest diament w kontekście testowania?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-co-to-jest-trofeum-w-kontekscie-testowania",
        "title": "Co to jest trofeum w kontekście testowania?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jak-wygladaja-testy-jednostkowe-w-spring-boot",
        "title": "Jak wyglądają testy jednostkowe w Spring Boot?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-co-to-jest-junit",
        "title": "Co to jest JUnit?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-co-to-jest-mockito",
        "title": "Co to jest Mockito?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-co-to-jest-assertj",
        "title": "Co to jest AssertJ?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-co-to-jest-hamcrest",
        "title": "Co to jest Hamcrest?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-przyklad-zastosowania-adnotacji-springboot-test",
        "title": "Przykład zastosowania adnotacji @SpringBootTest"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-co-to-jest-spring-webflux-framework",
        "title": "Co to jest Spring WebFlux Framework?"
    },
    {
        "tag": "architecture",
        "filename": "spring-boot/tg-blog-sb-co-to-jest-docker",
        "title": "Co to jest Docker?"
    }
];
