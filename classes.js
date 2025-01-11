//classes
class Person {
    constructor(fname,lname){
   this.fname = fname,
    this.lname = lname;
}
}
var  p1 = new Person("john","doe");
console.log(p1);
//Inheritance
class Myclass{
    constructor(a=5){
        this.a = a;
    }
}
class class2 extends Myclass{
    constructor(a,b){
        super(a);
        this.b = b;
    }
}
var myobj = new class2(2,16);

console.log(myobj.a);
console.log(myobj.b);

