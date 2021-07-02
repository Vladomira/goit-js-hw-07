// ======= 1  ===============
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

const searchCategories = document.querySelectorAll('.item');
console.log(`В списке ${searchCategories.length} категории.`);


// // ================ 2 ============

const title = document.querySelectorAll("h2").forEach(el => {
    console.log(`Категория: ${el.textContent}`);
    console.log(`Количество элементов: ${el.nextElementSibling.children.length}`);   
});   



// **** длинное решение
// const titleAnimal = searchCategories[0].firstElementChild.textContent;
// console.log(`Категория: ${titleAnimal}`);
// const animalQuantity = searchCategories[0].firstElementChild.nextElementSibling.children;
// console.log(` Количество элементов: ${animalQuantity.length}`);


// const titleProducts = searchCategories[1].firstElementChild.textContent;
// console.log(`Категория: ${titleProducts}`);
// const productsQuantity = searchCategories[1].firstElementChild.nextElementSibling.children;
// console.log(` Количество элементов: ${productsQuantity.length}`);

// const titleTechnologies = searchCategories[2].firstElementChild.textContent;
// console.log(`Категория: ${titleTechnologies}`);
// const techQuantity = searchCategories[2].firstElementChild.nextElementSibling.children;
// console.log(` Количество элементов: ${techQuantity.length}`);



