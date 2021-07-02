// код Репеты
// // const curentValue = document.querySelector('#value').textContent;
// // let counterValue = curentValue;



// const CounterPlugin = function ({
//      rootSelector, initialValue = 0, step = 1} = {}){
    
//     this._value = initialValue;
//     this._step = step;

//     this.refs = this._getRefs(rootSelector);

//     this._bindEvents();
// };

// // ссылка на каунтер
// CounterPlugin.prototype._getRefs = function(rootSelector){
//     const refs = {};
//     refs.counter = document.querySelector(rootSelector);
//     refs.incrementBtn = document.querySelector('[data-action= "increment"]');
//     refs.decrementBtn = document.querySelector('[data-action=decrement]');
//     refs.value = refs.counter.querySelector('#value');

//     return refs;
// };

// CounterPlugin.prototype.changeValue = function(){
//     this._getRefs.value.textContent = this._value;
// }

// CounterPlugin.prototype._bindEvents = function(){
//     this._getRefs.incrementBtn.addEventListener('click', () => {
//         this.increment();
//         this.changeValue();
//     });
//     this._getRefs.decrementBtn.addEventListener('click', () => {
//         this.decrement();
//         this.changeValue();
//     });
// }


// CounterPlugin.prototype.increment = function increment() { 
//      this_.value += this._step; 
// };

// CounterPlugin.prototype.decrement = function decrement() { 
//     this._value -= this._step; 
// };

// const count = new CounterPlugin({rootSelector: '#counter', step: 1});
