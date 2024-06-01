const headline =document.getElementById("headline");
headline.innerHTML="chào mừng bạn đến với <i> Trường Hay ho </i>";


var a = 10;
a = " trường hay ho";
console.log(a);

if (true){
    var b =" trường hay ho";
    let a = "xin chào";
    console.log(a);
}
console.log(b);

const  arr=[12,3,4,5];
const arr1 = Array(1,2,34,5);
console.log(arr);
console.log(arr1);

const user={
    username :"trường",
    age : 19
};
console.log(user.username);

const products = [
    {
    name : "trường hay ho",
    img : "./img/2.jpg",
},
{
    name : "trường hay ho",
    img : "./img/3.jpg",
},
];

const app = document.getElementById("app");
// for (let i=0;i<products.length;i++){
//     app.innerHTML +=`
//         <div>
//             <h3>${products[i].name}</h3>
//             <img src="${products[i].img}" width=150px />
              
//         </div>
//     `
// }

// products.forEach(function(products){
//     app.innerHTML +=`
//     <div>
//         <h3>${products.name}</h3>
//         <img src="${products.img}" width=150px />
          
//     </div>
// `
// });

// for (let i in products){
//     app.innerHTML +=`
//     <div>
//         <h3>${products[i].name}</h3>
//         <img src="${products[i].img}" width=150px />
          
//     </div>
// `
// }

// for (let item of products){
//     app.innerHTML +=`
//     <div>
//         <h3>${item.name}</h3>
//         <img src="${item.img}" width=150px />
          
//     </div>
// `
// }

// products.map(function(item){
//     app.innerHTML +=`
//      <div>
//          <h3>${item.name}</h3>
//          <img src="${item.img}" width=150px />
          
// </div>
//  `
// })

app.innerHTML=products.map(function(item){
    return`
    <div>
        <h3>${item.name}</h3>
        <img src="${item.img}" width=150px />
         
</div>
`
}).join("");