const coursesData = [
    {
        "tag": "about-me",
        "filename": "about-me/tg-blog-am-poznajmy-sie",
        "title": "O mnie"
    },
    {
        "tag": "policy",
        "filename": "policy/tg-blog-am-polityka-prywatnosci",
        "title": "Polityka prywatno\u015bci"
    },
    {
        "tag": "policy",
        "filename": "policy/tg-blog-am-regulamin",
        "title": "Regulamin serwisu"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-czym-jest-spring-security",
        "title": "Czym jest Spring Security?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-przyklad-implementacji-1-1-jednokierunkowej",
        "title": "Przyk\u0142ad implementacji 1:1 jednokierunkowej"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jak-uzywac-exchange-w-rest-template",
        "title": "Jak u\u017cywa\u0107 exchange() w RestTemplate?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jak-skonfigurowac-mongodb-w-spring-boot",
        "title": "Jak skonfigurowa\u0107 MongoDB w Spring Boot?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jakie-mamy-sposoby-wiazania-dokumentow-w-mongodb",
        "title": "Jakie mamy sposoby wi\u0105zania dokument\u00f3w w MongoDB u\u017cywaj\u0105c Spring Boot?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-przyklad-implementacji-n-1-jednokierunkowej",
        "title": "Przyk\u0142ad implementacji N:1 jednokierunkowej"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jak-dziala-integracja-thymeleaf-z-spring-boot",
        "title": "Jak dzia\u0142a integracja Thymeleaf z Spring Boot?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-przyklad-implementacji-1-n-dwukierunkowej",
        "title": "Przyk\u0142ad implementacji 1:N dwukierunkowej"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jakie-sa-zalety-mikrouslug",
        "title": "Jakie s\u0105 zalety mikrous\u0142ug?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jak-dodac-konfiguracje-bazy-danych",
        "title": "W jaki spos\u00f3b doda\u0107 konfiguracj\u0119 bazy danych w Spring Boot?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jaka-jest-roznica-miedzy-wiazaniem-jednostronnym-a-dwustronnym",
        "title": "Jaka jest r\u00f3\u017cnica mi\u0119dzy wi\u0105zaniem jednostronnym a dwustronnym?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-co-to-sa-stereotypy-w-spring",
        "title": "Co to s\u0105 stereotypy w Spring?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jak-wyglada-architektura-mikroserwisow",
        "title": "Jak wygl\u0105da architektura mikroserwis\u00f3w?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jak-zarzadzac-konfiguracja-w-spring-boot",
        "title": "Jak zarz\u0105dza\u0107 konfiguracj\u0105 w Spring Boot?"
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
        "title": "Jaka jest r\u00f3\u017cnica mi\u0119dzy relacj\u0105 a zwi\u0105zkiem pomi\u0119dzy encjami?"
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
        "title": "Przyk\u0142ad implementacji 1:1 dwukierunkowej"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jak-wyglada-mini-aplikacja-w-spring-boot-oraz-mongodb",
        "title": "Jak wygl\u0105da mini aplikacja w Spring Boot oraz MongoDB?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-co-to-sa-schedulery-w-spring-boot",
        "title": "Co to s\u0105 schedulery i jak je definiowa\u0107?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-czym-jest-nosql",
        "title": "Czym jest NoSQL?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jaka-jest-roznica-miedzy-beanem-a-pojo",
        "title": "Jaka jest r\u00f3\u017cnica mi\u0119dzy beanem a POJO?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jakie-mamy-sposoby-wstrzykiwania-zaleznosci-w-spring",
        "title": "Jakie mamy sposoby wstrzykiwania zale\u017cno\u015bci w Spring?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jakie-adnotacje-advice-mamy-w-aop",
        "title": "Jakie adnotacje Advice mamy w AOP?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jak-wczytywac-konfiguracje-w-spring-boot",
        "title": "Jak wczytywa\u0107 konfiguracj\u0119 w Spring Boot?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-co-to-jest-soa",
        "title": "Co to jest SOA?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jak-wstrzykiwac-zaleznosci-przez-wlasciwosc-w-spring",
        "title": "Jak wstrzykiwa\u0107 zale\u017cno\u015bci przez w\u0142a\u015bciwo\u015b\u0107 w Spring?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-przyklad-implementacji-1-n-jednokierunkowej",
        "title": "Przyk\u0142ad implementacji 1:N jednokierunkowej"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-co-to-jest-spring-cloud",
        "title": "Co to jest Spring Cloud?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jak-zaimplementowac-rest-w-spring-boot",
        "title": "Jak zaimplementowa\u0107 REST w Spring Boot?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-przyklad-implementacji-n-n-jednokierunkowej",
        "title": "Przyk\u0142ad implementacji N:N jednokierunkowej"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-przyklad-implementacji-n-n-dwukierunkowej",
        "title": "Przyk\u0142ad implementacji N:N dwukierunkowej"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jak-zdefiniowac-beana-w-kodzie",
        "title": "Jak zdefiniowa\u0107 beana w kodzie?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jakie-podstawowe-pojecia-zwiazane-sa-ze-spring-security",
        "title": "Jakie podstawowe poj\u0119cia zwi\u0105zane s\u0105 ze Spring Security?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-co-to-jest-discovery-service",
        "title": "Co to jest Discovery Service?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jak-wstrzykiwac-zaleznosci-przez-konstruktor-w-spring",
        "title": "Jak wstrzykiwa\u0107 zale\u017cno\u015bci przez konstruktor w Spring?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jak-praktycznie-korzystac-z-schedulerow",
        "title": "Jak praktycznie korzysta\u0107 z scheduler\u00f3w w Spring Boot?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jak-wstrzykiwac-zaleznosci-przez-pole-w-spring",
        "title": "Jak wstrzykiwa\u0107 zale\u017cno\u015bci przez pole w Spring?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-co-to-jest-klient-http",
        "title": "Co to jest klient HTTP?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jak-uzywac-rest-template",
        "title": "Jak u\u017cywa\u0107 RestTemplate w Spring Boot?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jak-uzywac-interfejs-repozytorium-jpa",
        "title": "Jak u\u017cywa\u0107 interfejs repozytorium JPA?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jakie-sa-wady-mikrouslug",
        "title": "Jakie s\u0105 wady mikrous\u0142ug?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jak-wyglada-podstawowa-konfiguracja-z-podzialem-na-role-w-spring-security",
        "title": "Jak wygl\u0105da podstawowa konfiguracja z podzia\u0142em na role w Spring Security?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-co-to-jest-mechanizm-wstrzykiwania-zaleznosci",
        "title": "Co to jest mechanizm wstrzykiwania zale\u017cno\u015bci w Spring?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-co-to-jest-ddd",
        "title": "Co to jest DDD?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-przyklad-implementacji-n-1-dwukierunkowej",
        "title": "Przyk\u0142ad implementacji N:1 dwukierunkowej"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-porownanie-rdbms-z-mongodb",
        "title": "Por\u00f3wnanie RDBMS z MongoDB"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jak-wyglada-encja-jpa",
        "title": "Jak wygl\u0105da encja JPA?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-czym-jest-wzorzec-mvc",
        "title": "Czym jest wzorzec MVC?"
    },
    {
        "tag": "spring-boot",
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
        "title": "Jak dzia\u0142a @RequestMapping na poziomie klasy?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-jak-dostarczac-dane-do-metody-webowej-w-spring-boot",
        "title": "Jak dostarcza\u0107 dane do metody webowej w Spring Boot?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-co-to-jest-rest",
        "title": "Co to jest REST?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-co-to-jest-swagger-i-jak-go-skonfigurowac",
        "title": "Czym jest Swagger i jak go skonfigurowa\u0107 w Spring Boot?"
    },
    {
        "tag": "spring-boot",
        "filename": "spring-boot/tg-blog-sb-co-to-jest-spring-boot",
        "title": "Co to jest Spring Boot?"
    }
];
