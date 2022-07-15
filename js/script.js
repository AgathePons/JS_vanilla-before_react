// APP
const app = {
  profs: [
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

  init: function() {

    // --- FORM --- //
    const form = document.createElement('form');
    const selectSocle = document.createElement('select');
    selectSocle.id = 'socle';
    const selectSpe = document.createElement('select');
    selectSpe.id = 'spe';
    // options socle
    const optionPhp = document.createElement('option');
    optionPhp.value = 'PHP';
    optionPhp.textContent = 'PHP';
    const optionJs = document.createElement('option');
    optionJs.value = 'JavaScript';
    optionJs.textContent = 'JavaScript';
    // options spé
    const optionReact = document.createElement('option');
    optionReact.value = 'React';
    optionReact.textContent = 'React';
    const optionData = document.createElement('option');
    optionData.value = 'Data';
    optionData.textContent = 'Data';
    const optionSymfony = document.createElement('option');
    optionSymfony.value = 'Symfony';
    optionSymfony.textContent = 'Symfony';
    const optionWP = document.createElement('option');
    optionWP.value = 'WordPress';
    optionWP.textContent = 'WordPress';

    selectSocle.appendChild(optionJs);
    selectSocle.appendChild(optionPhp);
    
    selectSpe.appendChild(optionReact);
    selectSpe.appendChild(optionData);
    selectSpe.appendChild(optionSymfony);
    selectSpe.appendChild(optionWP);

    form.appendChild(selectSocle);
    form.appendChild(selectSpe);

    // --- RESULT NUMBER --- //
    const resultTitle = document.createElement('h2');
    resultTitle.textContent = `${app.profs.length} profs trouvés`;

    // --- RESULT LIST --- //
    const list = document.createElement('ul');
    list.id = 'list';
    for (const prof of app.profs) {
      const listElement = document.createElement('li');
      const profName = document.createElement('h3');
      profName.textContent = prof.name;
      const profSocle = document.createElement('p');
      profSocle.textContent = prof.language;
      const profSpe = document.createElement('p');
      profSpe.textContent = prof.speciality;

      listElement.appendChild(profName);
      listElement.appendChild(profSocle);
      listElement.appendChild(profSpe);

      list.appendChild(listElement);
    }

    // --- BUILD IN APP --- //
    const appDiv = document.getElementById('app');
    appDiv.appendChild(form);
    appDiv.appendChild(resultTitle);
    appDiv.appendChild(list);
    
    // --- EVENT LISTENER --- /
    selectSocle.addEventListener('change', app.searchListSocle);
    selectSpe.addEventListener('change', app.searchListSpe);
  },

  // --- METHODS --- //
  buildList: function(profArray) {
    const list = document.getElementById('list');
    list.innerHTML = '';
    for (const prof of profArray) {
      const listElement = document.createElement('li');
      const profName = document.createElement('h3');
      profName.textContent = prof.name;
      const profSocle = document.createElement('p');
      profSocle.textContent = prof.language;
      const profSpe = document.createElement('p');
      profSpe.textContent = prof.speciality;

      listElement.appendChild(profName);
      listElement.appendChild(profSocle);
      listElement.appendChild(profSpe);

      list.appendChild(listElement);
    }
  },

  searchListSocle: function(e) {
    const valueSocle = e.target.value;
    const valueSpe = document.getElementById('spe').value;
    const list = document.getElementsByTagName('ul');
    console.log(`socle : ${valueSocle} - spe : ${valueSpe}`);
    const profFiltered = app.profs.filter( prof => prof.language === valueSocle && prof.speciality === valueSpe);
    console.log(profFiltered);
    app.buildList(profFiltered);
  },

  searchListSpe: function(e) {
    const valueSpe = e.target.value;
    const valueSocle = document.getElementById('socle').value;
    const list = document.getElementsByTagName('ul');
    console.log(`socle : ${valueSocle} - spe : ${valueSpe}`);
    const profFiltered = app.profs.filter( prof => prof.language === valueSocle && prof.speciality === valueSpe);
    console.log(profFiltered);
    app.buildList(profFiltered);
  },

};

// on initialise l'app dès que le document est prêt
document.addEventListener('DOMContentLoaded', app.init);
