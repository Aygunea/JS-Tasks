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

//Lesson2 
//Task1
let arr = ["bir", "iki", "uc", "dord", "bes", "alti"]
//1. "alti" arraydan cixart yerine "yeddi" elave et
// arr.splice(5,1,"yeddi")
// arr.pop()
// arr.push("yeddi")
// console.log(arr);
//2. "bir" arraydan cixart yerine "sifir" elave et
// arr.splice(0,1,"sifir")
// arr.shift();
// arr.unshift("sifir")
// console.log(arr);
// //3. "uc" ve "dord" cixart yerine "on bes" elave et
// arr.splice(2,2,"on bes")
// console.log(arr);
let cumle = "There are many different people in the world";
// //1. Her bir sozu ayir
// console.log(cumle.split(" "));
// //2.Her bir herfin kicik herfle yazdir
// console.log(cumle.toLocaleLowerCase());
// //3. Her bir herfin boyuk herfle yazdir
// console.log(cumle.toLocaleUpperCase());
// //4. People sozunu animal sozu ile deyisdir
// console.log(cumle.replace("people", "animal"));
//Task3 
//Verilmis arrayde en boyuk ededi tapan funksiya yazacaqsiz
let numArr = [3, 15, 18, 30, 16];
// let max = numArr[0];
// function maxNum(params) {
//     for (let i = 1; i < params.length; i++) {
//         if (params[i] > max) {
//             max = params[i]
//         }
//     }
//     console.log(max);
// }
// maxNum(numArr);

//Task4
//Verilmis arrayde cut ededleri toplayan funksiya yazacaqsiz
// function ovenNumSum(params) {
//     let sum=params.filter(num=>num%2==0).reduce((toplam,num)=>toplam+num,0)
//     console.log(sum);    
// }
// ovenNumSum(numArr)

//Task5
//Verilmis array icinde 3 ve 5e bolunen ededlerin hasilini tapan funksiya yazacaqsiz
// function hasil(params) {
//     let hasil=params.filter(num=>num%3==0 && num%5==0).reduce((hasil,num)=>hasil*num,1)
//     console.log(hasil);    
// }
// hasil(numArr)