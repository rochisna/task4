// function f1(){
//     console.log("Inside fun1");
//   //  callback();
// }
// function f2(){
//     console.log("Inside fun2");

// }//linear
// f1();
// f2();

function f1(callback){
    console.log("Inside fun1");
    f2();
}
function f2(){
    console.log("Inside fun2");

}
//f1(f2);
f1(f2());
