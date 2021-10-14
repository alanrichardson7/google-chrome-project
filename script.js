let elements = document.getElementsByTagName('*');

for (let i = 0; i < elements.length; i++) {
    let element = elements[i];
    for (let j = 0; j < element.childNodes.length; j++) {
        let node = element.childNodes[j];

        if (node.nodeType === 3) {
            let text = node.nodeValue;
            let replacedText = text.replace(/\b(?:bootcamp|boot camp|bootcamps)\b/gmi, 'CODESMITH');
            
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}

let images = document.getElementsByTagName('img');

for(let i = 0; i < images.length; i++){
    let url = chrome.runtime.getURL("https://recycledrobot.co.uk/words/content/poo/kk0lX.jpg");
    images[i].src = url;
    console.log(url);
}
