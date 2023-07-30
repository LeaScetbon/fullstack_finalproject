import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function About() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch data from the server when the component mounts
    fetch("http://localhost:3001/recipes") // Replace with your API endpoint URL
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.receipt_id}>
          <h2>{recipe.receipt_name}</h2>
          <img
            src={`../src/server/pictures${recipe.picture_url}`}
            alt={recipe.receipt_name}
          />
        </div>
      ))}
    </div>
  );
}

export default About;
