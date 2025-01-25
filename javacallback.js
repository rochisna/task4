// function f1(callback){
//     console.log("Inside fun1");
//     callback();
// }
// function f2(){
//     console.log("Inside fun2");

// }

// f1(f2());

// function f1(callback) {
//     console.log("Inside fun1");
//     callback();  // Call the callback function (which is passed to f1)
// }

// function f2() {
//     console.log("Inside fun2");
// }


// f1(f2);  // This will work as expected

// function fetchUserData(userid,callback){
//     setTimeout(()=>{
//         const user = {id:userid,name:'john'};
//         callback(user);

//     },1000);
// }

// function displayUserData(user){
//     console.log(`user:${user.name} id : ${user.id} `);
// }
 //let userid = 123;
// fetchUserData(userid,displayUserData);
let userid = 123;
function fetchUserData(userid,callback){
    setTimeout(()=>{
        const user = {id:userid,name:'john',type:'admin'};
        callback(user.type);

    },1000);
    
}

function FetchPrivileges(type,callback){
    let privileges = {"read":true,"write":true,"print":true};
    callback(privileges);
}

function display(privileges){
    console.log(privileges);
}

fetchUserData(userid,(user)=>{
    FetchPrivileges(user.type,display);
}
);








