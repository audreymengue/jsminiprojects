const tip = document.getElementById("tip");
const amount = document.getElementById("amount");
const btn = document.getElementById("btn");
const para = document.getElementById("para");
const clear = document.getElementById("clear");


btn.onclick = function () {
    const totalTip = Number(tip.value) / 100;
    para.innerHTML = `The total amount is: ${ totalTip + Number(amount.value)}`;
}

clear.onclick = function () {
    tip.value = ''
    amount.value = ''
    para.innerHTML = 'Thanks for using the app'
}