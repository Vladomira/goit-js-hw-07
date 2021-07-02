
// 0
let currentValue = document.querySelector('#value');
let value = 0;

// кнопки
const countAdd = document.querySelector('[data-action="increment"]')
.addEventListener('click', function increment (){
    value  += 1;    
    currentValue.textContent = value;    
  
    return  currentValue;
});


const countSub = document.querySelector('[data-action="decrement"]')
.addEventListener('click', function decrement (event){    
    value  -= 1;    
    currentValue.textContent = value;    
    
    return  currentValue;
});







// countSub.addEventListener('click', function decrement (event){    
//     counterValue  -= 1;        
//     console.log(counterValue);
//     return  counterValue;
// });

// countAdd.addEventListener('click', function increment (){
//       counterValue  += 1;        
//     console.log(counterValue);
//     return  counterValue;
// });