const inputArea = document.querySelector('#validation-input');



inputArea.addEventListener('blur', (event) =>{   
inputArea.value.length !== 6 ?
    inputArea.classList.add('invalid') : 
    inputArea.classList.replace('invalid', 'valid');
})

