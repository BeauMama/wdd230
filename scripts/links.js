const baseURL = "https://beaumama.github.io/wdd230/";

const cards = document.querySelector('#cards');

const linksURL = "https://beaumama.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch("https://beaumama.github.io/wdd230/data/links.json");
    const data = await response.json();
    displayLinks(data.lessons); 
   
  }
  
  getLinks();

  const displayLinks = (weeks) => {
    weeks.forEach((lesson) => {
       
        let card = document.createElement('div');
        let week = document.createElement('a');
        let link = document.createElement('a') 

        week.textContent = `Week ${lesson.lesson}: ` ;
        link.textContent = `${lesson.links[0].title} `;
        
        link.setAttribute('href', `${lesson.links[0].url}`)
        link.setAttribute('target', `_blank`)
       

        card.appendChild(week)
        card.appendChild(link);       
        cards.appendChild(card);

    });
  }
