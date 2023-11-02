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