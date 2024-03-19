import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // inicializar react-i18next
  .init({
    resources: {
      en: {
        translation: {
          // Nav
          "home": "Home",
          "about": "About",
          "skills": "Skills",
          "works": "Works",
          "contact": "Contact",

          //Home
          "fullstack": "FULL STACK DEVELOPER",

          //About
          "aboutTitle": "Nice to meet you",
          "aboutP": "I'm a passionate web developer with a user-centered focus and a meticulous eye for design. I strive to turn ideas into captivating and functional web. I love to investigate, solve problems, learn from others and teach, that is why in me you will find a developer with conflict resolution skills, willing to listen to ideas and contribute all my knowledge to achieve the proposed objectives. I'm excited to continue building impactful web experiences!",

          //Skills
          "skillSpan": "Tools",
          "front": "Experience in HTML, CSS, JavaScript, React, Redux, learning Next.js and Typescript.",
          "back": "I have development experience with Node.js, PostgreSQL, Sequelize and Express.",
          "tools": "I have skills in tools such as Git, GitHub and the use of platforms such as Insomnia and PgAdmin.",
          "phrase": "Sometimes the best way to solve a problem is to help others.",

          //Works
          "development": "Web Development",
          "show": "Show project",

          //Contact
          "contactName": "Name",
          "contactEmail": "Email",
          "contactMessage": "Your Message",
          "contactSubmit": "Submit",
          "builtBy": "Built by Matias Assaff",

          //Views
          "webDev": "Web Development ·",
          "openProject": "Open project",
          "innovaDescription": "This application is an ecommerce in which user can register, login, search products, filter by category, sort by price, give ratings, add products to cart, make payments, recover passwords, and more.",
          "driversDescription": "A SPA that allows general and detailed information of more than 500 formula one pilots to be displayed, among the functionalities it allows filtering and ordering pilots by different variables such as name, birth date, team.",
          "rymDescription": "A SPA that consumes data from an external API, and allows displaying information about the Rick and Morty characters, among the functionalities it allows you to search, add the characters to favorites, filter and sort by gender, ascending and descending name."
        }

      },
      es: {
        translation: {
          // Nav
          "home": "Inicio",
          "about": "Sobre mí",
          "skills": "Habilidades",
          "works": "Proyectos",
          "contact": "Contacto",

          //Home
          "fullstack": "DESARROLLADOR FULL STACK",

          //About
          "aboutTitle": "Encantado de conocerte",
          "aboutP": "Soy un desarrollador web con un enfoque centrado en el usuario y un ojo meticuloso para el diseño, me esfuerzo por convertir las ideas en experiencias web cautivadoras y funcionales. Me encanta investigar, resolver problemas, aprender de los demás y enseñar, por eso en mí encontrarás un desarrollador con capacidad de resolución de conflictos, dispuesto a escuchar ideas y aportar todos mis conocimientos para lograr los objetivos propuestos. Estoy emocionado de seguir construyendo experiencias web impactantes!",

          //Skills
          "skillSpan": "Herramientas",
          "front": "Experiencia en HTML, CSS, JavaScript, React, Redux, aprendiendo Next.js y Typescript.",
          "back": "Tengo experiencia en desarrollo con Node.js, PostgreSQL, Sequelize y Express.",
          "tools": "Tengo habilidades en herramientas como Git, GitHub y el uso de plataformas como Insomnia y PgAdmin.",
          "phrase": "A veces la mejor manera de resolver un problema es ayudar a los demás.",

          //Works
          "development": "Desarrollo Web",
          "show": "Mostrar proyecto",

          //Contact
          "contactName": "Nombre",
          "contactEmail": "Correo Electrónico",
          "contactMessage": "Tu mensaje",
          "contactSubmit": "Enviar",
          "builtBy": "Desarrollado por Matias Assaff",

          //Views
          "webDev": "Desarrollo Web ·",
          "openProject": "Abrir proyecto",
          "innovaDescription": "Esta aplicación es un comercio electrónico en el que el usuario puede registrarse, iniciar sesión, buscar productos, filtrar por categoría, ordenar por precio, calificar, agregar productos al carrito, realizar pagos, recuperar contraseñas y más.",
          "driversDescription": "Una SPA que permite visualizar información general y detallada de más de 500 pilotos de fórmula uno, entre las funcionalidades permite filtrar y ordenar pilotos por diferentes variables como nombre, fecha de nacimiento, equipo.",
          "rymDescription": "Una SPA que consume datos de una API externa, y permite mostrar información sobre los personajes de Rick y Morty, entre las funcionalidades permite buscar, agregar los personajes a favoritos, filtrar y ordenar por género, nombre ascendente y descendente."
        }
      }
    },
    lng: 'en', // idioma predeterminado
    fallbackLng: 'en', // idioma de reserva
    interpolation: {
      escapeValue: false // no es necesario escapar valores
    }
  });

export default i18n;