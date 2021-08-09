const button = document.getElementById("onlyButton");
const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const value = document.getElementById("hex-value");
const  main = document.getElementById("second-main");


button.addEventListener('click', changeHex);

function changeHex() {
    let hex = '#';

    for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random()*hexValues.length);
        hex += hexValues[index];
    }
    value.textContent = hex;
    main.style.backgroundColor = hex;
}