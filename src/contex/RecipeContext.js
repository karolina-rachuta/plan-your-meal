import React, { useState, createContext } from 'react';

export const RecipeContext = createContext();

function RecipeContextProvider({ children }) {
    const [recipesList, setRecipesList] = useState([]);
    const [recipe, setRecipe] = useState({
        name: '',
        description: '',
        instructions: [],
        ingredients: [],
    });

    function addRecipeToRecipesList(recipe) {
        setRecipesList((prev) => [...prev, recipe]);
    }
    return (
        <RecipeContext.Provider
            value={{
                addRecipeToRecipesList,
                recipesList,
                setRecipesList,
                recipe,
                setRecipe,
            }}
        >
            {' '}
            {children}{' '}
        </RecipeContext.Provider>
    );
}

export default RecipeContextProvider;
