const button = document.querySelector('button');
const keha = document.querySelector('div');
button.addEventListener('click', async function() {
 const response = await fetch('https://api.imgflip.com/get_memes');
  const data = await response.json();

 let pilt = (data.data.memes[Math.floor(Math.random() * 99)].url);
 let meme = document.createElement("img");
 meme.src = pilt;
 
 keha.replaceChildren();
 keha.appendChild(meme);
 
});


const am = document.querySelector(".am");
am.addEventListener('click', async function() {
 const response = await fetch('https://api.imgflip.com/get_memes');
  const data = await response.json();

 let pilt = (data.data.memes[Math.floor(Math.random() * 99)].url);
  let piltt = (data.data.memes[Math.floor(Math.random() * 99)].url);
   let pilttt = (data.data.memes[Math.floor(Math.random() * 99)].url);
 let memem = document.createElement("img");
 memem.src = pilt;
 let mememe = document.createElement("img");
 mememe.src = piltt;
 let mememm = document.createElement("img");
 mememm.src = pilttt;
 
 keha.replaceChildren();
 keha.appendChild(memem);
  keha.appendChild(mememe);
  keha.appendChild(mememm);
});







