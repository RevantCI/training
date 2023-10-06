//for loops

/*for(let i=0;i<5;i++)
{
    console.log('in loop',i);
}
console.log('loop finished');*/


/*const names =['shaun','mario','luigi'];
for(i = 0;i<names.length;i++){
    console.log(names[i]);

    let html =`<div>${names[i]}</div>`;
    console.log(html);
}*/

//while loops
  //let i=0;

//while(i<5){
   // console.log('in loops',i);
   // i++;
//}

/*const names =['shaun','mario','luigi'];

let i=0;
while(i<names.length[i]){
    console.log(names[i]);
    i++;
}*/

//do while loops

/*let i = 5;
do{
    console.log('val of i is:',i);
    i++;

}
while(i < 5);*/

//if statement

/*const age = 20;

if(age >20){
    console.log('you are over 20yrs old');
}*/


// else if statement

// const password = 'p@ss';

// if(password.length >= 12){
//     console.log('the password is mighty strong');

// }

// if(password.length >= 8){
//     console.log('the password is long enough');

// }
// else{
//     console.log('password is not long enough');
// }

//logical operator OR || and AND &&

// const password = 'p@ss';

// if(password.length >= 12 && password.includes('@')){
//     console.log('the password is mighty strong');

// }

// if(password.length >= 8 || password.includes('@')){
//     console.log('the password is long enough');

// }
// else{
//     console.log('password is not long enough');
// }

//Logical NOT (!)

// let user = false;
// if(user){

// }

// console.log(true);
// console.log(false);

//break and continue

// const scores =[50,25,0,30,100,20,10];
// for(let i =0;i < scores.length;i++){
//     if(scores [i] === 0){
//         continue;
//     }
//     console.log('Your score:' ,scores[i]);

// if(scores[i] === 100){
//     console.log('Congrats you got the top score!');
//     break;
// }
// }


//switch statements

// const grade ='D';
// switch(grade){
//     case 'A':
//         console.log('you got an A');
//         break;
//     case 'B':
//         console.log('you got an B');
//         break;
//     case 'C':
//         console.log('you got an C');
//         break;
//     case 'D':
//         console.log('you got an D');
//         break;
//     case 'E':
//         console.log('you got an E');
//         break;
//     default:
//         console.log('Not a valid grade');   
// }

//variables and block scope

// let age = 30;
// if(true){
//     let age = 40;
//     let name  = 'shaun';
//     console.log('Inside 1st code block',age,name);
//     if(true){
//         let age = 50;
//         console.log('Inside 2 nd bloc:',age);
//     }

// }
// console.log('Outside code block',age,name);