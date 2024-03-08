
var oLastModif = new Date(document.lastModified).toLocaleString();
document.getElementById('lastModified').innerHTML = `Last Modified ${oLastModif} `;

var copyrightYear = new Date().getFullYear();
document.getElementById('copyright').innerHTML = `&copy${copyrightYear} `;

function setLoadTime() {
    var loadTime = document.getElementById('loaddate');
    if (loadTime){
        loadTime.value = Date.now();
    }
}

/*document.getElementById("#join_page").addEventListener('submit',setLoadTime);*/
