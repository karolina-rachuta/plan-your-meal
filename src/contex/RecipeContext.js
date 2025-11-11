import React, { useState, createContext, useEffect } from 'react';
import { recipesFromDataBase } from '../recipes';
import { getRecipesFromLocalStorage } from '../helpers/manageLocalStorage';

export const RecipeContext = createContext();

function RecipeContextProvider({ children }) {
    const [recipesList, setRecipesList] = useState([]);
    const [recipe, setRecipe] = useState({
        id: '',
        name: '',
        description: '',
        ingredients: [],
        instructions: [],
    });
    const [editedRecipe, setEditedRecipe] = useState(null);

    useEffect(() => {
        const recipesFromLocalStorage = getRecipesFromLocalStorage();
        const combinedRecipes = [
            ...recipesFromDataBase,
            ...recipesFromLocalStorage,
        ];
        setRecipesList(combinedRecipes);
    }, []);
    console.log(recipesList);

    return (
        <RecipeContext.Provider
            value={{
                recipesList,
                setRecipesList,
                recipe,
                setRecipe,
                editedRecipe,
                setEditedRecipe,
            }}
        >
            {' '}
            {children}{' '}
        </RecipeContext.Provider>
    );
}

export default RecipeContextProvider;
