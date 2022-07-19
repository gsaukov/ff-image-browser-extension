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

    if (e.keyCode == '38') { //up
        folder = increment(folder);
        file = incrementFileFolder(file);
        originalLoc.pathname = `${static1}/${static2}/${folder}/${file}`;
        navigate(originalLoc);
    }
    else if (e.keyCode == '40') { //down
        folder = decrement(folder);
        file = decrementFileFolder(file);
        originalLoc.pathname = `${static1}/${static2}/${folder}/${file}`;
        navigate(originalLoc);
    }
    else if (e.keyCode == '37') { //left
        file = decrementFileNumber(file);
        originalLoc.pathname = `${static1}/${static2}/${folder}/${file}`;
        navigate(originalLoc);
    }
    else if (e.keyCode == '39') { //right
        file = incrementFileNumber(file);
        originalLoc.pathname = `${static1}/${static2}/${folder}/${file}`;
        navigate(originalLoc);
    }
    else if (e.keyCode == '13') {
        window.open(originalLoc.toString());
    }

}

function increment(number) {
    let size = number.length;
    let val = parseInt(number, 10);
    return String(val + 1).padStart(size, '0');
}

function incrementFileFolder(file) {
    return increment(getFileFolder(file)) + '_' + getFileNum(file) + '.' + getFileExt(file);
}

function incrementFileNumber(file) {
    return getFileFolder(file) + '_' + increment(getFileNum(file)) + '.' + getFileExt(file);
}

function decrement(number) {
    let size = number.length;
    let val = parseInt(number, 10);
    return String(val - 1).padStart(size, '0');
}

function decrementFileFolder(file) {
    return decrement(getFileFolder(file)) + '_' + getFileNum(file) + '.' + getFileExt(file);
}

function decrementFileNumber(file) {
    return getFileFolder(file) + '_' + decrement(getFileNum(file)) + '.' + getFileExt(file);
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