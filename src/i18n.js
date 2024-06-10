import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // Main
          "mainGreeting": "Hello, I'm",

          "mainSubtitle": "How can I help you?",

          "mainOptionA": "I want to turn my ideas into a website!",

          "mainOptionB": "I would like to see some of your work!",

          "mainOptionC": "Matias, who?!",

          "neverMind": "Never Mind -",

          "sayHi": "Just Say Hi",

          // About
          "aboutSubtitle": "I'm a Web Developer",

          "aboutDescription": "I spend my days (and often nights) painting the canvas of the internet with projects and lines of code, turning zeros and ones into engaging and intuitive web experiences. When I'm not working on pixels I'm usually playing soccer, meeting new people or enjoying a good coffee.",

          "yearsDev": "Years developing.",
          "fullProj": "Fulfilled projects.",
          "masterTech": "Mastered technologies.",
          "moreAbout": "More about me",
          "knowledge": "Knowledge",
          "knowledgeText": "I've worked as a team using the agile Scrum methodology where I also expanded my knowledge about Git and GitHub.",
          "goals": "Goals",
          "goalsText": "Explore new technologies, participate in challenging projects that allow me to expand my knowledge and experience.",
          "ability": "Ability",
          "abilityText": "I've the ability to learn quickly and adapt to different environments easily along with my communication skills.",
          "staff": "Staff",
          "personalText": "I like bringing ideas to life in the browser, I've a natural curiosity, and I constantly work to improve my skills.",


          //Skills
          "skillsTitle": "My Skills",
          "frontend": "I've experience developing with HTML, CSS, JavaScript, React, Redux. Learning Next.js, Typescript and Tailwind.",
          "backend": "I've experience developing with Node.js, Express, Sequelize and PostgreSQL.",
          "tools": "Some of the tools I use are Git, GitHub, Insomnia, Postman and pgAdmin.",
          "toolsTitle": "Tools",
          "inTouch": "Get in Touch",


          // Contact
          "contactTitle": "The Stage is Yours",
          "contactSubtitle": "I'm always looking to work on new projects.",
          "webDev": "Frontend / Backend - Web Developer",
          "email": "Drop an E-mail",
          "meeting": "Book a meeting",
          "resume": "View resume",

          // Work
          "webDevelopment": "Web Development",

          //tooltips
          "home": "Home",
          "portfolio": "Portfolio",
          "about": "About",
          "contact": "Contact",
          "translate": "Translate",
          "back": "Back",

          //Projects Titles
          "whatIsItAbout": "What is it about?",
          "madeWith": "Made with",
          "comeBack": "Come back",
          "view": "View",
          "visitProject": "Visit Project",

          //Projects Description
          "innovaTechDescription": "An e-commerce in which the user can register and log in, search for products by name, filter them by category and sort them by price, and it also has a pagination system for smoother navigation. The user can also add products to the cart, make purchases, rate the products and recover passwords. Finally, administrators have a Control Panel, where they can view statistics, deactivate or delete products, and block users.",

          "driversApiDescription": "A SPA that allows you to consult general and detailed information on Formula One drivers. Among the functionalities, it allows you to create new drivers and associate them with different teams, perform searches by name, filter and sort drivers by different variables such as name, date of birth and equipment.",

          "rickAndMortyDescription": "A SPA that consumes data from an external API, and allows you to display information about all the Rick and Morty characters, among the functionalities it allows you to search for cards by inserting a numerical value, add the characters to favorites, filter and sort by gender and name.",
        }

      },
      es: {
        translation: {
          // Main
          "mainGreeting": "Hola, soy",

          "mainSubtitle": "¿Cómo te puedo ayudar?",

          "mainOptionA": "Quiero convertir mis ideas en un sitio web!",

          "mainOptionB": "Me gustaría ver alguno de tus trabajos!",

          "mainOptionC": "Matias, ¿quién?",

          "neverMind": "No Importa -",

          "sayHi": "Solo Saluda",

          // About
          "aboutSubtitle": "Soy un Desarrollador Web",

          "aboutDescription": "Paso mis días (y a menudo noches) pintando el lienzo de Internet con proyectos y líneas de código, convirtiendo ceros y unos en experiencias web atractivas e intuitivas. Cuando no estoy trabajando en píxeles suelo jugar al fútbol, conocer gente nueva o disfrutar de un buen café.",

          "yearsDev": "Años desarrollando.",
          "fullProj": "Proyectos realizados.",
          "masterTech": "Tecnologías dominadas.",

          "moreAbout": "Más sobre mí",

          "knowledge": "Conocimientos",
          "knowledgeText": "Trabajé en equipo utilizando la metodología ágil Scrum en donde también amplié mis conocimientos sobre Git y GitHub",
          
          "goals": "Objetivos",
          "goalsText": "Explorar nuevas tecnologías, participar en proyectos desafiantes que me permitan ampliar mis conocimientos y experiencia.",

          "ability": "Capacidad",
          "abilityText": "Tengo capacidad para aprender rapidamente y adaptarme a diferentes entornos con facilidad junto con mi habilidad de comunicación.",

          "personalText": "Me gusta darle vida a las ideas en el navegador,  tengo una curiosidad natural, y trabajo constantemente para mejorar mis habilidades.",

          //Skills
          "skillsTitle": "Mis habilidades",
          "frontend": "Tengo experiencia desarrollando con HTML, CSS, JavaScript, React, Redux. Aprendiendo Next.js, Typescript y Tailwind.",
          "backend": "Tengo experiencia desarrolando con Node.js, Express, Sequelize and PostgreSQL.",
          "tools": "Algunas de las herramientas que uso son Git, GitHub, Insomnia, Postman y pgAdmin.",
          "toolsTitle": "Herramientas",
          "inTouch": "Contacto",


          // Contact
          "contactTitle": "El Escenario es Tuyo",
          "contactSubtitle": "Siempre estoy buscando trabajar en nuevos proyectos.",
          "webDev": "Desarrollador Web - Frontend / Backend",
          "email": "Dejar un correo",
          "meeting": "Reservar reunión",
          "resume": "Ver currículum",

          // Work
          "webDevelopment": "Desarrollo Web",

          //tooltips
          "home": "Inicio",
          "portfolio": "Portafolio",
          "about": "Sobre mí",
          "contact": "Contacto",
          "translate": "Traducir",
          "back": "Regresar",

          //Projects Titles
          "whatIsItAbout": "De qué se trata?",
          "madeWith": "Hecho con",
          "comeBack": "Regresar",
          "view": "Ver",
          "visitProject": "Visitar Proyecto",

          //Innova Tech
          "innovaTechDescription": "Un comercio electrónico en el que el usuario puede registrarse e iniciar sesión, buscar productos por nombre, filtrarlos por categoría y ordenarlos por precio, además cuenta con un sistema de paginación para una navegación más fluida. El usuario también puede añadir productos al carrito, realizar compras ,valorar los productos y recuperar contraseñas. Finalmente, los administradores tienen un Panel de control, en el que pueden ver estadísticas, desactivar o eliminar productos y bloquear usuarios.",

          "driversApiDescription": "Un SPA que permite consultar información general y detallada de los pilotos de Fórmula Uno. Entre las funcionalidades, permite crear nuevos conductores y asociarlos a diferentes equipos, realizar busquedas por nombre, filtrar y ordenar los conductores por diferentes variables como nombre, fecha de nacimiento y equipo.",

          "rickAndMortyDescription": "Un SPA que consume datos de una API externa, y permite mostrar información sobre todos los personajes de Rick y Morty, entre las funcionalidades permite buscar tarjetas insertando un valor numerico, agregar los personajes a favoritos, filtrar y ordenar por género y nombre.",
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