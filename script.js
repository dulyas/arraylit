'use strict';

// filter 

const names = ['Alex', 'Sanya', 'MAamkamam', 'rapper'];

const shortNames = names.filter(function(name) {
    return name.length < 5;    // Возвращаем в массив шортнеймс массив с элементами из массива неймс с именами, корочем 5 символов

    
});
// map позволяет изменить каждый элемент в исходном массиве

const answers = ['Ivan', 'Meman', 'KOLYAN', '55242'];

const result = answers.map(function(name) {
    return name.toLowerCase();   // помещаем в нижний регистр все полученные данные в массиве
}) 
console.log(result); 

// every/some 

const some = [4, 'q', 'wqeq2'];
console.log(some.some(item => typeof(item) === 'number')) // проверяет есть ли одно ччсло
// либо какое-то еще условие

// every проверяет все элементы соответственно

// reduce собирает массив в одно целое, примеры
// 
//

const arr = [4, 5, 1, 3, 2, 6];
const res = arr.reduce((sum, current) => sum * current);
console.log(res);

// большой пример

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
} 

// нужно вытащить имена людей
const newArr = Object.entries(obj); // превращает объект в массив массивов 
//[['имя' : 'значение]
//['имя1', 'значение']....]
const mem = newArr.filter(item => item[1] == 'persone').map(item => item[0]);
// фильтруем по людям и потом изменяем каждый элемент оставив только имена
console.log(mem);