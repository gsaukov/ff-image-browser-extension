//https://stackoverflow.com/questions/42169569/javascript-download-an-on-the-fly-generated-blob-file-into-specific-folder

console.log("imagesaver loaded")

document.onclick = processClick;

function processClick(e) {

    e = e || window.event;

    if(e.target.tagName === "IMG" && e.altKey) {
        download(e.target.src)
    }

}

async function download(url) {
    const a = document.createElement("a");
    a.href = await toDataURL(url);
    a.download = "myImage.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function toDataURL(url) {
    return fetch(url).then((response) => {
        return response.blob();
    }).then(blob => {
        return URL.createObjectURL(blob);
    });
}