import React, { useState, createContext, useEffect } from 'react';
import type { ReactNode } from 'react';
import { recipesFromDataBase } from '../data/recipes';
import { getRecipesFromLocalStorage } from '../helpers/manageLocalStorage';

type Recipe = {
    id: string,
    name: string,
    description: string,
    ingredients: string[],
    instructions: string[],
}
type RecipeContextType = {
    recipesList: Recipe[],
    setRecipesList: React.Dispatch<React.SetStateAction<Recipe[]>>
    recipe: Recipe,
    setRecipe: React.Dispatch<React.SetStateAction<Recipe>>,
    editedRecipe: Recipe | null,
    setEditedRecipe: React.Dispatch<React.SetStateAction<Recipe | null>>
    addRecipeToRecipesList: (value: Recipe) => void,
    updateRecipeInList: (value: Recipe) => void
}

export const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

function RecipeContextProvider({ children }: { children: ReactNode }) {
    const [recipesList, setRecipesList] = useState<Recipe[]>([]);
    const [recipe, setRecipe] = useState<Recipe>({
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

    function addRecipeToRecipesList(newRecipe: Recipe) {
        setRecipesList((prev) => [...prev, newRecipe]);
    }

    function updateRecipeInList(updatedRecipe: Recipe) {
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
