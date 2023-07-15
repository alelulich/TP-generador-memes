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
console.log('txtAside.classList');

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


// controles de texto
 
// alineación de texto
//llamo a los textos
const txtTop = document.getElementById('top-txt');
const txtBottom = document.getElementById('botton-txt');
//llamo a los botones de alineacion
const txtTop = document.getElementById('top-txt');


modeBtn.addEventListener("click", changeMode);

















