const button = document.getElementById('colorchange');
const div = document.getElementById('unique');
const colors = ["red", "green", "yello", "purple", "black"];

button.addEventListener('click', changeBackground);
function changeBackground() {
    const colorIndex = parseInt(Math.random()*colors.length);
    div.style.backgroundColor = colors[colorIndex];
}