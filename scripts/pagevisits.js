const pageVisits = document.querySelector(".visits");

let numberVisits = Number(window.localStorage.getItem("numberVisits-ls")) || 0;

if(numberVisits !== 0) {
    pageVisits.textContent = numberVisits;
    } else {
        pageVisits.textContent = '0';
       
}

numberVisits++;

localStorage.setItem("numberVisits-ls",numberVisits );