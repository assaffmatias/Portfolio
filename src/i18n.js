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
          "aboutP": "I am a passionate web developer with a user-centered focus and a meticulous eye for design. I strive to turn ideas into captivating and functional web new every day, work on projects, and creatively solve problems. I enjoy sharing my knowledge with others and learning from their experiences. I am excited to continue building impactful web experiences and am available to discuss how I can hel take you next project to the next level!",

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

          //About
          "aboutTitle": "Encantado en conocerte",
          "aboutP": "Soy un desarrollador web con un enfoque centrado en el usuario y un ojo meticuloso para el diseño, me esfuerzo por convertir las ideas en experiencias web cautivadoras y funcionales. Mi gusto por el aprendizaje continuo me impulsa a aprender algo nuevo todos los días, trabajar en proyector y resolver problemas creativamente. Disfruto compartir mis conocimientos con los demás y aprender de sus experiencias. Estoy emocionado de seguir construyendo experiencias web impactantes y estoy disponible para discutir como puedo ayudar a llevar tu próximo proyecto al siguiente nivel!",

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