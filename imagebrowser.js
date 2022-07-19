// document.body.style.border = "5px solid red";
//
// var elemDiv = document.createElement('div');
// elemDiv.setAttribute("id", "Pagi_N");
// elemDiv.style.cssText = 'position:absolute;width:100%;height:100%;opacity:0.3;z-index:100;background:#000;';
// document.body.appendChild(elemDiv);

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    let originalLoc = new URL(window.location);
    let pahtSegments = originalLoc.pathname.split('/');
    let static1 = pahtSegments[1];
    let static2 = pahtSegments[2];
    let folder = pahtSegments[3];
    let file = pahtSegments[4];

    let inc = 1;
    if (e.shiftKey) {
        inc = 5;
    }
    if (e.ctrlKey) {
        inc = 10;
    }

    if (e.keyCode == '38') { //up
        folder = increment(folder, inc);
        file = incrementFileFolder(file, inc);
        originalLoc.pathname = `${static1}/${static2}/${folder}/${file}`;
        navigate(originalLoc);
    }
    else if (e.keyCode == '40') { //down
        folder = increment(folder, -inc);
        file = incrementFileFolder(file, -inc);
        originalLoc.pathname = `${static1}/${static2}/${folder}/${file}`;
        navigate(originalLoc);
    }
    else if (e.keyCode == '37') { //left
        file = incrementFileNumber(file, -inc);
        originalLoc.pathname = `${static1}/${static2}/${folder}/${file}`;
        navigate(originalLoc);
    }
    else if (e.keyCode == '39') { //right
        file = incrementFileNumber(file, inc);
        originalLoc.pathname = `${static1}/${static2}/${folder}/${file}`;
        navigate(originalLoc);
    }
    else if (e.keyCode == '13') {
        window.open(originalLoc.toString());
    }

}

function increment(number, inc = 1) {
    let size = number.length;
    let val = parseInt(number, 10);
    return String(val + inc).padStart(size, '0');
}

function incrementFileFolder(file, inc = 1) {
    return increment(getFileFolder(file), inc) + '_' + getFileNum(file) + '.' + getFileExt(file);
}

function incrementFileNumber(file, inc = 1) {
    return getFileFolder(file) + '_' + increment(getFileNum(file), inc) + '.' + getFileExt(file);
}

function getFileFolder(file) {
    return file.split("_")[0];
}

function getFileNum(file) {
    return file.split("_")[1].split(".")[0];
}

function getFileExt(file) {
    return file.split(".")[1];
}

async function navigate(loc) {
    console.log('right arrow ' + loc);
    window.location.assign(loc.toString());
}