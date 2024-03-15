function bannerClose() {
    var banner =document.getElementById('banner');
    banner.style.display = 'none';
}

function displayDays(){
    var today = new Date().getDay();
    if (today >= 1 && today <=3){
        document.getElementById('banner').style.display = 'block';
    }
}

displayDays();

