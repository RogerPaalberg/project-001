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








