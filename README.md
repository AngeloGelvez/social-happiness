# SocialHappiness 🚀

**SocialHappiness** es una aplicación de red social moderna y altamente interactiva desarrollada en el frontend utilizando **Angular 19** y **Tailwind CSS**. Este proyecto simula una plataforma completa (feeds, perfiles de usuario, creación de publicaciones, estadísticas y comentarios) consumiendo datos provenientes de endpoints y APIs ficticias especializadas en testing y prototipado.

---

## ✨ Características Principales

- **Dashboard Analítico:** Panel de estadísticas rico en datos con gráficos interactivos (Donas y Barras) para medir la interacción de los usuarios y el uso de etiquetas, optimizado con *Skeleton Loaders* para una experiencia de usuario fluida.
- **Creación de Contenido:** Interfaz fluida para la creación de publicaciones (título, cuerpo y etiquetas) con manejo eficiente de captura de datos.
- **Consumo Asíncrono Avanzado:** Implementación de peticiones HTTP en paralelo utilizando `forkJoin` de **RxJS** para reducir los tiempos de carga en vistas complejas como el Dashboard.
- **UI/UX "Pixel Perfect":** Diseño responsivo utilizando técnicas modernas de CSS (como `object-fit: cover` y márgenes negativos para avatares solapados) asegurando que la interfaz se adapte perfectamente a cualquier dispositivo sin deformarse.

---

## 🛠️ Tecnologías y Herramientas Utilizadas

- **Frontend Framework:** Angular v19.0.1
- **Estilos y Layout:** Tailwind CSS (Utility-first CSS framework para un diseño rápido, limpio y responsivo)
- **Visualización de Datos:** [Chart.js](https://www.chartjs.org/) (Integrado para la renderización de métricas en el panel de control)
- **Programación Reactiva:** RxJS (Observables, `forkJoin` para peticiones simultáneas)
- **Control de Estado y Rutas:** Angular Router & Signals
- **Iconografía:** [Tabler Icons](https://tabler.io/icons) / Heroicons

---

## 🔌 APIs y Origen de Datos

Para simular toda la actividad de la red social de manera dinámica, el proyecto consume la API de **DummyJSON**. Puedes consultar la documentación y el repositorio oficial de la herramienta en los siguientes enlaces:

- **Documentación de la API:** [DummyJSON Docs](https://dummyjson.com/docs)
- **Repositorio del Proyecto API:** [GitHub - Ovi/DummyJSON](https://github.com/Ovi/DummyJSON)

### Endpoints principales consumidos:
- `/posts` y `/posts/search` - Para la carga del feed de publicaciones, paginación y búsqueda.
- `/posts/tags` - Para alimentar el mapa de tendencias y gráficos de uso.
- `/users` - Para perfiles de usuario, autenticación simulada y listado de amigos/seguidores.
- `/comments` - Para la sección de interacción y métricas de respuestas por publicación.
- `/quotes/random` - (Opcional) Para brindar frases inspiracionales aleatorias en la interfaz.

---

## 🎨 Inspiración de Diseño (UI/UX)

La interfaz de usuario y la experiencia estética están fuertemente inspiradas en conceptos profesionales de diseño de interfaces alojados en Dribbble. El layout combina un enfoque minimalista, esquinas redondeadas suaves, bordes sutiles y un sistema de color cuidadosamente elegido para comunidades modernas:

1. **Analog Photography Community Feed:** [Ver Diseño en Dribbble](https://dribbble.com/shots/21918913-Analog-photography-community-feed) (Inspiración para el feed de publicaciones, tarjetas de contenido y recortes de avatares).
2. **Social Media Concept:** [Ver Diseño en Dribbble](https://dribbble.com/shots/22588296-Social-Media-Concept) (Inspiración para la estructura de la barra lateral, dashboard, interacciones rápidas y tipografías).

---

# Link del proyecto para la visualización

Puedes crear un nuevo usuario o también iniciar sesión con a siguiente cuenta de administrador.

1. Usuario: emilys
2. Contraseña: emilyspass

Link del sitio web
https://angelogelvez.github.io/social-happiness/
