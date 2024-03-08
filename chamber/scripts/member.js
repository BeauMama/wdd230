
const lists = document.querySelector('#members');

async function getLinks() {
    const response = await fetch("wdd230\chamber\data\members.json");
    const data = await response.json();
    displayLinks(data.companies); 
   
  }
  
  getLinks();

  const displayLinks = (weeks) => {
    weeks.forEach((companies) => {
       
        const name = document.createElement('li');

        list.textContent = `Name ${companies.name}: ` ;
                     
       
        
            
            
                          
   
                  
       list.appendChild(name);            
       lists.appendChild(list);

    });
  }
