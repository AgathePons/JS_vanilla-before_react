const app = {
  // state
  state: {
    languages: ['PHP', 'JavaScript'],
    specialities: ['WordPress', 'Data', 'Symfony', 'React'],
    selectedLanguage: 'JavaScript',
    selectedSpe: 'Data',
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
        name: 'Nat\'',
        language: 'PHP',
        speciality: 'Symfony',
      },
      {
        name: 'Chacha',
        language: 'JavaScript',
        speciality: 'Data',
      },
      {
        name: 'Tom',
        language: 'JavaScript',
        speciality: 'Symfony',
      },
      {
        name: 'Polo',
        language: 'JavaScript',
        speciality: 'Data',
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
        name: 'JB',
        language: 'JavaScript',
        speciality: 'React',
      },
      {
        name: 'Kamel',
        language: 'PHP',
        speciality: 'React',
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
  getFilteredTeachers: function() {
    return app.state.teachers.filter((teacher) => 
    teacher.speciality === app.state.selectedSpe && teacher.language === app.state.selectedLanguage
  );
  },
  // main builder
  renderFinder: function() {
    app.containerElement = document.getElementById('app');
    app.containerElement.innerHTML = '';
    app.renderForm();
    app.renderCounter();
    app.renderList();
  },
  // form builder
  renderForm: function() {
    // form
    const formElement = app.configureElement('form', app.containerElement, { className: 'search' });
    // languages select + options
    const languageSelectElement = app.configureElement('select', formElement, { className: 'search-choices', id: 'languageSelect' });
    languageSelectElement.addEventListener('change', app.handleLanguageChange);

    app.state.languages.forEach(language => {
      app.configureElement('option', languageSelectElement, {
        value: language,
        textContent: language,
        selected: language === app.state.selectedLanguage,
      });
    });
    // spe select + options
    const speSelectElement = app.configureElement('select', formElement, { className: 'search-choices', id: 'speSelect' });
    speSelectElement.addEventListener('change', app.handleSpeChange);

    app.state.specialities.forEach(speciality => {
      app.configureElement('option', speSelectElement, {
        value: speciality,
        textContent: speciality,
        selected: speciality === app.state.selectedSpe,

      });
    });
  },
  // counter builder
  renderCounter: function() {
    const filteredTeachers = app.getFilteredTeachers();
    const numberOfTeachers = filteredTeachers.length;
    app.counterElement = app.configureElement('h2', app.containerElement, {
      className: 'title',
      id: 'title',
      textContent: `${numberOfTeachers} profs trouvés`,
    });
  },
  // list builder
  renderList: function() {
    const ulElement = app.configureElement('ul', app.containerElement, {
      className: 'list',
    });
    const filteredTeachers = app.getFilteredTeachers();
    filteredTeachers.forEach(({ name, language, speciality }) => {
      const liElement = app.configureElement('li', ulElement, {
        className: `list-item`,
      });
      app.configureElement('h3', liElement, {
        textContent: name,
      });
      app.configureElement('p', liElement, {
        textContent: language,
        className: 'list-tag',
      });
      app.configureElement('p', liElement, {
        textContent: speciality,
        className: 'list-tag',

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
    app.state.selectedLanguage = newSelectedLanguage;
    app.renderFinder();
  },
  // change spe function
  handleSpeChange: function(event) {
    const newSelectedSpe = event.target.value;
    app.state.selectedSpe = newSelectedSpe;
    app.renderFinder();
  },
  // init
  init: function() {
    app.renderFinder();
  }
};

document.addEventListener('DOMContentLoaded', app.init);