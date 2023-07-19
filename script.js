//declaro mis variables
//llamo a aside texto e imagen
const txtAside = document.getElementById('control-text');
const imgAside = document.getElementById('control-imagen');

//llamo a mis botones de header
const txtBtn = document.getElementById('txt-btn');
const imgBtn = document.getElementById('img-btn');
const modeBtn = document.getElementById('modo-btn');

//llamo a los  campos para cambiar el modo
const mainContainer = document.getElementById('main-container');
const headContainer = document.getElementById('head-container');
const superContainer = document.getElementById('super-container');


//defino la función ocultar aside texto - OK -----------------
function hiddenTxtAside() {
    imgAside.classList.add("hidden");
    txtAside.classList.remove("hidden");
};

//defino la función ocultar aside imagen - OK -----------
function hiddenImgAside() {
    txtAside.classList.add("hidden");
    imgAside.classList.remove("hidden");
};

//añado el evento click a txtBtn - OK ---------------
txtBtn.addEventListener("click", () => hiddenTxtAside());
imgBtn.addEventListener("click", () => hiddenImgAside());

// cammbio modo claro oscuro - cambia el boton pero no vuelve cuando hago otro click!!!
modeBtn.addEventListener("click", changeMode);

function changeMode() {
    superContainer.classList.toggle("general-container-light");
    headContainer.classList.toggle("header-light");
    imgAside.classList.toggle("light-aside");
    txtAside.classList.toggle("light-aside");
    txtBtn.classList.toggle('btn-nav-light');
    imgBtn.classList.toggle('btn-nav-light');
    modeBtn.classList.toggle('btn-nav-light');

    if (imgAside.classList.contains("aside-dark")) {
        console.log('light')
        modeBtn.innerText = "🌙 Modo Oscuro";
    } else {
        console.log('dark')
        modeBtn.innerText = "🌞 Modo Claro";
    }
};

//-----------------CONTROL ASIDE IMAGEN ------------------------------------------------
// llammo a los campos 
const imgUrl = document.getElementById('img-url');
const memeImg = document.getElementById('img-meme');
const memeContainer = document.getElementById('meme-container');
// selector color fondo
const selectedColorImgBackground = document.getElementById('img-color-input');
const imgColorName = document.getElementById('img-color-name');
// selector estilo
const imgEfect = document.getElementById('img-efect');
// - Filtros imagen - 
const brightInput = document.getElementById('r-bright');
const opacityInput = document.getElementById('r-opacity');
const contrastInput = document.getElementById('r-contrast');
const blurInput = document.getElementById('r-blur');
const grayscaleInput = document.getElementById('r-greyscale');
const sepiaInput = document.getElementById('r-sepia');
const invertInput = document.getElementById('r-invert');

// agrego los adEventListener - llamo a la funcion

// añadir url - Ver que ocupe todo el main de fonco...
imgUrl.addEventListener('input', (e) => changeBackground(e));

// color de fondo
selectedColorImgBackground.addEventListener('input', changeImgBackgroundColor);
// estilo imagen
imgEfect.addEventListener('change', () => changeEfect());
// Filtro imagen
brightInput.addEventListener('input', (e) => filtros(e));
opacityInput.addEventListener('input', (e) => filtros(e));
contrastInput.addEventListener('input', (e) => filtros(e));
blurInput.addEventListener('input', (e) => filtros(e));
grayscaleInput.addEventListener('input', (e) => filtros(e));
sepiaInput.addEventListener('input', (e) => filtros(e));
invertInput.addEventListener('input', (e) => filtros(e));

// Armo las funciones ------------
// Agreego imagen url al container meme - OK -----------
function changeBackground(e) {
    console.log('hola')
    memeImg.style.backgroundImage = `url(${e.target.value})`;
    memeImg.style.backgroundSize = 'cover';
    memeImg.style.backgroundRepeat = 'no-repeat';
    memeImg.style.backgroundPosition = 'center';
}

// cambio color fondo imagen - OK ----------------
function changeImgBackgroundColor() {
    const selectedColorImg = selectedColorImgBackground.value
    memeImg.style.backgroundColor = selectedColorImg;
    imgColorName.innerHTML = `${selectedColorImgBackground.value}`;
}
// agregar estilo imagen - OK ------------
function changeEfect() {
    memeImg.style.backgroundBlendMode = `${imgEfect.value}`
}

// Funcion filtros imagen -- OK ----------- 
const filtros = (e) => {
    console.log(e.target.value) // OK
    memeImg.style.filter =
        `brightness(${brightInput.value})
    opacity(${opacityInput.value})
    contrast(${contrastInput.value}%)
    blur(${blurInput.value}px) 
    grayscale(${grayscaleInput.value}%)
    sepia(${sepiaInput.value}%)
    invert(${invertInput.value})`
};

