// const button = document.querySelector('button');


// button.addEventListener('click', ()=>{
//     alert('mi hai cliccato!');

//     const p = document.createElement('p');
//     p.textContent = 'nuovo paragrafo aggiunto.';
//     document.body.appendChild(p);
// })

// let response = fetch('https://plus.unsplash.com/premium_photo-1701590725721-add548ecdf61?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2ZvbmRvJTIwc2l0byUyMHdlYnxlbnwwfHwwfHx8MA%3D%3D');
// let blob = response.blob();

// function webRequest(url, fileType, callback){
//     let xml = new XMLHttpRequest();
//     xml.open('GET', url);
//     xml.responseType = fileType;

//     xml.onload = ()=>{
//         callback(xml.response);
//     }

//     xml.send();
// }

// function displayImage(blob){
//     let imageURL = URL.createObjectURL(blob);

//     console.log();
    
//     let image = document.createElement('img');
//     image.src = imageURL;
//     document.body.appendChild(image);
// }

//webRequest('https://plus.unsplash.com/premium_photo-1701590725721-add548ecdf61?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2ZvbmRvJTIwc2l0byUyMHdlYnxlbnwwfHwwfHx8MA%3D%3D', 'blob', displayImage);

// fetch('https://plus.unsplash.com/premium_photo-1701590725721-add548ecdf61?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2ZvbmRvJTIwc2l0byUyMHdlYnxlbnwwfHwwfHx8MA%3D%3D').then((imageURL)=>{
//     return imageURL.blob();
// }).then((blob)=>{
//     displayImage(blob);
// }).catch((error)=>{
//     console.log(error);
    
// });

// let button = document.querySelector('button');

// let pausa = setTimeout(saluta, 5000);

// function saluta() {
//     alert('ciao, ho aspettato 5 secondi');
// }

// button.addEventListener('click', ()=>{
//     clearInterval(createClock);
// })


// let p = document.querySelector('p');

// function displayTime(){
//     let data = new Date();
//     let time = data.toLocaleTimeString();
//     p.textContent = time;
// }

// const createClock = setInterval(displayTime, 1000);


// function timeoutPromise(message, interval){
//     return new Promise((resolve, reject) => {
//         if (message === '' || typeof message != 'string') {
//             reject('Message undefined or not a string.');
//         }
//         else if (interval < 0 || typeof interval != 'number') {
//             reject('Negative interval or not a number');
//         }
//         else{
//             setTimeout(()=>{
//                 resolve(message);
//             }, interval); 
//         }
//     })
// }

// timeoutPromise('Hello!', 2000)
//     .then((message) =>{
//     alert(message);
//     })
//     .catch((err)=>{
//     console.log('Error: ' + err);
//     })



// function displayImage(blob){
//     let imageURL = URL.createObjectURL(blob);

//     console.log();
    
//     let image = document.createElement('img');
//     image.src = imageURL;
//     document.body.appendChild(image);
// }

//webRequest('https://plus.unsplash.com/premium_photo-1701590725721-add548ecdf61?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2ZvbmRvJTIwc2l0byUyMHdlYnxlbnwwfHwwfHx8MA%3D%3D', 'blob', displayImage);

// fetch('https://plus.unsplash.com/premium_photo-1701590725721-add548ecdf61?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2ZvbmRvJTIwc2l0byUyMHdlYnxlbnwwfHwwfHx8MA%3D%3D')
//.then((imageURL)=>{
//     return imageURL.blob();
// }).then((blob)=>{
//     displayImage(blob);
// }).catch((error)=>{
//     console.log(error);
    
// });

// NOOOOO

async function myFetch(){
    let response = await fetch('sfondo.avif');
    let myBlob = await response.blob();

    let imageURL = URL.createObjectURL(myBlob);
    let image = document.createElement('img');
    image.src = imageURL;
    document.body.appendChild(image);
}

myFetch().catch((err)=>{
    console.log('Error: ' + err);
    
})

