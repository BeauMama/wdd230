const baseURL = "https://beaumama.github.io/wdd230/";

const cards = document.querySelector('#cards');

const linksURL = "https://beaumama.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch("https://beaumama.github.io/wdd230/data/links.json");
    const data = await response.json();
    displayLinks(data.links); 
   
  }
  
  getLinks();

  const displayLinks = (weeks) => {
    weeks.forEach((week) => {
       
        let card = document.createElement('section');
        let lesson = document.createElement('li');
        let url = document.createElement('a');
        let title = document.createElement('p');      
        
        lesson.textContent = `Week ${week.lesson} :`;
        url.textContent = ` href = ${week.links.url}`;
        title.textContent = `${week.links.title}`;

        card.appendChild(week);
        card.appendChild(url);
        card.appendChild(title);
        cards.appendChild(card);

    });
  }
