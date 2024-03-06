const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch('https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json');
    const data = await response.json();
    displayProphets(data.prophets); 
  }
  
  getProphetData();

  const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
       
        
        let card = document.createElement('section');
        let fullname = document.createElement('h2');
        let portrait = document.createElement('img');
        let birthdate = document.createElement('h4');
        let placeofbirth = document.createElement('h5');
      
         
        fullname.textContent = `${prophet.name} ${prophet.lastname}`;
        birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
        placeofbirth.textContent = `Place of Birth: ${prophet.birthplace}`;

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', 'Portrait of ${prophet.name} ${prophet.lastname}');
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340')
        portrait.setAttribute('height','440')

        card.appendChild(fullname);
        card.appendChild(birthdate);
        card.appendChild(placeofbirth);
        card.appendChild(portrait);
        cards.appendChild(card);

    });
  }


