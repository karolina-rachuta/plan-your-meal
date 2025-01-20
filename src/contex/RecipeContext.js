import React, { useState, createContext, useEffect } from 'react';
import { recipesFromDataBase } from '../recipes';

export const RecipeContext = createContext();

function RecipeContextProvider({ children }) {
    const [recipesList, setRecipesList] = useState([]);
    const [recipe, setRecipe] = useState({
        name: '',
        description: '',
        ingredients: [],
        instructions: [],
    });

    useEffect(() => {
        setRecipesList((prev) => [...prev, ...recipesFromDataBase]);
    }, []);

    function addRecipeToRecipesList(recipe) {
        setRecipesList((prev) => [...prev, recipe]);
    }

    console.log(recipesList);
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
