/*In your js file, declare three const variables that hold references to the input, button, and list elements.*/
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

let chaptersArray = getChapterList() || [];

/*Populate the displayed list of chapters */
chaptersArray.forEach(chapter => {
    displayList(chapter);
  });

/*Create a click event listener for the Add Chapter button using addEventListener and an anonymous function or arrow function.*/
button.addEventListener('click', () => {
    
    if (input.value !== '') { //check if the input is empty, if not, then
        displayList(input.value); //call displayList with the input.value argument,
        chaptersArray.push(input.value); //push the input.value into the chaptersArray,
        setChapterList();//update the localStorage with the new array by calling a function named setChapterList,
        input.value = '' //set the input.value to nothin
        input.focus(); //set the focus back to the input.

    }
});

 function displayList(item){       
     const li = document.createElement('li'); //create a li element
     const deleteButton = document.createElement('button');/*create a delete button*/
     li.textContent = item; /*populate the li elements textContent or innerHTML with the item*/
     deleteButton.textContent = '❌';/*populate the button textContent with a ❌*/
     deleteButton.classList.add('delete');
     li.append(deleteButton); /*append the li element with the delete button*/
     list.append(li); /*append the li element to the unordered list in your HTML*/
     deleteButton.addEventListener('click', function(){
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();   /*send the focus to the input element*/ 
    });/*add an event listener to the delete button that removes the li element when clicked*/
    console.log ('Hello World!')
}

function setChapterList (){
    localStorage.setItem('myFavoriteBOMlist', JSON.stringify(chaptersArray));
}

function getChapterList (){
    return JSON.parse(localStorage.getItem('myFavoriteBOMlist'));
}

function deleteChapter(chapter) {
    chapter =chapter.slice(0,chapter.length -1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}














