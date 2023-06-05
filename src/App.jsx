
// importamos los módulos necesarios. 
// React es necesario para definir componentes de React, 
// useEffect y useState son hooks de React que permiten realizar efectos secundarios y gestionar el estado en el componente. 
// axios es una librería que se utiliza para realizar solicitudes HTTP.

import { useEffect, useState } from 'react';
import axios from 'axios';

// definimos el componente de React llamado App. 
// Utilizo el hook useState para crear una variable de estado llamada cocktails que inicialmente se establece como un array vacío. 
// La función setCocktails se utiliza para actualizar el valor de cocktails

const App = () => {
  const [cocktails, setCocktails] = useState([]);

  // El hook useEffect se utiliza para ejecutar efectos secundarios en el componente. 
  // En este caso, se define una función fetchCocktails que utiliza axios para hacer una solicitud GET a la URL de la API "The Cocktail DB". 
  // Si la solicitud es exitosa, se actualiza el estado cocktails con los datos de los cócteles obtenidos de la respuesta. 
  // Si ocurre un error, se muestra el error en la consola.

  // La función fetchCocktails se ejecuta una vez que el componente se ha montado, 
  // gracias al segundo argumento del useEffect, que es un array vacío []. 
  // Esto asegura que el efecto se ejecute solo una vez al inicio.

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
        setCocktails(response.data.drinks);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCocktails();
  }, []);

  // En el bloque return, se define la estructura y el contenido que se mostrará en la interfaz de usuario lo que se renderiza en el navegador. 
  // este bloque de código crea un encabezado principal seguido de una lista de cocktails. 
  // Cada cocktail se muestra con su nombre, imagen e instrucciones de preparación. 
  // Estos elementos se generan dinámicamente utilizando el método map para recorrer el array de cocktails obtenidos de la API

  return (
    <div>
      <h1>Cocktail Landing Page</h1>
      {cocktails.map(cocktail => (
        <div key={cocktail.idDrink}>
          <h2>{cocktail.strDrink}</h2>
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
          <p>{cocktail.strInstructions}</p>
        </div>
      ))}
    </div>
  );
};

//Finalmente, el componente MyComponent se exporta para que pueda ser utilizado en otros lugares de la aplicación.
export {App};
