const API_KEY = "2eddb588aa8e417581bd57b1bc0016b6";

export const getRecipes = async () => {
   let response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);

   let data = await response.json();
   return data;
}

// Declare la key que necesitamos para acceder a la api
// Luego declare una funcion que a su vez es exportada para 
// usarla en otros archivos.
// Esta función a su vez es asincrona es decir esta implicito 
// que la promesa sera devuelta y sin ella 
// no se puede ejecutar lo que sigue en await
// por ultimo retornamos la data que vamos a mostrar