document.body.style.border = "5px solid red";

var elemDiv = document.createElement('div');
elemDiv.setAttribute("id", "Pagi_N");
elemDiv.style.cssText = 'position:absolute;width:100%;height:100%;opacity:0.3;z-index:100;background:#000;';
document.body.appendChild(elemDiv);

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    let originalLoc = new URL(window.location);
    let pahtSegments = originalLoc.pathname.split('/');
    let static1 = pahtSegments[1];
    let static2 = pahtSegments[2];
    let folder = pahtSegments[3];
    let file = pahtSegments[4];

    if (e.keyCode == '38') {
        folder = increment(folder);
        file = incrementFileFolder(file);
        originalLoc.pathname = `${static1}/${static2}/${folder}/${file}`;
        console.log('up arrow ' + originalLoc.pathname);
        window.location.assign(originalLoc.toString());
    }
    else if (e.keyCode == '40') {
        console.log('down arrow ' + folder);
    }
    else if (e.keyCode == '37') {
        console.log('left arrow ' + originalLoc.pathname);
    }
    else if (e.keyCode == '39') {
        file = incrementFileNumber(file);
        originalLoc.pathname = `${static1}/${static2}/${folder}/${file}`;
        console.log('right arrow ' + originalLoc.pathname);
        window.location.assign(originalLoc.toString());
    }

}

function increment(number) {
    let size = number.length;
    let val = parseInt(number, 10);
    return String(val + 1).padStart(size, '0');
}

function incrementFileFolder(file) {
    let fileFolder = file.split("_")[0];
    let fileNum = file.split("_")[1].split(".")[0];
    let fileExt = file.split(".")[1];

    fileFolder = increment(fileFolder)
    return fileFolder + '_' + fileNum + '.' + fileExt;
}

function incrementFileNumber(file) {
    let fileFolder = file.split("_")[0];
    let fileNum = file.split("_")[1].split(".")[0];
    let fileExt = file.split(".")[1];

    fileNum = increment(fileNum)
    return fileFolder + '_' + fileNum + '.' + fileExt;
}