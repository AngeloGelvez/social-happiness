# SocialHappiness 🚀

**SocialHappiness** es una aplicación de red social moderna desarrollada en el frontend utilizando **Angular 19** y **Tailwind CSS**. Este proyecto simula una plataforma interactiva completa (feeds, usuarios, publicaciones, comentarios e interacciones) consumiendo datos provenientes de endpoints y APIs ficticias especializadas en testing y prototipado.

---

## 🛠️ Tecnologías y Herramientas Utilizadas

- **Frontend Framework:** Angular v19.0.1
- **Estilos y Layout:** Tailwind CSS (Utility-first CSS framework para un diseño rápido y responsivo)
- **Control de Estado y Rutas:** Angular Router & Signals (reactividad moderna)
- **Iconos:** Heroicons / FontAwesome (según preferencia)

---

## 🔌 APIs y Origen de Datos

Para simular toda la actividad de la red social de manera dinámica, el proyecto consume la API de **DummyJSON**. Puedes consultar la documentación y el repositorio oficial de la herramienta en los siguientes enlaces:

- **Documentación de la API:** [DummyJSON Docs](https://dummyjson.com/docs)
- **Repositorio del Proyecto API:** [GitHub - Ovi/DummyJSON](https://github.com/Ovi/DummyJSON)

### Endpoints principales a consumir:
- `/posts` - Para la carga del feed de publicaciones, creación y visualización de contenido.
- `/users` - Para perfiles de usuario, autenticación simulada y listado de amigos/seguidores.
- `/comments` - Para la sección de comentarios en cada publicación.

---

## 🎨 Inspiración de Diseño (UI/UX)

La interfaz de usuario y la experiencia estética están fuertemente inspiradas en conceptos profesionales de diseño de interfaces alojados en Dribbble. El layout combina un enfoque minimalista y limpio con componentes visuales de comunidades modernas:

1. **Analog Photography Community Feed:** [Ver Diseño en Dribbble](https://dribbble.com/shots/21918913-Analog-photography-community-feed) (Inspiración para el feed de publicaciones, manejo de imágenes y tarjetas de contenido).
2. **Social Media Concept:** [Ver Diseño en Dribbble](https://dribbble.com/shots/22588296-Social-Media-Concept) (Inspiración para la estructura de la barra lateral, interacciones rápidas y tipografías).

---

## 🚀 Comenzando en Entorno Local

Este proyecto fue generado e inicializado con [Angular CLI](https://github.com/angular/angular-cli) versión 19.0.1.

### Servidor de Desarrollo

Para iniciar un servidor de desarrollo local, ejecuta:

## bash
ng serve