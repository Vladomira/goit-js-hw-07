

const refs = {
    input: document.querySelector('#name-input'),
    welcome: document.querySelector('#name-output'),
};


refs.input.addEventListener('input', (event) => 
    refs.welcome.textContent = refs.input.value ? 
    refs.input.value : 'незнакомец'     
);





// refs.input.addEventListener('input', inputChange);

// function inputChange(event){
//     refs.welcome.textContent = refs.input.value ? 
//     refs.input.value : 'незнакомец'; 
     
// }

// const tech = function() {
//    if (refs.input.getAttribute('placeholder')){    
//         refs.input.removeEventListener('input', (event) => { return refs.welcome.textContent = 'нзнакомец'}) 
//    }
//    if (refs.input.getAttribute('placeholder') !== refs.input.getAttribute('placeholder')){
//     refs.input.addEventListener('input',  (event) =>  { return refs.welcome.textContent = event.currentTarget.value})
//    }
// }




// const placeholder = refs.input.getAttribute('placeholder');
// console.log(placeholder);








