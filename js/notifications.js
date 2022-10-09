//SametAli
var notfiy;

function loadNow(opacity) {
    if (opacity <= 0) {
        displayContent();
    } else {
        notfiy.style.opacity = opacity;
        window.setTimeout(function() {
            loadNow(opacity - 0.05);
        }, 100);
    }
}

function displayContent() {
    notfiy.style.display = 'none';
    }

document.addEventListener("DOMContentLoaded", function() {
    notfiy = document.getElementById('notfiy');
loadNow(2);

setInterval(function(){
    window.location.reload(false);
   },1000000);

});