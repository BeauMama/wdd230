const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch('https://beaumama.github.io/wdd230/chamber/data/members.json');
    const data = await response.json();
    displayProphets(data.companies); 
  }
  
  getProphetData();

  const displayProphets = (companies) => {
    companies.forEach((company) => {
       
        
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let img = document.createElement('img');
        let phonenumber = document.createElement('h4');
        let addrees = document.createElement('h4');
        let url = document.createElement('a');
      
         
        name.textContent = ` ${company.name}`;
        phonenumber.textContent = `${company.phonenumber}`;
        addrees.textContent = `${company.addrees}`
        url.textContent = `${company.url}`;

        img.setAttribute('src', company.img);
        img.setAttribute('alt', 'logo of ${company.name}');
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '340')
        img.setAttribute('height','440')

        card.appendChild(name);
        card.appendChild(phonenumber);
        card.appendChild(url);
        card.appendChild(img);
        cards.appendChild(card);

    });
  }


