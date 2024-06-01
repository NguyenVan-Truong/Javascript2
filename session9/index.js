const restaurant = {
    name : "Nguyễn Văn Trường",
    location : "Long Châu , Phụng Châu , Chương Mỹ , Hà Nội",
    categories : ["Italian", "pizzeria","vegetarian","organic"],
    starterMenu :["Foccacia","Bruschetta","Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza","pasta","Risotto"],
    openingHours : {
        thu:{
            open:12,
            closee:22,
        },
        fri:{
            open:11,
            close:23,
        },
        sat:{
            open : 0,
            close:24,
        },
    },
    order: function(startindex,mainindex){
        return [this.starterMenu[startindex],this.mainMenu[mainindex]];
    },

    orderDelivery: function ({starterindex,mainindex,time,address}){
        console.log(`order received ! ${this.starterMenu[starterindex]}and ${this.mainMenu[mainindex]}will be delivered to ${address} at ${time}`);
    },
    orderPasta: function(ing1,ing2,ing3){
        console.log(`here ís your declicious pasta width ${ing1},${ing2}and${ing3}`);
    }
};

//9.1
// const arr =[1,2,3,4];
// const a=arr[0];
// const b=arr[1];
// const c=arr[2];

// const [x,y,z]=arr;
// console.log(arr);
// console.log(x,y,z);

// let [one,,two]=restaurant.categories;
// console.log(one,two);
// // hoán đổi vị trí
// // cách 1
// // const temp = one;
// // one= two;
// // two= temp;
// // console.log(one,two);
// // cách 2 
// [one,two]=[two,one];
// console.log(one,two);
// console.log(restaurant.order(2, 0));
// const [one1 , two2]=restaurant.order(2, 0);
// console.log(one1,two2)
// const nested=[1,2,[3,4]];
// const [i,,j]=nested;
// const [i,,[j,k]]=nested;
// console.log(i,j);
// const [p=1,q=1,r=1]=[9,8];
// console.log(p,q,r);

//9.2
// const {name,openingHours,starterMenu}=restaurant;
// console.log(name,openingHours,starterMenu);
// gán tên cho dễ
// const {
//     name:ten,
//     openingHours:gio,
//     starterMenu:thucdon,
// }= restaurant;
// console.log(ten,gio,thucdon);
// const{manu=[],starterMenu:strarter=[]}= restaurant;
// console.log(manu,strarter);

// let a= 100;
// let b=2000;
// const obj={a:1,b:2,c:3};
// ({a,b,c}=obj);
// console.log(a,b,c);

// const {fri : {open :mo ,close : dong}}=openingHours;
// console.log(mo,dong);

// restaurant.orderDelivery({
//     time:'22:00',
//     address:'Long Châu , Phụng Châu , Chương Mỹ , Hà Nội',
//     mainindex :2,
//     starterindex:2,
// });

//9.3
const arr=[7,8,9];
const badNewArr = [1,2,arr[0],arr[1],arr[2]];
console.log(badNewArr);
const newArr = [1,2,...arr];
console.log(newArr);
console.log(...newArr);
const newMenu=[...restaurant.mainMenu,'Trường'];
console.log(newMenu);
const mainMenuCopy = [...restaurant.mainMenu];
const menu = [...restaurant.starterMenu,...restaurant.mainMenu];
console.log(menu);
const str="trường";
const letters=[...str,".s"];
console.log(letters);
console.log(...str);
const ingredients = [prompt("let's make pasta! Ingredient !?"),
prompt("Ingredient 2?"),
prompt("Ingredient 3?")];
console.log(ingredients);
restaurant.orderPasta(ingredients[0],ingredients[2]);
restaurant.orderPasta(...ingredients);

// ofjects
const newRestaurant = {foundedIn:2004 ,...restaurant,founder:'Trường'}
console.log(newRestaurant);
const restaurantcopy={...restaurant};
restaurantcopy.name='Ristorante Roma';
console.log(restaurantcopy.name);
console.log(restaurant.name);