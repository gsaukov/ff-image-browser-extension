document.body.style.border = "5px solid red";

let path = window.location.pathname;

var elemDiv = document.createElement('div');
elemDiv.setAttribute("id", "Pagi_N");
elemDiv.style.cssText = 'position:absolute;width:100%;height:100%;opacity:0.3;z-index:100;background:#000;';
document.body.appendChild(elemDiv);