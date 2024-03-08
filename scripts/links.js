const baseURL = "https://beaumama.github.io/wdd230/";

const lists = document.querySelector('#learningActivities');

const linksURL = "https://beaumama.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch("https://beaumama.github.io/wdd230/data/links.json");
    const data = await response.json();
    displayLinks(data.lessons); 
   
  }
  
  getLinks();

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
        
            if (index < lesson.links.length -1 && list.childElementCount > 0) {
                var space = document.createTextNode('|');
                list.appendChild(space);
            }
            
                          
        });
                  
                   
       lists.appendChild(list);

    });
  }
