// const whereAmI = function(lat,lng){
//     fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(res =>{
//         if(!res.ok) throw new console.error(`problem with geocodeing ${res.status}`);
//         return res.json();
//     })
//     .then(data =>{
//         console.log(data);
//         console.log(`you are in ${data.city},${data.country}`);
//         return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
//     })
//     .then(res =>{
//         if(!res.ok)
//         throw new Error(`country not found (${response.status})`);
//         return res.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message}`));
// };
// whereAmI(52.508,13.381);
// whereAmI(19.037,72.873);
// whereAmI(-33.933, 18.474);


// 8.2

// const wait = function(seconds){
//     return new Promise(function(resolve){
//         setTimeout(resolve,seconds * 1000);
//     });
// };

// const imgContainer = document.querySelector('.images')

// const createImage = function(imgPath){
//     return new Promise(function(resolve,reject){
//         const img = document.createElement('img');
//         img.src = imgPath;
//         img.addEventListener('load',function(){
//             imgContainer.append(img);
//             resolve(img);
//         });
//         img.addEventListener('error',function(){
//             reject(new Error('Image not found'));
//         });
//     });
// };

// let currentImg;

// createImage('img/img.jpg')
// .then(img =>{
//     currentImg = img;
//     console.log('images 1 loaded');
//     return wait(2)
// })
// .then(()=>{
//     currentImg.style.display = 'none';
//     return currentImg('img/img2.jpg');
// })

// .then(img =>{
//     currentImg = img;
//     console.log('images 2 loaded');
//     return wait(2)
// })
// .then(()=>{
//     currentImg.style.display = 'none';
// })
// .catch(err => console.error(err));


// 8.3
const loadNPause = async function(){
    try {
       let img = await createImage('img.jpg');
       console.log(`img 1 loaded`);
       await wait(2)
       img.style.display = 'none';
        
        img = await createImage('img.jpg');
        console.log(`img 2 loaded`);
        await wait(2)
        img.style.display = 'none';
    } catch (error) {
        console.log(error)
        
    }
}
loadNPause();


const loadAll = async function(imgArr){
    try {
        const imgs = imgArr.map(async img => await
        createImage(img));
        console.log(imgs);

       const imgsEl =await Promise.all(imgs);
       console.log(imgsEl)
       imgsEl.forEach(img => img.classList.add('parallel'));
    } catch (error) {
        console.log(error);
    }
}
loadAll(['img.jpg','img2.jpg','img3.jpg'])