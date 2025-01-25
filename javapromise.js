// function add(x,y){
//     return x+y;
// }
// console.log(add(3,5));

 async function add(x,y){
    return x+y;
}
console.log(add(3,5));


add(3, 5).then(result => {
    console.log(result);  // Logs 8
});

// function fetchUserData(userid,callback){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const user = {id:userid,name:'john',type:'admin'};
//         resolve(user);

//     },1000);
//     });
    
// }
// function settings(usertype){
//     return new Promise((resolve,reject)=>{
//       //  console.log()
//       const settings = usertype == 'premium'?{
//         theme:'dark',
//         notification:'true',
//         access:'high'
//       }:{theme:'light',
//         notification:'false',
//         access:'low'};
//       resolve(settings);
//     });
// }



//  let userid = 456 
//     async function display(){
//         let user = await fetchUserData(userid)
//         let usersettings = await settings(user.type)
//         console.log(usersettings)
//     }


//     display()

//     fetchUserData(1)
//     .then(user=>settings(user.type))
//     .then(settings=>console.log(settings))
//     .catch(error=>{console.log(error)})
