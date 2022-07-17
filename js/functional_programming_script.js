// APP
const app = {
  // state
  state: {
    languages: ['PHP', 'JavaScript'],
    specialities: ['WordPress', 'Data', 'Symfony', 'React'],
    teachers: [
      {
        name: 'Loris',
        language: 'PHP',
        speciality: 'WordPress',
      },
      {
        name: 'Noé',
        language: 'JavaScript',
        speciality: 'WordPress',
      },
      {
        name: 'Jean-Michèle',
        language: 'PHP',
        speciality: 'Data',
      },
      {
        name: 'Ben',
        language: 'JavaScript',
        speciality: 'Symfony',
      },
      {
        name: 'Jimmy',
        language: 'PHP',
        speciality: 'WordPress',
      },
      {
        name: 'Jean',
        language: 'JavaScript',
        speciality: 'Data',
      },
      {
        name: 'Jean-Christophe',
        language: 'PHP',
        speciality: 'Symfony',
      },
      {
        name: 'Jean-Philippe',
        language: 'PHP',
        speciality: 'Symfony',
      },
      {
        name: 'Julien',
        language: 'PHP',
        speciality: 'React',
      },
      {
        name: 'Vincent',
        language: 'JavaScript',
        speciality: 'React',
      },
      {
        name: 'Tony',
        language: 'JavaScript',
        speciality: 'React',
      },
    ],
  },
  // main builder
  createFinder: function() {
    app.containerElement = document.getElementById('app');
    app.createForm();
    app.createCounter();
    app.createList();
  },
  // form builder
  createForm: function() {
    // form
    const formElement = app.configureElement('form', app.containerElement, { className: 'search' });
    // languages select + options
    const languageSelectElement = app.configureElement('select', formElement, { className: 'search-choices', id: 'languageSelect' });
    languageSelectElement.addEventListener('change', app.handleLanguageChange);

    app.state.languages.forEach(language => {
      app.configureElement('option', languageSelectElement, {
        value: language,
        textContent: language,
        selected: language === 'JavaScript',
      });
    });
    // spe select + options
    const speSelectElement = app.configureElement('select', formElement, { className: 'search-choices', id: 'speSelect' });
    speSelectElement.addEventListener('change', app.handleSpeChange);

    app.state.specialities.forEach(speciality => {
      app.configureElement('option', speSelectElement, {
        value: speciality,
        textContent: speciality,
        selected: speciality === 'React',

      });
    });
  },
  // counter builder
  createCounter: function() {
    const numberOfTeachers = 2;
    app.counterElement = app.configureElement('h2', app.containerElement, {
      className: 'title',
      id: 'title',
      textContent: `${numberOfTeachers} profs trouvés`,
    });
  },
  // list builder
  createList: function() {
    const ulElement = app.configureElement('ul', app.containerElement, {
      className: 'list',
    });
    app.state.teachers.forEach(({ name, language, speciality }) => {
      let extraClass;
      if (language === 'JavaScript' && speciality === 'React') {
        extraClass = '';
      } else {
        extraClass = 'hidden';
      }
      const liElement = app.configureElement('li', ulElement, {
        className: `list-item ${extraClass}`,
      });
      app.configureElement('h3', liElement, {
        textContent: name,
      });
      app.configureElement('p', liElement, {
        textContent: language,
        className: 'list-tag, list-tag--language',
      });
      app.configureElement('p', liElement, {
        textContent: speciality,
        className: 'list-tag, list-tag--speciality',

      })
    })
  },
  // Element builder
  configureElement: function(tag, parent, attributes) {
    const element = document.createElement(tag);
    for (const key in attributes) {
      element[key] = attributes[key];
    }
    parent.appendChild(element);
    return element;
  },
  // change language function
  handleLanguageChange: function(event) {
    const newSelectedLanguage = event.target.value;
    const teacherElements = document.querySelectorAll('.list-item');
    const selectedSpe = document.getElementById('speSelect').value;
    let counter = 0;

    teacherElements.forEach((liElement) => {
      const teacherLanguage = liElement.querySelector('.list-tag--language').textContent;
      const teacherSpe = liElement.querySelector('.list-tag--speciality').textContent;

      if (teacherLanguage === newSelectedLanguage && teacherSpe === selectedSpe) {
        liElement.classList.remove('hidden');
        counter ++;
      } else {
        liElement.classList.add('hidden');
      }
    });
    app.counterElement.textContent = `${counter} profs trouvés`
  },
  // change spe function
  handleSpeChange: function(event) {
    const newSelectedSpe = event.target.value;
    const teacherElements = document.querySelectorAll('.list-item');
    const selectedLanguage = document.getElementById('languageSelect').value;
    let counter = 0;

    teacherElements.forEach((liElement) => {
      const teacherLanguage = liElement.querySelector('.list-tag--language').textContent;
      const teacherSpe = liElement.querySelector('.list-tag--speciality').textContent;

      if (teacherSpe === newSelectedSpe && teacherLanguage === selectedLanguage ) {
        liElement.classList.remove('hidden');
        counter ++;
      } else {
        liElement.classList.add('hidden');
      }
    });
    app.counterElement.textContent = `${counter} profs trouvés`
  },
  // init
  init: function() {
    app.createFinder();
  }
};

// on initialise l'app dès que le document est prêt
document.addEventListener('DOMContentLoaded', app.init);