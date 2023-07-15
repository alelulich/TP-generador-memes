//declaro mis variables
//llamo a aside texto e imagen
const txtAside = document.getElementById('control-text');
const imgAside = document.getElementById('control-imagen');
const imgUrl = document.getElementById('img-url');
const memeImg = document.getElementById('img-meme');

//llamo a mis botones de header
const txtBtn = document.getElementById('txt-btn');
const imgBtn = document.getElementById('img-btn');
const modeBtn = document.getElementById('modo-btn');

//llamo a los  campos para cambiar el modo
const mainContainer = document.getElementById('main-container');
const headContainer = document.getElementById('head-container');


//defino la función ocultar aside texto - OK
function hidenTxtAside() {
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

    if(imgAside.classList.contains("dark-aside")) {
        modeBtn.innerText = "🌞 Modo Claro";
    } else{
        modeBtn.innerText = "🌙 Modo Oscuro";
    }
}

// controles de imagen
// añadir url - OK
imgUrl.addEventListener('input', (e) => changeBackground(e));
const changeBackground = (e) => {
    console.log(e.target.value)
    memeImg.style.backgroundImage = `url(${e.target.value})`
}


///////// controles de texto  /////////////////////////////////////////////

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

///Funciones para modificar los textos

 //modificar texto - OK - establecer un limite de caracteres
 function updateTopText() {
    previewTxtTopElement .textContent = txtTopElement.value;
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
// Cambiar la fuente - OK
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
// alineación de texto - OK
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
// cambio de color del texto - OK
  function changeTextColor() {
    const selectedColor = txtColorInput.value;
    previewTxtTopElement.style.color = selectedColor;
    previewTxtBottomElement.style.color = selectedColor;
  }


















