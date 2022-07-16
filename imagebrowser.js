document.body.style.border = "5px solid red";

var elemDiv = document.createElement('div');
elemDiv.setAttribute("id", "Pagi_N");
elemDiv.style.cssText = 'position:absolute;width:100%;height:100%;opacity:0.3;z-index:100;background:#000;';
document.body.appendChild(elemDiv);

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    let originalLoc = new URL(window.location)
    let pref1 = originalLoc.pathname.split('/')[1]
    let pref2 = originalLoc.pathname.split('/')[2]
    let pref3 = originalLoc.pathname.split('/')[3]
    parseInt("00", 10)

    if (e.keyCode == '38') {
        console.log('up arrow ' + originalLoc)
    }
    else if (e.keyCode == '40') {
        console.log('down arrow ' + pref1)
        window.location.assign("http://localhost/static/00202/00202_001.jpeg")
    }
    else if (e.keyCode == '37') {
        let inc = incrementPrefix(pref2)
        console.log('left arrow ' + pref2 + ' ' + inc)
    }
    else if (e.keyCode == '39') {
        console.log('right arrow ' + pref3)
    }

}

function incrementPrefix(prefix) {
    let size = prefix.length;
    let val = parseInt(prefix, 10)
    return String(val + 1).padStart(size, '0')
}