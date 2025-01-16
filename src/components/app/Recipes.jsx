import React, { useContext } from 'react';
import { RecipeContext } from '../../contex/RecipeContext';

function Recipes() {
    const { recipesList } = useContext(RecipeContext);
    return (
        <div className="maindesktop__container">
            {recipesList.map((recipe) => (
                <>
                    <h1>{recipe.name}</h1>
                    <p>{recipe.description}</p>
                </>
            ))}
        </div>
    );
}

export default Recipes;
