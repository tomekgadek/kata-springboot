# Co to są stereotypy w Spring?

**Stereotypy** w Spring to specjalne adnotacje, które wskazują, że dana klasa powinna być zarządzana przez kontener Spring jako bean. Ułatwiają one organizację kodu i definiowanie ról poszczególnych komponentów w aplikacji.

## Rodzaje stereotypów

| Adnotacja / Stereotyp | Znaczenie |
| --- | --- |
| **@Component** | Ogólny stereotyp dla komponentów Spring. |
| **@Service** | Oznacza klasę jako warstwę usługową (logika biznesowa). |
| **@Repository** | Wskazuje klasę jako warstwę dostępu do danych. |
| **@Controller** | Definiuje klasę jako kontroler w aplikacji webowej (MVC). |
| **@RestController** | Specjalizacja @Controller dla usług (REST). |

> Stereotypy to specjalne adnotacje, które umożliwiają tworzenie beanów oraz nadawanie im określonych ról w aplikacji.