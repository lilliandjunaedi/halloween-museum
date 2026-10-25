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