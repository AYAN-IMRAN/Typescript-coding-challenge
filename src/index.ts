
// @ts-ignore

// function sum(a: number, b: string):any{
//     // Function body to calculate the sum
//     return a + b;
//   }
//   console.log(sum(5,"ayan"))



// day 3 coding

// var  sum2:string = 1;

// const str1: string = "Ayan";
// const str2: string = "Ahmed";

// const areEqual: boolean = (str1 == str2) ;

// console.log(areEqual);
// day 3 coding end





// Day 4 coding

// const longtext:string = "hi Ayan what is your work"
// const upparcase:string = longtext.toUpperCase() 
// const shorttext:string = longtext.toUpperCase().substring(0,12);
// console.log(shorttext)



// Day 4 coding





// const product: string = "perfeam";
// const price: number = 3400;

// console.log(`The product ${product} is priced at ${price} dollars.`)

// Day 5 coding
// function in typescript

// function company(name:string , roll:number){
// console.log(`welcome ${name} your serial number is ${roll}`)
// }
// company("Ayan" ,1)


// fat arrow function

// const  company = (name:string , roll:number) =>{
//     console.log(`welcome ${name} your serial number is ${roll}`)
//     }
//     company("Ayan" ,1)

// use return not console.log

// const  company = (name:string , roll:number):string =>{
//     return `welcome ${name} your serial number is ${roll}`
//     }
// const mygreat = company("Ayan" ,1)
// console.log(mygreat)

// const greet3 = (name:string ,id:number):string =>{
// return `welcome ${name} your number is ${id}`
// }
// Day 5 coding




// Day 6 coding

// optional parameter
// const greet3 = (name:string ,id?:number):string =>{
//     if(id){
//     return `welcome ${name} your number is ${id}`
// }else{
//     return `welcome ${name}`
// }
// }
// greet3("Ayan" ,5)   
// const member =    greet3("Ayan")
// const member2 =    greet3("Ayan",5)
// console.log(member)
// console.log(member2)

// Day 6 coding



// Day 7 coding
// interface User {
//     name: string;
//     age: number;
// }

// function getUserInput(): User {
//     let name: string | null = "ali"
//     let ageStr: string | null = "17"
//     let age: number = Number(ageStr);

//     if (name && !isNaN(age)) {
//         return { name, age };
//     } else {
//         throw new Error('Invalid input');
//     }
// }
// getUserInput()

// Day 7 coding

// Day 8 coding
// Function calculateAverage which accepts array of numbers in argument  is:

// const calculateAverage = (myarr: number[]) => {
//    const sum =  myarr.reduce((accumulator: number, currentVal: number) =>  accumulator + currentVal);
//    return sum/(myarr.length)
// }

// const average = calculateAverage([6, 8, 11, 10, 15, 12]);
// console.log("Average of numbers :", average); 



// output :  Average of numbers : 10.333333333333334

// day 9 code 

// const num:number[] = [1, 2,3 ,4,5]
// console.log(num[3])

// const cities:string[] = ["karachi", "lahore","islamabad","peshawar"]
// console.log(cities[0])

// const value1:number[] = [1,2,3,4,5]
// const value2:string = "Hi Ayan";
// const value3:object = {name:"Ayan" ,age:17}
// const value4:boolean[] = [true,false,true]
// const value5:number = 17

// console.log(value3)
// day 9 code end

// day 10 code 
// Array in built method using push

const fruits = ["Apple", "mango", "banana", "orange"]

// const newubdatesfruits = fruits.push("Kiwi")

// console.log(newubdatesfruits);
// console.log(fruits);

// // array removing element using pop
// const lastfruits = fruits.pop();
// console.log(lastfruits)
// console.log(fruits)

// day 10 code end



// day 11 code 

// for using  loop
//  for (let i = 0 ;i < fruits.length ; i++){
//     console.log(fruits[i])

//  }
// using of loop 

// for (const fruit of fruits){
//     console.log(fruits)
// }
//  for each method 

// fruits.forEach((curval:string) => console.log(curval))

// day 12
// map method
// doubling each number 
// const numbers:number[] = [1,2,3,4,5];

// const doubledata:number[] = numbers.map((curval:number) => curval * 2)
//  console.log(doubledata);

//  const numbertostring:string[] = numbers.map((curelm:number) => curelm.toString())

//  console.log(numbertostring)

// day 13 

// filter method 

// const numbers: number[] = [1, 2, 3, 4, 5];
// const evennumber: number[] = numbers.filter((curelm: number) => curelm % 2 === 0)
// console.log(evennumber)

// // filtering numbers greater than 3 
// const numbergreater: number[] = numbers.filter((curelm: number) => curelm > 3)
// console.log(numbergreater)


// Day 14 
// object 

// const person: {
//     name: string;
//     age: number;
//     student: boolean;
//     address: { city: string; country: string }

// } = {
//     name: "Ayan",
//     age: 17,
//     student: true,
//     address: {
//         city: "karachi",
//         country: "Pakistan"
//     }
// }
// console.log(person)

// const product: {
//     name: string;
//     price: number;
//     Quantity: number;


// } = {
//     name: "laptop",
//     price: 50000,
//     Quantity: 5,
// }
// console.log(product)


// // ? Day 15 
// //! type alias 

// type Product = {
//     name:string;
//     price:number;
//     quantity:number;
// }

// const product:Product = {
//     name: "MObile",
//     price: 50000,
//     quantity: 10
// }
// //? Calculate total price with function
// const totalprice = (product:Product) => {
//     return `${product.name} total cost ${product.price * product.quantity}`

// } 
// console.log(totalprice(product))

// // ?Day 16 
// //! call signature function in object 

// type Student = {
//     name: string;
//     age: number;
//     Gender?: string;
//     greet: (country: string) => string    //?call signature