// Reset filtros -- OK ---
const resetFilterBtn = document.getElementById('reset-filter');

resetFilterBtn.addEventListener('click', resetAllFilters);

function resetAllFilters(event) {
    event.preventDefault();

    brightInput.value = 1;
    opacityInput.value = 1;
    contrastInput.value = 100;
    blurInput.value = 0;
    grayscaleInput.value = 0;
    sepiaInput.value = 0;
    invertInput.value = 0;

    memeImg.style.filter = "none";
};

//---------------------------------------------------CONTROL ASIDE TEXTO ------------------------------------------------

//llamo a los campos donde escribo el textos
const txtTopElement = document.getElementById('top-txt');
const txtBottomElement = document.getElementById('botton-txt');
//llamo a los check para ocultar txt
const hideTxtTopElement = document.getElementById('hiddenTopTxt');
const hideTxtBottonElement = document.getElementById('hiddenTxtBotton');
// llamo al combo fuentes
const fontFamilyElement = document.getElementById('font-family');
//llamo al combo tamaño fuente
const fontSizeElement = document.getElementById('font-size');
//llamo a los textos en si
const previewTxtTopElement = document.getElementById('preview-txt-top');
const previewTxtBottomElement = document.getElementById('preview-txt-bottom');
// llamo a los botones de alineacion
const alignLeftBtn = document.getElementById('align-left-btn');
const alignCenterBtn = document.getElementById('align-center-btn');
const alignRightBtn = document.getElementById('align-right-btn');
// input color text
const txtColorInput = document.getElementById('txt-color-input');
// nombre del text color
const txtColorName = document.getElementById('txt-color-name');
// Cambiar el color de fondo del texto
const backgroundColorInput = document.getElementById('background-color-input');
const backgroundTopTxt = document.getElementById('container-txt-top');
const backgroundBottonTxt = document.getElementById('container-txt-botton');
//nombre del color de fondo
const backgroundColorName = document.getElementById('background-color-name');
// check fondo transparente
const transparentTxtBackground = document.getElementById('checkbox-transparent');
// llamo a los botones de contorno de texto
const outlineNoneBtn = document.getElementById('outline-none-btn');
const outlineLightBtn = document.getElementById('outline-light-btn');
const outlineDarkBtn = document.getElementById('outline-dark-btn');
// llamo a input espaciado

// llamo a input interlineado
const txtLine = document.getElementById('font-line');

//// Agrego los eventos listeners - dejo a la espera que suceda la acción
//le agrego a los campos de texto
txtTopElement.addEventListener('input', updateTopText);
txtBottomElement.addEventListener('input', updateBottomText);
//ocultar textos
hideTxtTopElement.addEventListener('change', toggleTopText);
hideTxtBottonElement.addEventListener('change', toggleBottonText);
// fuente y tamaño
fontFamilyElement.addEventListener('change', changeFontFamily);
fontSizeElement.addEventListener('input', changeFontSize);
// alineacion
alignLeftBtn.addEventListener('click', alignLeft);
alignCenterBtn.addEventListener('click', alignCenter);
alignRightBtn.addEventListener('click', alignRight);
// color texto
txtColorInput.addEventListener('input', changeTextColor);
// color fondo textos
backgroundColorInput.addEventListener('input', changeBackgroundColor);
// fondo texto transparente
transparentTxtBackground.addEventListener('input', transparentBackground);
// contorno
outlineNoneBtn.addEventListener('click', outlineNoneOn);
outlineLightBtn.addEventListener('click', outlineLightOn);
outlineDarkBtn.addEventListener('click', outlineDarkOn);
// espaciado de texto


//-------------------------Funciones para modificar los textos ---------------------------------------

