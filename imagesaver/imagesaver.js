console.log("imagesaver loaded")

document.onclick = processClick;

function processClick(e) {

    e = e || window.event;

    if(e.target.tagName === "IMG" && e.altKey) {
        debugger
    }

}
