//function declaration

// function greet(){
//     console.log('Hello there');
// }
// greet();

//function expression

// const speak = function(){
//     console.log('Good day');

// };
// speak();


//argument and parameters

// const speak = function(name){
//     console.log(`Good day  ${name}`);

// };
// speak('Mario');

// const speak = function(name="Luigi",time ='night'){
//     console.log(`Good ${time} ${name}`);

// };
// speak('Mario');

//Returning values

// const speak = function(name='Luigi',time='Morning'){
//     console.log(`Good ${time} ${name}`);
// };
// speak();

// const calcArea = function(radius){
//     return 3.14 * radius ** 2;

// };
// const area = calcArea(5);
// console.log(area);

//Regular Functions

// const calcArea = function(radius){
//     return 3.14*radius**2;
// };

//arrow function

// const calcArea = radius =>{
//     return 3.14*radius**2;
// };

// const area = calcArea(5);
// console.log('Area is :',area);

// const calcArea = radius => 3.14*radius**2;
// const area = calcArea(10);
// console.log('Area is :',area);

//Practice Functions
// const greet = () => 'Hello World';
// const result = greet();
// console.log(result);

// const bill = function(products,tax){
//     let total = 0;
//     for(let i= 0;i<products.length;i++){
//         total += products[i]+products[i]*tax;
//     }
//     return total;
// }
// console.log(bill([10,15,30],0.2));

//arrow function
// const bill = (products,tax)=> {
//     let total = 0;
//     for(let i= 0;i<products.length;i++){
//         total += products[i]+products[i]*tax;
//     }
//     return total;
// };
// console.log(bill([10,15,30],0.2));


// const name='shaun';

// //functions
// const greet = () => 'Hello';
// let resultOne = greet();
// console.log(resultOne);

// //Methods


// let resultTwo  = name.toUpperCase();
// console.log(resultTwo);

//callbacks & foreach

// const myFunc = (callbackFunc) => {
//     //do something
//     let value = 50;
//     callbackFunc(value);
// };

// myFunc(value =>{
//     //do something
//     console.log(value);
// });

//let people =['Mario','Luigi','Ryu','Shaun','Chun-Li'];

// people.forEach(function(person){
//     console.log(person);
// });

// people.forEach((person,index) =>{
//     console.log(index,person);
// });

// const logPerson = (person,index) =>{
//     console.log(`${index} - Hello ${person}`);

// };
// people.forEach(logPerson);

//get a reference to the 'ul'

// const ul = document.querySelector('.people');

// const people = ['Mario', 'Luigi', 'Ryu', 'Shaun','Chun-Li'];
// let html =``;
// people.forEach(function(person){
//     //Create HTML template
//     html  +=`<li style  = "color :purple">${person}</li>`

// });
// console.log(html);
// ul.innerHTML=html;
