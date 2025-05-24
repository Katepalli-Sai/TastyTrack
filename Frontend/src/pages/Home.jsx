import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [category, setCategory] = useState("All");

  const categories = ["All", "Breakfast", "Lunch", "Dinner", "Dessert", "Snack"];

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const endpoint = "http://localhost:5000/api/recipes"
          //category !== "All" ? `/api/recipes?category=${category}` : "/api/recipes";
        const res = await axios.get(endpoint);

        if (Array.isArray(res.data)) {
          setRecipes(res.data);
        } else {
          console.error("Expected array, got:", res.data);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchRecipes();
  }, [category]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 bg-blue-50 min-h-screen rounded-xl shadow-md">
      <h1 className="text-4xl font-bold mb-10 text-center text-blue-700 drop-shadow">
        🍽️ Discover Delicious Recipes
      </h1>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-5 py-2 rounded-full font-semibold transition duration-300 border 
              ${
                category === cat
                  ? "bg-blue-600 text-white border-blue-700 shadow-lg scale-105"
                  : "bg-white text-blue-700 border-blue-200 hover:bg-blue-100"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {recipes.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">No recipes found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <Link
              key={recipe._id}
              to={`/recipe/${recipe._id}`}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1 border border-blue-100"
            >
              {recipe.photoUrl && (
                <img
                  src={recipe.photoUrl}
                  alt={recipe.title}
                  className="w-full h-48 object-cover recipe-image"

                />
              )}
              <div className="p-5 space-y-2">
                <h2 className="text-xl font-bold text-blue-700 capitalize">{recipe.title}</h2>
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-blue-500">Category:</span> {recipe.category}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-blue-500">Cooking Time:</span> {recipe.cookingTime} mins
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
