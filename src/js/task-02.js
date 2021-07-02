const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const list = document.querySelector('#ingredients');

const createItems = ingredients.map(el => {
  const item = document.createElement('li');
  item.textContent = el;
  
  return item;
});

console.log(createItems);
list.append(...createItems);







  
