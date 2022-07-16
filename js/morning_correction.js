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
    const languageSelectElement = app.configureElement('select', formElement, { className: 'search-choices' });
    app.state.languages.forEach(language => {
      app.configureElement('option', languageSelectElement, {
        value: language,
        textContent: language,
        selected: language === 'JavaScript',
      });
    });
    // spe select + options
    const speSelectElement = app.configureElement('select', formElement, { className: 'search-choices' });
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
    app.configureElement('h2', app.containerElement, {
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
  // init
  init: function() {
    app.createFinder();
  }
};

// on initialise l'app dès que le document est prêt
document.addEventListener('DOMContentLoaded', app.init);