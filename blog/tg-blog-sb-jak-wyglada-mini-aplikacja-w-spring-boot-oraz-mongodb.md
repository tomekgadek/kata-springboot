# Jak wygląda mini aplikacja w Spring Boot oraz MongoDB?

Aby szybko zademonstrować działanie MongoDB w Spring Boot, stworzymy minimalistyczną aplikację zarządzającą listą zadań (TODO). Aplikacja będzie składać się z czterech głównych elementów: dokumentu (encji), repozytorium, serwisu oraz kontrolera REST.

Zakładamy, że w `pom.xml` mamy dodane zależności `spring-boot-starter-data-mongodb` oraz `spring-boot-starter-web`, a w `application.properties` wskazane jest URI do bazy.

## 1. Definicja Dokumentu (Model)

Klasa modelu reprezentuje strukturę pojedynczego rekordu w bazie. Zamiast relacyjnego `@Entity` z JPA, w MongoDB używamy adnotacji `@Document`.

```java
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "tasks")
public class Task {

    @Id
    private String id;
    private String description;
    private boolean completed;

    // Konstruktory, Gettery i Settery (w prawdziwym projekcie warto użyć Lomboka)
    
    public Task() {}

    public Task(String description, boolean completed) {
        this.description = description;
        this.completed = completed;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public boolean isCompleted() { return completed; }
    public void setCompleted(boolean completed) { this.completed = completed; }
}
```

## 2. Repozytorium (Dostęp do danych)

Spring Data MongoDB działa pod względem obsługi bardzo podobnie do Spring Data JPA. Wystarczy stworzyć interfejs dziedziczący po `MongoRepository`.

```java
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends MongoRepository<Task, String> {
    // Podstawowe metody CRUD (save, findAll, findById, deleteById) mamy tu dostępne "za darmo"
}
```

## 3. Serwis (Logika biznesowa)

Dobrą praktyką jest oddzielenie logiki biznesowej od warstwy dostępu do danych (Repozytorium) oraz warstwy prezentacji (Kontrolera). Służy do tego klasa z adnotacją `@Service`.

```java
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TaskService {

    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    public Task createTask(Task task) {
        // Tu można by dodać dodatkową logikę biznesową, np. walidację
        return taskRepository.save(task);
    }
}
```

## 4. Kontroler (REST API)

Na koniec tworzymy kontroler, który wstrzykuje `TaskService` i wystawia podstawowe metody zarządzania zadaniami przez protokół HTTP.

```java
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping
    public List<Task> getAllTasks() {
        return taskService.getAllTasks();
    }

    @PostMapping
    public Task createTask(@RequestBody Task task) {
        return taskService.createTask(task);
    }
}
```

## Podsumowanie

> Jak widać, utworzenie mini aplikacji łączącej Spring Boot z MongoDB jest równie szybkie i intuicyjne, jak w przypadku relacyjnych baz danych. Podział na warstwy (Model -> Repozytorium -> Serwis -> Kontroler) pomaga zachować porządek i czystość architektury. Dzięki wykorzystaniu interfejsu `MongoRepository`, nie musimy ręcznie pisać zapytań ani zarządzać połączeniem, co pozwala natychmiast skupić się na właściwej logice biznesowej.
