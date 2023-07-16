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


//defino la función ocultar aside texto - OK
const hidenTxtAside = () => {
    imgAside.classList.add("hiden");
    txtAside.classList.remove("hiden");
}

//defino la función ocultar aside imagen - OK
const hidenImgAside = () => {
    txtAside.classList.add("hiden");
    imgAside.classList.remove("hiden");
};

//añado el evento click a txtBtn - OK
txtBtn.addEventListener("click", () => hidenTxtAside());
imgBtn.addEventListener("click", () => hidenImgAside());

// cammbio modo claro oscuro - cambia el boton pero no vuelve cuando hago otro click!!!
modeBtn.addEventListener("click", changeMode);

function changeMode() {

    if (imgAside.classList.contains("dark-aside")) {
        modeBtn.innerText = "🌞 Modo Claro";
    } else {
        modeBtn.innerText = "🌙 Modo Oscuro";
    }
}

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
// - Filtros imagen
const brightInput = document.getElementById('r-bright');
const opacityInput = document.getElementById('r-opacity');
const contrastInput = document.getElementById('r-contrast');
const blurInput = document.getElementById('r-blur');
const grayscaleInput = document.getElementById('r-greyscale');
const sepiaInput = document.getElementById('r-sepia');
const hueInput = document.getElementById('r-hue');
const saturationInput = document.getElementById('r-saturation');
const invertInput = document.getElementById('r-invert');

// agrego los adEventListener - llamo a la funcion

// añadir url - Ver que ocupe todo el main de fonco...
imgUrl.addEventListener('input', (e) => changeBackground(e));

// color de fondo
selectedColorImgBackground.addEventListener('input', changeImgBackgroundColor);
// estilo imagen
imgEfect.addEventListener('change', () => changeEfect());


// Armo las funciones ------------
// Agreego imagen url al container meme - OK
const changeBackground = (e) => {
    memeContainer.style.backgroundImage = `url(${e.target.value})`;
    memeContainer.style.backgroundSize = 'cover';
    memeContainer.style.backgroundRepeat = 'no-repeat';
    memeContainer.style.backgroundPosition = 'center';
}

// cambio color fondo imagen - OK
function changeImgBackgroundColor() {
    const selectedColorImg  = selectedColorImgBackground.value
     memeContainer.style.backgroundColor = selectedColorImg;
     imgColorName.innerHTML = `${selectedColorImgBackground.value}`;
}
// agregar estilo imagen - OK
function changeEfect() {
    memeContainer.style.backgroundBlendMode = `${imgEfect.value}`
}


// Filtro imagen
brightInput.addEventListener('input', (e) => filtros(e));
opacityInput.addEventListener('input', (e) => filtros(e));
contrastInput.addEventListener('input', (e) => filtros(e));
blurInput.addEventListener('input', (e) => filtros(e));
grayscaleInput.addEventListener('input', (e) => filtros(e));
sepiaInput.addEventListener('input', (e) => filtros(e));
hueInput.addEventListener('input', (e) => filtros(e));
saturationInput.addEventListener('input', (e) => filtros(e));
invertInput.addEventListener('input', (e) => filtros(e));

// filtros imagen
const filtros = (e) => {
    console.log(e.target.value) // OK
    memeContainer.style.filter = `brightness(${brightInput.value}) opacity(${opacityInput.value}) contrast(${contrastInput.value}) blur(${blurInput.value}) grayscale(${grayscaleInput.value}) sepia(${sepiaInput.value}) hue-rotate(${hueInput.value}) saturate(${saturationInput.value}) invert(${invertInput.value})`;
 };

//-----------------CONTROL ASIDE TEXTO ------------------------------------------------

//llamo a los campos donde escribo el textos
const txtTopElement = document.getElementById('top-txt');
const txtBottomElement = document.getElementById('botton-txt');
//llamo a los check para ocultar txt
const hideTxtTopElement = document.getElementById('hidenTopTxt');
const hideTxtBottonElement = document.getElementById('hidenTxtBotton');
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
    backgroundTopTxt.style.display = hideTxtTopElement.checked ? 'none' : 'block';
}
function toggleBottonText() {
    backgroundBottonTxt.style.display = hideTxtBottonElement.checked ? 'none' : 'block';
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
    backgroundTopTxt.style.backgroundColor = selectedColor;
    backgroundBottonTxt.style.backgroundColor = selectedColor;
    backgroundColorName.innerHTML = `${backgroundColorInput.value}`;
}
// cambio dondo texto a transparente - OK----------------------------------------
function transparentBackground() {
    if (transparentTxtBackground.checked) {
        backgroundTopTxt.style.backgroundColor = 'transparent';
        backgroundBottonTxt.style.backgroundColor = 'transparent';
    } else {
        backgroundTopTxt.style.backgroundColor = backgroundColorInput.value;
        backgroundBottonTxt.style.backgroundColor = backgroundColorInput.value;
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


// Interlineado
const txtInterline = document.getElementById('font-line');

txtInterline.addEventListener('change', changeTxtInterline);

function changeTxtInterline() {
    previewTxtTopElement.style.lineHeight = `${txtInterline.value}`;
    previewTxtBottomElement.style.lineHeight = `${txtInterline.value}`;
}
//----------------- FIN CONTROL ASIDE TEXTO --------------------------------