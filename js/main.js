
document.addEventListener("DOMContentLoaded", function () {
    const figuras = document.querySelectorAll('.figura');
    figuras.forEach(el => {
        el.addEventListener('mouseover', () => selectElement(el.id));
        el.addEventListener('mouseout', () => deselectElement(el.id));
        el.addEventListener('click', () => zoom(el.id));
    });

    document.getElementById("text-overlay").addEventListener('click',resetFrame);

    shine();

    savedLang = localStorage.getItem('lang') || 'en';
    loadLanguage(savedLang);
});

function selectElement(elementID){
    let image = document.getElementById(elementID);

    selectedImages = document.getElementById(elementID + "-img");
    selectedImages.classList.add('hovered');
}

function deselectElement(elementID){
    selectedImages = document.getElementById(elementID + "-img");
    selectedImages.classList.remove('hovered');
}

function zoom(elementID){

    const imagens = document.querySelectorAll('.interactive');

    imagens.forEach(img => {
      img.classList.toggle(elementID + "-zoom");
    });

    const figuras = document.querySelectorAll('.figura');
    figuras.forEach(fig => {
      fig.classList.toggle(elementID + "-zoom");
    });

    showTypewriterText(elementID);
}

function resetFrame(){
    clearTimeout(typewriterTimeoutId);
    document.getElementById("text-overlay").style.display = "none";

    const elementos = document.querySelectorAll('[class*="-zoom"]');
    elementos.forEach(el => {
      el.classList.forEach(classe => {
        if (classe.endsWith('-zoom')) {
          el.classList.remove(classe);
        }
      });
    });
}

function showTypewriterText(elementID){
    document.getElementById("text-overlay").style.display = "inline-block";
    let languageSet = getLanguageSet(savedLang);
    typewriter(languageSet[elementID]);
}


let typewriterTimeoutId;

//TYPEWRITER
function typewriter(textToType, elementId = "typedtext", speed = 50, scrollAt = 20) {
    const aText = textToType.split("\n");
    let iIndex = 0;
    let iTextPos = 0;
    let sContents = '';
    let iRow;

    function type() {
        sContents = '';
        iRow = Math.max(0, iIndex - scrollAt);
        const destination = document.getElementById(elementId);

        while (iRow < iIndex) {
            sContents += aText[iRow++] + '<br />';
        }

        destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";

        if (iTextPos++ === aText[iIndex].length) {
            iTextPos = 0;
            iIndex++;
            if (iIndex < aText.length) {
                typewriterTimeoutId = setTimeout(type, 500);
            }
        } else {
            typewriterTimeoutId = setTimeout(type, speed);
        }
    }

    type();
}

function shine(){
    const images = document.querySelectorAll('img.interactive');

    images.forEach((img, index) => {
        setTimeout(() => {
            img.classList.add('hovered');

            setTimeout(() => {
                img.classList.remove('hovered');
            }, 300);
        }, index * 500);
    });
}

window.addEventListener('load', () => {
    AOS.init();
});