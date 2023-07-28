import { Link ,useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';

function Recipies() {
    const [recipies, setRecipies] = useState([]);

    //const userId = JSON.parse(localStorage.getItem("username")).id;
    const fetchRecipiesFromServer = async () => {
        try {
          const response = await fetch(`http://localhost:3001/Recipies`);
          const data = await response.json();
          setRecipies(Array.from(data));
        } catch (error) {
          console.error(error);
          alert('An error occurred while fetching recipes');
        }
      };

      useEffect(() => {
        fetchRecipiesFromServer();
      }, []);

      

      return (
        <div className='recipies'>
      <h2>Recipies</h2>
      <div className="recipies-list">
        {recipies.map((recipe) => (
          <div key={recipe.receipt_id} className="recipe-item">
            <h3>{recipe.receipt_name}</h3>
            <img
              src={`http://localhost:3001/images/${recipe.picture_url}`}
              alt={recipe.receipt_name}
            />
          </div>
        ))
        }
      </div>
    </div>
  );
  }

export default Recipies;