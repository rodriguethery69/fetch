// https://api.spoonacular.com/food/search?apiKey=762e26ea1360479791bcfed5116055de

// domaine
let uri = 'https://api.spoonacular.com/';
let endPoint ='';
let APIkey ='?apiKey=e1a40e19d8eb4298b6b5d807a75fd7d6';
let query='';

let form = document.querySelector('form');
let input = document.querySelector('form input');
let result  = document.querySelector('.result');
let ul = document.querySelector('nav ul');
let dataArray = [];

// evite que la page se recharge
form.addEventListener('submit', e =>{
    e.preventDefault();
})

//fonction fetch "attrape"
function fetchData(url){
    fetch(url)
    // promet moi d 'envoyer la réponse au format json
    .then(response => response.json())
    // recoit la data et la transmet à addDataToHtml
    .then (data => addDataToHtml(data.searchResults))
    // attrape moi l erreur
    .catch (error =>console.error(error))
    }

//affiche les élèments soumis dans l 'input dans le console log
input.addEventListener('input', e =>{
// il faut un minimum de 3 lettres  pour faire une recherche
    if (e.target.value.length>2) {
    // console.log(e.target.value);
    // console.log(`${query}${e.target.value}`);
    // modification de la requete  en fonction des lettres saisies
    query = `&query=${e.target.value}`;
    // modification endpoint  en fonction des lettres saisies
    endPoint ='food/search';
    let url =`${uri}${endPoint}${APIkey}${query}`
    // console.log(url)
    fetchData(url)
    }
})
 
// la fonction addDataToHtml permet de récuperer les élèments de notre html
// et de recuperer image le nom et le lien de notre recherche sous forme de cards en fonction du libéllé du tableau

const addDataToHtml  = data => {
  dataArray = data;
  addLink();
  addResultToHtml();
};

const addResultToHtml = () => {
  result.innerHTML = dataArray[0].results.map(e =>`
  <div class="card my-3 mx-3" style="width: 18rem;">
    <img src="${e.image}" class="card-img-top" class= alt="">
    <div class="card-body">
      <h5 class="card-title">${e.name}</h5>
      <p class="card-text">${e.content.slice(0,70)}...</p>  
      <a href= "${e.link}" class="btn btn-primary">Cliquer pour voir la recette</a>
    </div>
  </div>
  `).join('')
}

const addLink = () => {
  ul.innerHTML = dataArray.map(el => {
    return `
    <li class="nav-item category">
      <a class="nav-link active" aria-current="page" href="#">${el.name}</a>
    </li>`
  }).join('')
}

// document.body.innerHTML = '<div class="test"></div>'

// setTimeout(() => {
//   let test = document.querySelector('.test');
//   test.addEventListener('click', ()=>{
//     console.log('hello');
//   })
// }, 2000);

// let test = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo commodi minus laborum impedit inventore debitis ducimus dolor unde, quidem quam voluptate architecto eius Eius molestiae quas assumenda voluptatem asperiores culpa.";
// // affiche le texte de caractere 0 à 13
// // console.log(test.slice(0,13));

setTimeout(() => {
    let category = document.querySelectorAll('.category');
    category.forEach(element => {
    element.addEventListener('click', ()=>{
    console.log('hello');
      })
    });
    
}, 6000);


// let test = document.querySelector('.test');
// test.addEventListener('click', ()=>{
//   console.log('hello');
// })




