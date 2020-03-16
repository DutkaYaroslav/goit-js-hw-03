// const message = 'this is very long day!!!!';
// console.log(countLettrs(message))

//     ===
//     === === === === === ===

// const hotel = {
//     sasha: 5,
//     Masha: 100,
//     Vasa: 800,
//     Nasha: 200,
//     Pasha: 300,
// };

// function calcBest(obj) {
//     let superKey;
//     let bigestKey = 0;
//     for (const key in hotel) {
//         if (hotel[key] > bigestKey) {
//             superKey = key

//             bigestKey = hotel[key]
//         };
//     }

//     return superKey + ': ' + bigestKey
// }

// console.log(calcBest(hotel));


// const message = 'this is Alen!!!'

// function rrr(mess) {

//     const rezultObject = {};

//     for (const me of mess) {
//         if (rezultObject[me]) {
//             rezultObject[me] = rezultObject[me] + 1;

//         } else {
//             rezultObject[me] = 1;
//         }
//     }

//     return rezultObject;

// }

// console.table(rrr(message));


// {
//     t: 1,    
//     h: 2,
//     i: 2,
// }



// Написати ф - ю яка знаходить в масиві число яке найблище знаходиться до нуля і повертає його.Якщо таких чисел 2(тобто 1 і - 1) тоді повертати додатнє

// function closestToZero(arr) {
//     let minValue = Number.MAX_VALUE;
//     let sIndex = -1;

//     for (let i = 0; i < arr.length; i++) {
//         const cM = Math.abs(arr[i]);
//         if (cM < minValue) {
//             minValue = cM;
//             sIndex = i;
//         }
//     }


//     return arr[sIndex] < 0 && arr.includes(Math.abs(arr[sIndex])) ? Math.abs(arr[sIndex]) : arr[sIndex];
// }


// console.log(closestToZero([-5, -3, 1, 2, 3, 5])) // 1
// console.log(closestToZero([-2, 3, 5, 10])) // -2
// console.log(closestToZero([-7, -5, -3, 3, 5, 8])) //3