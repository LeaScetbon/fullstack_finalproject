import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Recipies.css";

function Recipies() {
  const [recipies, setRecipies] = useState([]);
  const [newRecipie, setNewRecipie] = useState({
    receipt_name: "",
    link: "",
    receipt_text: "",
    picture_url: "",
  });
  const [userType, setUserType] = useState("");
  const [addedRecipies, setAddedRecipies] = useState([]);

  const fetchRecipiesFromServer = async () => {
    try {
      const response = await fetch(`http://localhost:3001/Recipies`);
      const data = await response.json();
      setRecipies(Array.from(data));
    } catch (error) {
      console.error(error);
      alert("An error occurred while fetching recipes");
    }
  };

  useEffect(() => {
    fetchRecipiesFromServer();
    const user = JSON.parse(localStorage.getItem("username"));
    if (user && user.usertype) {
      setUserType(user.usertype);
    }
  }, []);

  const handleAddRecipe = async (event) => {
    event.preventDefault();
    //console.log(newRecipie);
    for (const key in newRecipie) {
      if (newRecipie.hasOwnProperty(key) && newRecipie[key] === "") {
        alert("Please fill in all the required fields");
        return;
      }
    }

    try {
      const response = await fetch("http://localhost:3001/Recipies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRecipie),
      });

      if (response.ok) {
        const addedRecipeData = await response.json();
        alert("Recipe added successfully");

        setAddedRecipies((prevAddedRecipies) => [...prevAddedRecipies, addedRecipeData]);
       
        setNewRecipie({
          receipt_name: "",
          link: "",
          receipt_text: "",
          picture_url: "",
        });
      } else {
      const errorResponse = await response.json(); // Get the error response from the server
      console.error("Failed to add recipe - Error response:", errorResponse);
        alert("Failed to add recipe");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while adding the recipe");
    }
  };

  const handleDeleteRecipe = async (receiptId) => {
    console.log(receiptId)
    try {
      const response = await fetch(
        `http://localhost:3001/recipes/${receiptId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        alert("Recipe deleted successfully");
        fetchRecipiesFromServer();
        setAddedRecipies((prevAddedRecipies) =>
          prevAddedRecipies.filter((recipe) => recipe.receipt_id !== receiptId)
        );
      } else {
        alert("Failed to delete recipe");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while deleting the recipe");
    }
  };

  return (
    <div className="recipies">
      <h2>Recipies</h2>
      <div className="recipies-list">
        {recipies.map((recipe) => (
          <div key={recipe.receipt_id} className="recipe-item">
            <h3>{recipe.receipt_name}</h3>
            <div>
              <img src={recipe.picture_url} alt={recipe.receipt_name} />
            </div>
            <a
              href={recipe.link}
              target="_blank" // This will open the video in a new tab
              rel="noopener noreferrer" // Security best practices for links opening in a new tab
            >
              Watch Video
            </a>
            {/* <iframe 
              width="280" 
              height="250" 
              src= {recipe.link} 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
          ></iframe> */}
            {console.log("recipe Picture URL:", recipe.picture_url)}{" "}
            <h5>{recipe.receipt_text}</h5>
            {userType === "admin" && (
              <button onClick={() => handleDeleteRecipe(recipe.receipt_id)}>
                Delete
              </button>
            )}
          </div>
        ))}
      </div>
      {addedRecipies.map((recipe) => (
        <div key={recipe.receipt_id} className="recipe-item">
          <h3>{recipe.receipt_name}</h3>
          <img src={recipe.picture_url} alt={recipe.receipt_name} />
          {userType === "admin" && (
            <button onClick={() => handleDeleteRecipe(recipe.receipt_id)}>
              Delete
            </button>
          )}
        </div>
      ))}
      {userType === "admin" && (
        <div className="add-recipe-form">
          <h3>Add a New Recipe</h3>
          <form onSubmit={handleAddRecipe}>
            <input
              type="text"
              placeholder="Recipe Name"
              value={newRecipie.receipt_name}
              onChange={(e) =>
                setNewRecipie({ ...newRecipie, receipt_name: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="Recipe link"
              value={newRecipie.link}
              onChange={(e) =>
                setNewRecipie({ ...newRecipie, link: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="Recipe Text"
              value={newRecipie.receipt_text}
              onChange={(e) =>
                setNewRecipie({ ...newRecipie, receipt_text: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="Recipe picture url"
              value={newRecipie.picture_url}
              onChange={(e) =>
                setNewRecipie({ ...newRecipie, picture_url: e.target.value })
              }
              required
            />
            <button type="submit">Add Recipe</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Recipies;