//modificar texto - OK - ----------------------------------------
function updateTopText() {
    previewTxtTopElement.textContent = txtTopElement.value;
}
function updateBottomText() {
    previewTxtBottomElement.textContent = txtBottomElement.value;
}
// Ocultar/mostrar texto - OK (ver que pasa cuando oculto el de abajo no funciona bien...)
function toggleTopText() {
    previewTxtTopElement.style.display = hideTxtTopElement.checked ? 'none' : 'block';
}
function toggleBottonText() {
    previewTxtBottomElement.style.display = hideTxtBottonElement.checked ? 'none' : 'block';
}
// Cambiar la fuente - OK----------------------------------------------------
function changeFontFamily() {
    const selectedFontFamily = fontFamilyElement.value;
    previewTxtTopElement.style.fontFamily = selectedFontFamily;
    previewTxtBottomElement.style.fontFamily = selectedFontFamily;
}
// Cambiar tamaño de fuente - OK - ver de delimitar el tamaño
function changeFontSize() {
    const selectedFontSize = fontSizeElement.value + 'px';
    previewTxtTopElement.style.fontSize = selectedFontSize;
    previewTxtBottomElement.style.fontSize = selectedFontSize;
}
// alineación de texto - OK---------------------------------------------
function alignLeft() {
    previewTxtTopElement.style.textAlign = 'left';
    previewTxtBottomElement.style.textAlign = 'left';
}
function alignCenter() {
    previewTxtTopElement.style.textAlign = 'center';
    previewTxtBottomElement.style.textAlign = 'center';
}
function alignRight() {
    previewTxtTopElement.style.textAlign = 'right';
    previewTxtBottomElement.style.textAlign = 'right';
}
// cambio de color del texto - OK------------------------------------------
function changeTextColor() {
    const selectedColor = txtColorInput.value;
    previewTxtTopElement.style.color = selectedColor;
    previewTxtBottomElement.style.color = selectedColor;
    txtColorName.innerHTML = `${txtColorInput.value}`;
}
// cambio color fondo textos - OK-------------------------------------------
function changeBackgroundColor() {
    const selectedColor = backgroundColorInput.value;
    previewTxtTopElement.style.backgroundColor = selectedColor;
    previewTxtBottomElement.style.backgroundColor = selectedColor;
    backgroundColorName.innerHTML = `${backgroundColorInput.value}`;
}
// cambio dondo texto a transparente - OK----------------------------------------
function transparentBackground() {
    if (transparentTxtBackground.checked) {
        previewTxtTopElement.style.backgroundColor = 'transparent';
        previewTxtBottomElement.style.backgroundColor = 'transparent';
    } else {
        previewTxtTopElement.style.backgroundColor = backgroundColorInput.value;
        previewTxtBottomElement.style.backgroundColor = backgroundColorInput.value;
    }
}

// contorno texto - OK------------------------------------------------------
function outlineLightOn() {
    previewTxtTopElement.classList.add(`text-outline-light`);
    previewTxtBottomElement.classList.add(`text-outline-light`);
    previewTxtTopElement.classList.remove(`text-outline-dark`);
    previewTxtBottomElement.classList.remove(`text-outline-dark`);
}

function outlineDarkOn() {
    previewTxtTopElement.classList.add(`text-outline-dark`);
    previewTxtBottomElement.classList.add(`text-outline-dark`);
    previewTxtTopElement.classList.remove(`text-outline-light`);
    previewTxtBottomElement.classList.remove(`text-outline-light`);
}

function outlineNoneOn() {
    previewTxtTopElement.classList.remove(`text-outline-dark`);
    previewTxtBottomElement.classList.remove(`text-outline-dark`);
    previewTxtTopElement.classList.remove(`text-outline-light`);
    previewTxtBottomElement.classList.remove(`text-outline-light`);
}

// espaciado -------- 


// Interlineado - OK ---------------
const txtInterline = document.getElementById('font-line');

txtInterline.addEventListener('change', changeTxtInterline);

function changeTxtInterline() {
    previewTxtTopElement.style.lineHeight = `${txtInterline.value}`;
    previewTxtBottomElement.style.lineHeight = `${txtInterline.value}`;
}
//----------------- FIN CONTROL ASIDE TEXTO --------------------------------

// --------------- Descara meme ---- OK -----------------------
//llamo al contenedor de meme
const memeFull = document.getElementById('meme-container');
//llamo el boton de descarga
const downloadBtn = document.getElementById('btn-download');

// funcion download meme 
const downloadMeme = () => {
    domtoimage.toBlob(memeFull).then(function (blob) {
        window.saveAs(blob, "mi-meme-GO.png");
    });
};
// 
downloadBtn.addEventListener('click', downloadMeme);

// ------------------ F I N  FUNCIONALIDADES------------------------------------

///-------------medias querys-----

// Ocultar aside si es pequeña la pantalla ------------------
function resizeWindow() {
    console.log('hola');
    if (document.body.getBoundingClientRect().width < 900) {
        txtAside.classList.add("hidden");
        imgAside.classList.add("hidden");
    } else {
        txtAside.classList.remove("hidden");
        //   imgAside.classList.remove("hidden");
    }
}
 window.addEventListener('resize', resizeWindow)
  
// close aside imagen--
const closeBtnImg = document.getElementById('close-btn-img');

const closeImg = () => {
    console.log('imagen-out')
    imgAside.classList.add("hidden");
}

closeBtnImg.addEventListener('click', closeImg);

// close aside text
const closeBtnTxt = document.getElementById('close-btn-txt');

const closeTxt = () => {
    console.log('texto-out')
    txtAside.classList.add("hidden");
}

closeBtnTxt.addEventListener('click', closeTxt);
