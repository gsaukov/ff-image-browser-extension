document.body.style.border = "5px solid red";

var elemDiv = document.createElement('div');
elemDiv.setAttribute("id", "Pagi_N");
elemDiv.style.cssText = 'position:absolute;width:100%;height:100%;opacity:0.3;z-index:100;background:#000;';
document.body.appendChild(elemDiv);

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    let path = window.location

    if (e.keyCode == '38') {
        console.log('up arrow ' + path)
    }
    else if (e.keyCode == '40') {
        console.log('down arrow ' + path)
    }
    else if (e.keyCode == '37') {
        console.log('left arrow ' + path)
    }
    else if (e.keyCode == '39') {
        console.log('right arrow ' + path)
    }

}