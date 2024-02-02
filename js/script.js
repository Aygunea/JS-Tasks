// Task1
// let number = 10;
// let sum = 0;
// for (i = 1; i <= number/2; i++) {
//     if (number % i == 0) {
//         sum += i
//     }
// }
// if(sum==number){
//     console.log("mwkemmel");
// }else{
//     console.log("mwkemmel deyil");
// }


// Task2
// let oven = 0;
// let sum = 0;
// for (j = 2; j < 100; j += 2) {
//     oven += j
// }

// for (i = 1; i <= oven / 2; i++) {
//     if (number % i == 0) {
//         sum += i
//     }
// }
// if (sum == oven) {
//     console.log("mwkemmel");
// } else {
//     console.log("mwkemmel deyil");
// }

// Task3
// let number = 20;//7 ve 14
// if (number % 7 != 0) {
//     if (number % 7 > 3.5) {
//         number += 7 - (number % 7)
//     }
//     else {
//         number = number - (number % 7)
//     }
//     console.log(number);
// }

//Task4
// let arr = [45, 23, 56, 78];
// let i = 56;
// count = 0;
// for (i = 0; i < arr.length; i++) {
//     if (arr[i] == i) {
//         count++;
//         console.log(i);
//         break;
//     }
// }

// if (count == 0) {
//     console.log("bele eded yoxdur");
// }

//Task5
// let number = 153;
// let iStr = number.toString();
// let kub = 0;
// for (i = 0; i < iStr.length; i++) {
//     let i = parseInt(iStr[i]);
//     kub += i * i * i;
// }
// if (number == kub) {
//     console.log("amstrong ededdir");
// } else {
//     console.log("amstrong eded deyil");
// }

//Task6
// for (let i = 1; i*i < 1000; i++) {
//     if (i * i >= 10 && i * i <= 1000) {
//         console.log(i * i);
//     }
// }

// Task7
// let tek=0;
// let cut=0;
// for (let i = 1; i < 500; i++) {
//     if (i%2==0) {
//         cut+=i
//     }else{
//         tek+=i
//     }
// }
// if(tek-cut>0){
//     console.log("musbet");
// }else{
//     console.log("menfi");
// }

//Task8 ilk 10 Fibonacci ededi tapmaq 
// let arr = [0, 1]
// for (let i = 2; i < 10; i++) {
//     arr[i] = arr[i - 1] + arr[i - 2];
// }
// console.log(arr);

// Task9 Multitable Table
// for (let i = 1; i <= 10; i++) {
//     for (let k = 1; k <= 10; k++) {
//         console.log(i+"*"+k +"=" + (i * k));
//     }
//     console.log("-------------------------------------------------------------------------");

// }