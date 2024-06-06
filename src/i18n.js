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

          "mainOptionA": "I want to turn my ideas into a web reality",

          "mainOptionB": "I would like to know more about your skills",

          "mainOptionC": "Matias, who?!",

          "neverMind": "Never Mind -",

          "sayHi": "Just Say Hi",

          // About
          "aboutSubtitle": "I'm a Web Developer",

          "aboutDescription": "I spend my days (and often nights) painting the canvas of the internet with projects and lines of code, turning zeros and ones into intuitive and functional web experiences. I love to investigate, solve problems, learn from others and teach, that is why in me you will find a developer with conflict resolution skills, willing to listen to ideas and contribute all my knowledge.",

          "yearsDev": "Years developing.",

          "fullProj": "Fulfilled projects.",

          "masterTech": "Mastered technologies.",

          "moreAbout": "More about me",

          "expertise": "Expertise",

          "expertiseText": "I've worked on different projects, both Frontend and Backend, experience working with Scrum, Git and GitHub.",

          "specialization": "Specialization",

          "specializationText": "After many hours of code along with my obsession with details (and CSS) I discovered my passion for Frontend.",

          "goals": "Goals",

          "goalsText": "Explore new technologies, participate in challenging projects that allow me to expand my knowledge and experience.",

          "present": "Present",

          "presentText": "Learning new technologies like Next.js and Typescript, improving my English skills and starting new projects.",


          //Skills
          "frontend": "I've experience developing with HTML, CSS, JavaScript, React, Redux. Learning Next.js, Typescript and Tailwind.",
          "backend": "I've experience developing with Node.js, Express, Sequelize and PostgreSQL.",
          "tools":"Some of the tools I use are Git, GitHub, Insomnia, Postman and pgAdmin.",
          "toolsTitle": "Tools",


          // Contact
          "contactTitle": "The Stage is Yours",

          "contactSubtitle1": "I'm always looking to collaborate on interesting projects.",

          "contactSubtitle2": "You need a hand? I have two!",

          "webDev": "Frontend / Backend - Web Developer",

          "email": "Drop an E-mail",

          "meeting": "Book a meeting",

          "resume": "View resume",

          // Work
          "workTitle": "Projects",
        }

      },
      es: {
        translation: {
          // Main
          "mainGreeting": "Hola, soy",

          "mainSubtitle": "¿Cómo te puedo ayudar?",

          "mainOptionA": "Quiero convertir mis ideas en una realidad web",

          "mainOptionB": "Me gustaría conocer más sobre tus habilidades",

          "mainOptionC": "Matias, ¿quién?",

          "neverMind": "No Importa -",

          "sayHi": "Solo Di Hola",

          // About
          "aboutSubtitle": "Soy un Desarrollador Web",

          "aboutDescription": "Paso mis días (y a menudo noches) pintando el lienzo de Internet con proyectos y líneas de código, convirtiendo ceros y unos en experiencias web intuitivas y funcionales. Me encanta investigar, resolver problemas, aprender de los demás y enseñar, por eso en mi encontrarás un desarrollador con capacidad de resolución de conflictos, dispuesto a escuchar ideas y aportar todos mis conocimientos.",

          "yearsDev": "Años desarrollando.",

          "fullProj": "Proyectos realizados.",

          "masterTech": "Tecnologías dominadas.",

          "moreAbout": "Más sobre mí",

          "expertise": "Experiencia",

          "expertiseText": "He trabajado en diferentes proyectos, tanto Frontend como Backend, experiencia trabajando con Scrum, Git y GitHub.",

          "specialization": "Especialización",

          "specializationText": "Dspués de muchas horas de código junto con mi obsesión por los detalles (y CSS) descubrí mi pasión por el Frontend.",

          "goals": "Objetivos",

          "goalsText": "Explorar nuevas tecnologías, participar en proyectos desafiantes que me permitan ampliar mis conocimientos y experiencia.",

          "present": "Actualidad",

          "presentText": "Aprendiendo nuevas tecnologías como Next.js y Typescript, mejorando mis conocimientos de ingés y comenzando nuevos proyectos.",

          //Skills
          "frontend": "Tengo experiencia desarrollando con HTML, CSS, JavaScript, React, Redux. Aprendiendo Next.js, Typescript y Tailwind.",
          "backend": "Tengo experiencia desarrolando con Node.js, Express, Sequelize and PostgreSQL.",
          "tools":"Algunas de las herramientas que uso son Git, GitHub, Insomnia, Postman y pgAdmin.",
          "toolsTitle": "Herramientas",


          // Contact
          "contactTitle": "El escenario es tuyo",

          "contactSubtitle1": "Siempre estoy buscando colaborar en proyectos interesantes.",

          "contactSubtitle2": "Necesitas una mano? Tengo dos!",

          "webDev": "Desarrollador Web - Frontend / Backend",

          "email": "Dejar un correo",

          "meeting": "Reservar reunión",

          "resume": "Ver currículum",

          // Work
          "workTitle": "Proyectos",
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