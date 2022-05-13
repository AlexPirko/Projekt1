// Место для первой задачи
function firstTask() 
    let num = 5;
    while (num<11) {
        console.log(num);
        num++;   
}

// Место для второй задачи
function secondTask() {
    for ( let i=20; i>10; i--){
        if (i===13){
            break;
        }
    console.log(i)
    }       
}

// Место для третьей задачи
function thirdTask() {
    for (let i=2; i<=10; i++){
        if (i%2 != 0){
            continue;
        }
        else{
            console.log(i);
        }
    }    
}

// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }
let i=2;
do{
    i++;      
    if (i % 2 === 0) {
        continue;
    } 
    console.log(i);
}
    while (i<16);



function fourthTask() {
    // Пишем решение вот тут
    
    
}

// Место для пятой задачи

function fifthTask() {
    const arrayOfNumbers = [];

    for (let i = 5; i<=10; i++){
        arrayOfNumbers[i - 5] = i;
    }
    
    console.log(arrayOfNumbers);
    // Не трогаем
    return arrayOfNumbers;
}
