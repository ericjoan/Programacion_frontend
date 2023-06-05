
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

  // En el bloque return, se define la estructura y el contenido que se mostrará en la interfaz de usuario. 
  // En este caso, se muestra un encabezado <h1> con el texto "Cocktails available" y una lista <ul> que se crea utilizando el método map en el array cocktails. 
  // Para cada cóctel en cocktails, se crea un elemento de lista <li> con el nombre del cóctel (cocktail.strDrink). 
  // Es importante asignar una clave key única a cada elemento de la lista para ayudar a React a optimizar las actualizaciones de la interfaz de usuario.

  return (
    <div>
      <h1>Cocktails available</h1>
      <ul>
        {cocktails.map(cocktail => (
          <li key={cocktail.idDrink}>{cocktail.strDrink}</li>
        ))}
      </ul>
    </div>
  );
};

//Finalmente, el componente MyComponent se exporta para que pueda ser utilizado en otros lugares de la aplicación.
export {App};
