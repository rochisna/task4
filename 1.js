//object literal
//let person = {};
let person = {fname:"john",lname:"doc"};
person.age = 35;
person.fullname = person.fname+person.lname;
console.log(person.fullname);
console.log(person.age);
// using new keyword
let person1 = new Object();
person1.fname = "John";
person1.lname = "doc";
person1.age = 35;

console.log(person1.age);
// prototypical inheritance
let object1 = {fname:"cvr",lname:"3"};
let object2 = {age:35};
object2.__proto__ = object1;
console.log(object2.fname);
//using setproperty
let person2 = {fname:"john",lname:"doc"};
let person3 = {age:"35"};
Object.setPrototypeOf(person3,person2);
console.log(person3.fname);
// using constructor function
function Person(fname,lname){
    this.fname = fname;
    this.lname = lname;
    this.fullname = function(){
        return this.fname+""+this.lname;
    }
}
let person4 = new Person("John", "Doe");
console.log(person4.fullname());

let person5 = new Person("rochi", "gopi");
console.log(person5.fullname());

//call method
function Man(fname,lname){
    this.fname = fname;
    this.lname = lname;
    this.fullname = function(){
        return this.fname+" "+this.lname;
    };
}

function Admin(fname,lname){
   Man.call(this,fname,lname);
//Man.call(this); 
}
// Admin.Prototype = Man.Prototype;
Admin.prototype = Object.create(Man.prototype); // Inherit from Man's prototype
Admin.prototype.constructor = Admin; // Fix the constructor reference to Admin

let person6 = new Admin("cvr","a");
console.log(person6.fname);
//Array Destructing
arr = [12,13,14]
let[u]= arr;
console.log(u);
let[a, ,c] = arr;
console.log(a);
console.log(c);
let[e,f,g,h] = arr;
console.log(h);
let[i,...j]=arr;
console.log(i);
console.log(j);
// let[...k,l] = arr;
// console.log(k);
// console.log(l);
let arr1 = ["Ram","Raj"];
let[fname,sname] = arr1;
console.log(fname);
console.log(sname);
//object destructing
let person7 ={
    fname:"John",
    lname:"doe",
};
console.log(person7.fname);
let firstname = person.fname;
let lastname = person.lname;
console.log(firstname);

let person8 ={
    fname:"John",
    lname:"doe",
};
let{fname1,lname1}= person8;
console.log(person8);
