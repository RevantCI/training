//object literals

// let user = {
//     name:'Crystal',
//     age : 30,
//     email :'crystal@thenetninja.co.uk',
//     location: 'berlin',
//     blogs:[' why mac & chees rules','10 things to make with marmite']
// };
// console.log(user);
// console.log(user.name);

// //user.age =35;
// console.log(user.age);

// console.log(user['name']);
// user['name'] = 'Chun-li';
// console.log(user['name']);

// console.log(typeof user);
/*----------------------------------------------------------------*/
// const blogs = [
//     {title:'why mac & chees rules',likes:30},
//     {title:'10 things to make with marmite',likes:50}

// ];
// console.log(blogs);

// let user = {
//     name:'Crystal',
//     age : 30,
//     email :'crystal@thenetninja.co.uk',
//     location: 'berlin',
//     blogs:[{title:'why mac & chees rules',likes:30},
//     {title:'10 things to make with marmite',likes:50}
//     ],
//     login(){
//         console.log('The user logged in');
//     },
//     logout(){
//         console.log('The user Loggoed Out');
//     },
//     logBlogs(){
//         //console.log(this.blogs);
//         console.log('This user has written the following blogs:');
//         this.blogs.forEach(blog =>{
//             console.log(blog.title,blog.likes);
//         });

//     }
// };
// user.logBlogs();

/*--------------------------------------------------------------------*/

//Math object

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);


// const area = 7.7;

// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// //random numbers

// const random = Math.random();
// console.log(random);
// console.log(Math.round(random * 100));
 
/*---------------------------------------------------------*/

//primitive values

// let scoreOne = 100;
// let scoreTwo = scoreOne;

// console.log(`scoreone:${scoreOne}`,`scoreTwo:`${scoreTwo});

//reference values
// const userOne ={name:'ryu',age:30};
// const userTwo = userOne;

// console.log(userOne,userTwo);
// userTwo.age=40;
// console.log(userOne,userTwo);