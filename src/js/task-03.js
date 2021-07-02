const images = [
    {
      url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  const gallery = document.querySelector('#gallery');

  const galleryList = images.map(image => {
    const createElementOfList = document.createElement('li');
    const createImg = document.createElement('img');
    createElementOfList.append(createImg);
    createImg.alt = image.alt;
    createImg.src = image.url;


    createElementOfList.classList.add('gallery__list');
    createImg.classList.add('gallery__img');
    
    return createElementOfList;
  });

  gallery.append(...galleryList);

  // **************
  gallery.classList.add('gallery');
  