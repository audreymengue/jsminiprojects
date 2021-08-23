const form = document.querySelector('.message-form');

form.addEventListener('submit', function(e) {

    e.preventDefault()

    const text = document.querySelector('#input');
    const lastText = document.querySelector(".last-message");
    const veryLastMessage = document.querySelector('.very-last-message');


    
    if (text.value === '') {
        lastText.classList.add('show')
        setTimeout(function() {
            lastText.classList.remove('show')
        }, 2000);

    } else {
        veryLastMessage = text.value;
        text.value = '';
    }
})