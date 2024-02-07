/*In your js file, declare three const variables that hold references to the input, button, and list elements.*/
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

/*Create a click event listener for the Add Chapter button using addEventListener and an anonymous function or arrow function.*/
button.addEventListener('click', () => {
    const myItem = input.value;
    if (myItem == "") {
        alert("Must not be blank");
        return false;} 

    /*create a li elemen*/    
    const li = document.createElement('li');

    /*create a delete button*/
    const deleteButton = document.createElement('button');
    
    /*populate the li elements textContent or innerHTML with the input value*/
    li.textContent = input.value;

    /*populate the button textContent with a ❌*/
    deleteButton.textContent = '❌';

    /*append the li element with the delete button*/
    li.append(deleteButton);
    
    /*append the li element to the unordered list in your HTML*/
    list.append(li);
        
    /*add an event listener to the delete button that removes the li element when clicked*/
    deleteButton.addEventListener('click', function(){
        list.removeChild(li);
        input.focus();    
    });

    /*send the focus to the input element*/
    input.focus();
    
    /*change the input value to nothing or the empty string to clean up the interface for the user*/
    input.value = '';
});
















