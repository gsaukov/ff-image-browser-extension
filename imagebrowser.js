document.body.style.border = "5px solid red";

var elemDiv = document.createElement('div');
elemDiv.setAttribute("id", "Pagi_N");
elemDiv.style.cssText = 'position:absolute;width:100%;height:100%;opacity:0.3;z-index:100;background:#000;';
document.body.appendChild(elemDiv);

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    let loc = new URL(window.location)
    let pref1 = loc.pathname.split('/')[1]
    let pref2 = loc.pathname.split('/')[2]
    let pref3 = loc.pathname.split('/')[3]
    parseInt("00", 10)

    if (e.keyCode == '38') {
        console.log('up arrow ' + loc)
    }
    else if (e.keyCode == '40') {
        console.log('down arrow ' + pref1)
    }
    else if (e.keyCode == '37') {
        console.log('left arrow ' + pref2)
    }
    else if (e.keyCode == '39') {
        console.log('right arrow ' + pref3)
    }

}