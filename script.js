function showInfo(title,text){

document.getElementById(
"popupTitle"
).innerText = title;

document.getElementById(
"popupText"
).innerText = text;

document.getElementById(
"popup"
).style.display = "block";

}

function closePopup(){

document.getElementById(
"popup"
).style.display = "none";



}





document.addEventListener("click", function () {
    const music = document.getElementById("music");

    if (music.paused) {
        music.play();
    }
}, { once: true });
