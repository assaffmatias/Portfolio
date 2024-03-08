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

         //Works
         "development": "Web Development",
         "show": "Show project",

         //Contact
         "contactName": "Name",
         "contactEmail": "Email",
         "contactMessage": "Message...",
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

          //Works
          "development": "Desarrollo Web",
          "show": "Ver proyecto",

          //Contact
         "contactName": "Nombre",
         "contactEmail": "Correo Electrónico",
         "contactMessage": "Mensaje...",
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