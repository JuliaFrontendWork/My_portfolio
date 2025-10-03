import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; // добавляем детектор языка

// перевод для английского и украинского
const resources = {
  en: {
    translation: {
      projects: 'Projects',
      skills: 'Skills',
      contacts: 'Contacts',
      description: 'This is a project description',
      title: "I'm junior frontend developer!",
      aboutMe: `I’m from Ukraine, the city of Zaporizhzhia. I’m well-versed in <1>HTML</1>, <3>CSS</3>, <5>SCSS</5> and responsive layout, and I have solid knowledge of <7>JavaScript</7>. I’m currently learning <9>React</9> and familiar with <11>TypeScript</11>, <13>Redux Toolkit</13>, <15>React Router</15>, <17>Axios</17>, and <19>Fetch</19>. I also have some basic experience with backend technologies, such as <21>NodeJS</21>, <23>MySQL</23>, and <25>PHP</25>. Even if I come across something new, I’m a fast learner and enjoy exploring new technologies. Right now, I’m focusing on improving my <27>React</27> and <29>TypeScript</29> skills through personal projects. I’m a 4th-year Computer Science student at Zaporizhzhia National University.`,
      greeting: 'Hi, my name is <1>Julia</1><2></2><3>a junior frontend developer</3>',
      tagline: 'with passion for learning and creating.',
      locationTitle: 'Location',
      location: 'Zaporizhzhia, Ukraine',
      emailTitle: 'Email',
      languagesTitle: 'Languages',
      languagesSkills: 'Ukrainian (native), English (B1)',
    },
  },

  uk: {
    translation: {
      projects: 'Проєкти',
      skills: 'Навички',
      contacts: 'Контакти',
      description: 'Це опис проєкту',
      title: 'Я junior frontend розробник!',
      aboutMe: `Я з України, міста Запоріжжя. Я добре розумію <1>HTML</1>, <3>CSS</3>, <5>SCSS</5> та адаптивну верстку, і маю ґрунтовні знання <7>JavaScript</7>. Зараз вивчаю <9>React</9> та знайомий з <11>TypeScript</11>, <13>Redux Toolkit</13>, <15>React Router</15>, <17>Axios</17> та <19>Fetch</19>. Також маю базовий досвід з бекенд-технологіями, такими як <21>NodeJS</21>, <23>MySQL</23> та <25>PHP</25>. Навіть якщо зустрічаю щось нове, швидко вчуся та люблю досліджувати нові технології. Наразі зосереджуюсь на покращенні навичок <27>React</27> та <29>TypeScript</29> через особисті проєкти. Я студент 4-го курсу факультету комп’ютерних наук Запорізького національного університету.`,
      greeting: 'Привіт, мене звати <1>Юлія</1><2></2><3>junior frontend розробник</3>',
      tagline: 'із захопленням до навчання та створення.',
      locationTitle: 'Місцезнаходження',
      location: 'Запоріжжя, Україна',
      emailTitle: 'Електронна пошта',
      languagesTitle: 'Мови',
      languagesSkills: 'Українська (рідна), Англійська (B1)',
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag', 'cookie', 'path', 'subdomain'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