// }
// const student1: Student = {
//     name: "Ayan",
//     age: 17,
//     greet: (country): string => `Welcome My name is ${student1.name} and i'm  ${student1.age}yrs old i.m from ${country}`

// }
// const student2: Student = {
//     name: "Ahmed",
//     age: 17,
//     greet: (country): string => `Welcome My name is ${student2.name} and i'm  ${student2.age}yrs old i.m from ${country}`

// }


// const intro: (student1: Student) => string = (student1: Student) => {
//     const { name, age } = student1;
//     return `my name is ${name}, I'm ${age}yrs old`;
// }
// console.log(intro(student1));
// console.log(intro(student2));


//! day 17 
//? enum in ts
// enum roles {
//     admin = "admin",
//     user = "user"
// }
// type logindetails = {
//     name?: string;
//     email: string;
//     password: string;
//     role: roles;
// }

// const user1: logindetails = {
//     email: "ayan@gmail.com",
//     password: "aws",
//     role: roles.admin
// }
// const user2: logindetails = {
//     email: "ahmed@gmail.com",
//     password: "ags",
//     role: roles.user
// }

// const isadmin: (user: logindetails) => string = (user: logindetails): string => {
//     const { name, email, role } = user;
//     return role === "admin" ? `${email} is a Admin ` : `${email} is a user `
// }
// console.log(isadmin(user1));
// console.log(isadmin(user2));

// // ?day 18 
// //! tuple in ts 

// type personinfo = readonly [string,number,boolean]

// const showinfo :(person:personinfo) => void = (person:personinfo):void => {
// const [name,age, license] = person;
// console.log(`Name: ${name},Age: ${age}, have a license:${license ? "yes" : "No"} `);
// }

// const person1:personinfo = ['salar' , 20 , true];
// const person2:personinfo = ['Shah' , 17 , false];

// showinfo(person1)
// showinfo(person2)

// // ?day 19 
// //! tuple practice in ts 

// type productinfo = readonly [string,number,boolean]

// const showinfo :(person:productinfo) => void = (person:productinfo):void => {
// const [productname,price, available] = person;
// console.log(`Name: ${productname},in total cost : ${price}, 
// stock is avalable:${available ? "yes" : "No"} `);
// }

// const product1:productinfo = ['Mobile' ,50000  , true];
// const product2:productinfo = ['Laptop' , 75000 , false];

// showinfo(product1)
// showinfo(product2)

//? day 20
//! unions in Ts
//  define
// const userinput  = (value:string|number):string|number => {
// if( typeof value === 'number'){
//     return value * 2
// }else if ( typeof value === 'string'){
//     return value.toUpperCase();
// }else {
//     throw new Error ('invalid data')
    
// }
// }


// // fuction call 
// console.log(userinput(50));
// console.log(userinput("Ayan"));


//? day 21
//! Intersection in Ts

// type User ={
//     name:String,
//     age:number,
// }
// type location ={
//     city:String,
//     Country:string,
// }
// const user:User ={ name:"Ayan", age :17,};
// const mylocation:location ={ city:"Karachi", Country :"Pakistan",};

// const userprofile = (user:User,mylocation:location) => {
// return{...user, ...mylocation}
// }

// const completeinfo: User & location = userprofile(user , mylocation)
// // ?call 
// userprofile(user,mylocation);
// console.log(completeinfo)
//? day 22
//! GENRICS in Ts

// function logandreturn<A>(value:A):A {

// return value ;
// }
// const numberresult: 17 = logandreturn (17)
// const stringresult:"hello Genrics" = logandreturn("hello Genrics")

// console.log(numberresult);
// console.log(stringresult);

//? day 23
//! inlay hints vs code

// const addition = (num1:number ,num2:number) =>{
//     return num1 + num2;
// }



// console.log(addition(5,10))

//? day 24
//! Solving Function Overloading with TS Generics: Mastering Multiple Type Variables

// function add<T,U> (a:T,b:U, c:boolean){
//     console.log(typeof a)
//     console.log(typeof b)
//     console.log(typeof c)
// }

// const result1 =add(10 ,"ayan", true)
// const result2 =add("ayan" ,12, false)


//? day 25
// !TypeScript Interface - Defining Contracts for Objects & Classes

// interface info {
//     name:string;
//     age:number
// }
// const myinfo:info = {
//     name:"ayan",
//     age:17,
// }
// console.log(myinfo);

// interface Products {
//     name:string;
//     Price:number;
//     Quantity:number;
// }

// const product1:Products ={
//     name:"laptop",
//     Price:5500,
//     Quantity:15,
// }
//  const totalprices:(product:Products) => number = (product:Products) => {
//     const {Price,Quantity} = product;
//     return Price * Quantity
//  } 

//  console.log(totalprices(product1))


//? day 25
// !typeScript Compiler & Project Configuration Explained  Watch Mode, rootDir, Lib, and More!
//  const a = 10;
//  const b = 90;
// const sum = a+b;
// console.log(sum)


//? day 27
// In Typescript, there is a convention to use PascalCase (also known as
// UpperCamelCase for class names. This means that class names should start with a
// capital Letter and each subsequent word in the class name should also begin with a
// capital letter.

class Friend {
name: string;
age: number;
hobbies: string[];

 constructor(names: string, age: number, hobbies: string[]) {
this.name = names;
this.age = age;
this.hobbies = hobbies;

}
}
const learner1:Friend  = new Friend ("Ayan", 17,["Coding", "Sports"]);
const learner2:Friend  = new Friend ("Ahmed", 17,["Coding", "Playing"]);
const learner3:Friend  = new Friend ("Wasi", 20,["Coding", "Designing"]);
console.log(learner1);
console.log(learner2);
console.log(learner3);