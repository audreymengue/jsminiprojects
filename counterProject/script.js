const count = document.querySelector('#count');
const lowerCount = document.querySelector('#lower-count');
const addCount = document.querySelector('#add-count');

let total = 0;


lowerCount.addEventListener('click', () => {
    total --;
    count.innerText = total;
});

addCount.addEventListener('click', ()=> {
    total ++;
    count.innerText = total;
})
