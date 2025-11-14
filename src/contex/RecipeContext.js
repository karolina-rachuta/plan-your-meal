import React, { useState, createContext, useEffect } from 'react';
import { recipesFromDataBase } from '../data/recipes';
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

    function addRecipeToRecipesList(newRecipe) {
        setRecipesList((prev) => [...prev, newRecipe]);
    }

    function updateRecipeInList(updatedRecipe) {
        setRecipesList((prev) =>
            prev.map((r) => (r.id === updatedRecipe.id ? updatedRecipe : r))
        );
    }

    return (
        <RecipeContext.Provider
            value={{
                recipesList,
                setRecipesList,
                recipe,
                setRecipe,
                editedRecipe,
                setEditedRecipe,
                addRecipeToRecipesList,
                updateRecipeInList,
            }}
        >
            {' '}
            {children}{' '}
        </RecipeContext.Provider>
    );
}

export default RecipeContextProvider;
