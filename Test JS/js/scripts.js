let arr = [177, 5, 6, 23, 9, 4, 2, 1, 210, 19, 22, 11, 2, 211, 3, 4, 20, 99, 100];
let newArr = arr.map(function (item) {
    return item * 2;
});
console.log(newArr);

function showName() {
    console.log('Vasya');
}
setTimeout(showName, 0);
console.log('Kolya');


showMessage();
function showMessage() {
    console.log('Message!')
}

showMessage();
let showMessage = function () {
    console.log('Message!')
}

'use strict'

if (2 > 1) {
    function showMessage() {
        console.log('Message!');
    }
}
showMessage();

let num = 1;
while (num <= 5) {
    console.log(num);
    num++;
}

let num = 1;
do {
    console.log(num);
    num++;
}   while (num < 6);

for (let num=1; num<6; num++) {
    console.log(num);
}

let num = 8;
while (num) {
    console.log(num);
    num--;
}

let num = 0;
while (num<3) {
    console.log(`Число: ${num}`);
    num++;
}


for (let num = 0; num<2; num++) {
    if(num == 1) break;
    for (let size = 0; size < 3; size++) {
        console.log(size);
    }
}

let userInfo = {
    name: "Vasya",
    age: 30,
    adress: {
        city: "Odessa",
        street: "Ode"
    }
}

for (let key in userInfo.adress) {
   // console.log(key);
    console.log(userInfo.adress[key]);
}

let arr = ['Ваня', 'Иштван', 'Оля',];
let newArr = arr;
newArr.push('Петя');
console.log(arr);


let users = ['Ваня', 'Иштван'];
users.push('Оля');
users[1] = 'Петя';
console.log(users);
let removed = users.splice (1, 1);
console.log(removed);
users.unshift('Маша', 'Паша');
console.log(users);


let arr = ['Ваня', 'Иштван', 'Оля',];
let removed = arr.splice (1, 1);
console.log(removed);


let str = 'Ваня, Иштван, Оля';
let arr = str.split(', ');
console.log(arr);


let arr = [9, 2, 8,];
let reduceValue = arr.reduce (function (previousValue, item, index, array) {
return item + previousValue;
}, 0);

console.log(reduceValue);


let fls = 'фрилансер';
let text = `Привет! Я ${fls}`;
console.log(text);


let text = 'фрилансер';
//console.log(text.slice(5, 6));
//console.log(text.toUpperCase());
console.log(text.includes('лан', 4));


let text = 123 + +"456";
console.log(text);


let numOne = Math.round((1.005 + Number.EPSILON)*100) / 100;
console.log(numOne);


let value = 58 + "Фрилансер";
if (isNaN(value)) {
    console.log('Результат выражения NaN');
}


let value = "135.58px";
let newValue = parseFloat("135.58px");
console.log(newValue);


console.log(Math.max(10, 58, 39, -150, 0));

console.log(Math.floor(58.858));


const userInfo = {
    name: "Vasya",
    age: 30,
    "likes js": true
    }

    console.log(userInfo["likes js"]);



let userInfo = {
    name: "Vasya",
}
userInfo.age = 30;

userInfo.name = "Lena";

delete userInfo.name;

console.log(userInfo);