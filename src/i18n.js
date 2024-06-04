import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {

          //Nav
          "home": "Home",
          "about": "About",
          "portfolio": "Portfolio",

          //Main
          "mainSubtitle": "I make imagination a web reality.",
          "mainLink": "See more about Me",
          "hello": "Hello,",
          "iAm": "I'm",

          //About
          "aboutTitle": "about.",
          "aboutSubtitle": "I'm a Web Developer",
          "aboutDescription": "I spend my days (and often nights) painting the canvas of the internet with projects and lines of code, turning zeros and ones into intuitive and functional web experiences. When I'm not working on pixels, you'll find me jogging in the park, meeting new people, or playing soccer.",
          "learning": "(learning)",

          //portfolio
          "portfolioTitle": "portfolio.",
          "portfolioSubtitle": "Check out of my latest works",
          "portfolioDescription": "I've worked on different projects, both on the Frontend and Backend. I've experience working with Scrum and knowledge of Git and GitHub.",
          "webDevelopment": "Web Development",
          "viewGitHub": "View GitHub",
          "viewSite": "View site",

          //Projects
          "innovaTech": "This application is an ecommerce in which user can register, login, search products, filter by category, sort by price, give ratings, add products to cart, make payments, recover passwords, and more. Made with JavaScript, React, Redux, HTML, CSS, Node.JS, Express, Sequelize, Passport, PostgreSQL.",

          "formula1": "A SPA that allows you to view general and detailed information on Formula One drivers. Among the functionalities, it allows you to create new drivers, search, filter and sort drivers by different variables such as name, date of birth and team. Made with JavaScript, React, Redux, HTML, CSS, Node.JS, Express, Sequelize, PostgreSQL.",

          "rickAndMorty": "A SPA that consumes data from an external API, and allows displaying information about the Rick and Morty characters, among the functionalities it allows you to search, add the characters to favorites, filter and sort by gender and name. Made with JavaScript, React, Redux, HTML, CSS.",

        }

      },
      es: {
        translation: {

          //Nav
          "home": "Inicio",
          "about": "Sobre mí",
          "portfolio": "Portafolio",

          //Main
          "mainSubtitle": "Hago de la imaginación una realidad web.",
          "mainLink": "Ver más sobre mí",
          "hello": "Hola,",
          "iAm": "Soy",

          //About
          "aboutTitle": "sobre mí.",
          "aboutSubtitle": "Soy un Desarrollador Web",
          "aboutDescription": "Paso mis días (y a menudo noches) pintando el lienzo de internet con proyectos y líneas de código, convirtiendo ceros y unos en experiencias web intuitivas y funcionales. Cuando no estoy trabajando en píxeles, me encontrarás trotando en el parque, conociendo gente o jugando fútbol.",
          "learning": "(aprendiendo)",

          //Portfolio
          "portfolioTitle": "portafolio.",
          "portfolioSubtitle": "Mira mis últimos trabajos",
          "portfolioDescription": "He trabajado en diferentes proyectos, tanto en el Frontend como en el Backend. Tengo experiencia trabajando con Scrum y conocimientos sobre Git y GitHub.",
          "webDevelopment": "Desarrollo Web",
          "viewGitHub": "Ver GitHub",
          "viewSite": "Ver sitio",
          
          //Projects
          "innovaTech": "Esta aplicación es un comercio electrónico en el que el usuario puede registrarse, iniciar sesión, buscar productos, filtrar por categoría, ordenar por precio, calificar, agregar productos al carrito, realizar pagos, recuperar contraseñas y más. Hecho con JavaScript, React, Redux, HTML, CSS, Node.JS, Express, Sequelize, Passport, PostgreSQL.",

          "formula1": "Una SPA que permite visualizar información general y detallada de pilotos de fórmula uno, entre las funcionalidades permite crear nuevos pilotos, buscar, filtrar y ordenar pilotos por diferentes variables como nombre, fecha de nacimiento y equipo. Hecho con JavaScript, React, Redux, HTML, CSS, Node.JS, Express, Sequelize, PostgreSQL.",

          "rickAndMorty": "Una SPA que consume datos de una API externa, y permite mostrar información sobre los personajes de Rick y Morty, entre las funcionalidades permite buscar, agregar los personajes a favoritos, filtrar y ordenar por género y nombre. Hecho con JavaScript, React, Redux, HTML, CSS.",

        }
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;