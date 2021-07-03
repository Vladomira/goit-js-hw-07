

const refs = {
    input: document.querySelector('#name-input'),
    welcome: document.querySelector('#name-output'),
};


refs.input.addEventListener('input', (event) => 
    refs.welcome.textContent = refs.input.value ? 
    refs.input.value : 'незнакомец'     
);












