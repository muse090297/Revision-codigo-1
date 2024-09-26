const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
//const $n = document.querySelector('name');
const $n = document.getElementById("name");
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

function displayUser(username) {
  $n.textContent = 'cargando...';
  //Añadimos un try catch
  try{
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
} catch(error){ handleError(error)}
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski')