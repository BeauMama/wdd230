const baseURL = "https://beaumama.github.io/wdd230/";

const lists = document.querySelector('#learningActivities');

const linksURL = "https://beaumama.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch("https://beaumama.github.io/wdd230/data/links.json");
    const data = await response.json();
    displayLinks(data.lessons); 
   
  }
  
  getLinks();

 /* const displayLinks = (lessons) => {
    lessons.forEach((weeks) => {
       
        let card = document.createElement('div');
        let week = document.createElement('a');
        let link = document.createElement('a'); 

        week.textContent = `Week ${weeks.lesson}: ` ;
        
        card.appendChild(week);
        
        weeks.links.forEach(linkslist =>{
            link.textContent = `${linkslist.title} `;
            link.setAttribute('href', `${linkslist.url}`)
            link.setAttribute('target', `_blank`)
           
            card.appendChild(link);
            
          
        });
                  
         card.appendChild(link);
         cards.appendChild(card); 
              
       

    });
  } */


  const displayLinks = (weeks) => {
    weeks.forEach((lesson) => {
       
        const list = document.createElement('li');
        
        list.textContent = `Week ${lesson.lesson}: ` ;
                     
        lesson.links.forEach(function(week,index) {
            
            const link = document.createElement('a');
                                 
            link.textContent = `${week.title}`;
            link.setAttribute('href', `${week.url}`)
            link.setAttribute('target', `_blank`)
        
            list.appendChild(link);
            list.appendChild(document.createTextNode('|'));
                   
        });
                  
                   
       lists.appendChild(list);

    });
  }
