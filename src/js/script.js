// Function to load HTML content from a file
function loadHTMLFile(url, targetElement) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            targetElement.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

loadHTMLFile('/src/item/header.html', document.getElementById('navbar'));
loadHTMLFile('/src/item/footer.html', document.getElementById('footer'));


const appHeight = () => {
 const doc = document.documentElement
 doc.style.setProperty(‘ -- app-height’, '${window.innerHeight}px')
}
window.addEventListener(‘resize’, appHeight)
appHeight()