const refs = {
    slider: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
};

refs.slider.addEventListener('input', (event) => {  
    refs.text.style.fontSize =  `${event.target.value}px`;
}
);