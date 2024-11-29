const baseEndpoint = "https://api.github.com"; 
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog'); //Quitar #
const $l = document.querySelector('.location');

//Debe ser una función asincronica

async function displayUser(username) { 
  $n.textContent = 'cargando...';

  //Try va con cath
  try {
    const response = await fetch(`${usersEndpoint}/${username}`); 
  //Necesitamos una const data con json
    const data = await response.json();
    console.log(data);
    $n.textContent = `${data.name}`;
    $b.textContent = `${data.blog}`;
    $l.textContent = `${data.location}`;  
      } catch (err) {      //No necesitamos otra funcion
    console.log('OH NO!');
    console.log(err);
    $n.textContent = `Algo salió mal: ${err}`;
  }
}
displayUser('stolinski').catch(handleError);
