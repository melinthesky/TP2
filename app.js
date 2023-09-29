// API à utiliser pour le travail: https://randomuser.me/api/?results=5


//fetch('https://randomuser.me/api/?results=5')
//.then(response => response.json())
//.then(data => console.log(data))


fetch('https://randomuser.me/api/?results=5')
  .then(response => response.json())
  .then(data => {
    let output = ''; // Pas de balise h2

    data.results.forEach(function (element, index) {
      output += '<img src="' + element.picture.thumbnail + '" alt="Photo de profil"><br/>';
      output += 'Nom: ' + element.name.first + ' ' + element.name.last + '<br/>';
      output += 'E-mail: ' + element.email + '<br/>';

      // Ajoute un saut de ligne sauf après la dernière personne
      if (index < data.results.length - 1) {
        output += '<br/>';
      }
    });

    document.getElementById('container').innerHTML = output;
  })
  .catch(error => console.error(error));
