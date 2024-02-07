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

    const li = document.createElement('li');

    const deleteButton = document.createElement('button');
    
    li.textContent = input.value;

    deleteButton.textContent = '❌';

    
    li.append(deleteButton);
    

    list.append(li);
        
    deleteButton.addEventListener('click', function(){
        list.removeChild(li);
        
        input.value = '';
    });
    input.focus();
});

















