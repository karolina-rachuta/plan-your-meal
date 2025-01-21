import React, { useState, createContext, useEffect } from 'react';
import { recipesFromDataBase } from '../recipes';
import { getRecipesFromLocalStorage } from '../helpers/manageLocalStorage';

export const RecipeContext = createContext();

function RecipeContextProvider({ children }) {
    const [recipesList, setRecipesList] = useState([]);
    const [recipe, setRecipe] = useState({
        name: '',
        description: '',
        ingredients: [],
        instructions: [],
    });

    const recipesFromLocalStorage = getRecipesFromLocalStorage();

    useEffect(() => {
        setRecipesList([...recipesFromDataBase, ...recipesFromLocalStorage]);
    }, []);

    return (
        <RecipeContext.Provider
            value={{
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
