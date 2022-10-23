const API_KEY = "199ce63b823647db9536a8ff14d3c3e7";

const getRecipes = async () => {
  let response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);

  let data = await response.json();
  return data.results;
}

getRecipes().then(data => {
  renderPage(data);
}).catch(error => console.error(error));

const renderPage = (result) => {
  let divPrincipal = document.getElementsByClassName('band')[0];


  result.forEach(data => {
    let div = document.createElement('div');
    let a = document.createElement('a');
    a.className = 'card';

    let divThumb = document.createElement('div');
    divThumb.className = 'thumb';
    divThumb.style = `background-image: url(${data.image})`;

    let article = document.createElement('article');
    let h1 = document.createElement('h1');
    h1.innerHTML = data.title;
    let p = document.createElement('p');
    p.innerHTML = data.summary;


    let span = document.createElement('span');
    span.innerHTML = `Precio Estimado: ${data.pricePerServing}`;

    article.appendChild(h1);
    article.appendChild(p);
    article.appendChild(span);

    a.appendChild(divThumb);
    a.appendChild(article);

    div.appendChild(a);

    divPrincipal.appendChild(div);
  });
};



// Declare la key que necesitamos para acceder a la api
// Luego declare una funcion que a su vez es exportada para 
// usarla en otros archivos.
// Esta función a su vez es asincrona es decir esta implicito 
// que la promesa sera devuelta y sin ella 
// no se puede ejecutar lo que sigue en await
// por ultimo retornamos la data que vamos a mostrar
