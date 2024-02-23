import React, { useContext } from "react";
import { GlobalContext } from "../../context/FoodContext";
import RecipeItem from "../../components/recipeList/RecipeItem";

function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) return <h3>Loading... Please wait</h3>;
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing to show Please search something
          </p>
        </div>
      )}
    </div>
  );
}

export default Home;
