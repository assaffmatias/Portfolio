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
          "greeting": "Hi, my name is",
          "im": "i'm a Full Stack Developer",

          //About
          "aboutTitle": "Nice to meet you",
          "aboutP": "I'm a passionate web developer with a user-centered focus and a meticulous eye for design. I strive to turn ideas into captivating and functional web. I love to investigate, solve problems, learn from others and teach, that is why in me you will find a developer with conflict resolution skills, willing to listen to ideas and contribute all my knowledge to achieve the proposed objectives. I'm excited to continue building impactful web experiences!",

          //Skills
          "skillSpan": "Tools",

         //Works
         "development": "Web Development",
         "show": "Show project",

         //Contact
         "contactName": "Name",
         "contactEmail": "Email",
         "contactMessage": "Your Message",
         "contactSubmit": "Submit",
         "builtBy": "Built by Matias Assaff",
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
          "greeting": "Hola, mi nombre es",
          "im": "Soy un Desarrollador Full Stack",

          //About
          "aboutTitle": "Encantado de conocerte",
          "aboutP": "Soy un desarrollador web con un enfoque centrado en el usuario y un ojo meticuloso para el diseño, me esfuerzo por convertir las ideas en experiencias web cautivadoras y funcionales. Me encanta investigar, resolver problemas, aprender de los demás y enseñar, por eso en mí encontrarás un desarrollador con capacidad de resolución de conflictos, dispuesto a escuchar ideas y aportar todos mis conocimientos para lograr los objetivos propuestos. Estoy emocionado de seguir construyendo experiencias web impactantes!",

          //Skills
          "skillSpan": "Herramientas",

          //Works
          "development": "Desarrollo Web",
          "show": "Mostrar proyecto",

          //Contact
         "contactName": "Nombre",
         "contactEmail": "Correo Electrónico",
         "contactMessage": "Tu mensaje",
         "contactSubmit": "Enviar",
         "builtBy": "Desarrollado por Matias Assaff",
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