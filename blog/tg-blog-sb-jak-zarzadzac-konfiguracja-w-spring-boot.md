# Jak zarządzać konfiguracją w Spring Boot?

W Spring Boot możesz skonfigurować aplikację za pomocą pliku `application.properties`. To właśnie w nim możesz definiować parametry, z których możesz skorzystać w trakcie działania aplikacji.

Za pomocą tego pliku możesz:
* nadpisywać domyślną konfigurację Springa,
* tworzyć własne, niestandardowe zmienne.

Aby zmienić domyślne ustawienia, wystarczy odwołać się do odpowiedniej właściwości i przypisać jej nową wartość. Oto przykład:

```properties
spring.application.name=spring-app
server.port=8081
```

> Konfigurację zapisujemy używając prostego formatu `klucz=wartość`. W powyższym fragmencie zmieniłem domyślną nazwę aplikacji oraz port serwera, na którym zostanie ona uruchomiona.
