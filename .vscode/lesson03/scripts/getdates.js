
var oLastModif = new Date(document.lastModified).toLocaleString();
document.getElementById('lastModified').innerHTML = `Last Modified ${oLastModif} `;

var copyrightYear = new Date().getFullYear();
document.getElementById('copyright').innerHTML = `&copy${copyrightYear} `;

