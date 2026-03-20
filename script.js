const button = document.querySelector('button');

button.addEventListener('click', async function() {
 const response = await fetch('https://api.imgflip.com/get_memes');
  const data = await response.json();
  console.log(data.temperature);
});









