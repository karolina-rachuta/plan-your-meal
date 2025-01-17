import React, { useContext, useState, useEffect } from 'react';
import { RecipeContext } from '../../contex/RecipeContext';
import { getRecipesFromLocalStorage } from '../../helpers/manageLocalStorage';
import { recipesFromDataBase } from '../../recipes';

function Recipes() {
    const [recipesListLocalStorage, setRecipesListLocalStorage] = useState([]);
    // const { recipesList } = useContext(RecipeContext);

    useEffect(() => {
        const recipes = getRecipesFromLocalStorage();
        setRecipesListLocalStorage(recipes);
    }, []);

    return (
        <div className="maindesktop__container">
            {recipesFromDataBase.map((recipe) => (
                <>
                    <h1>{recipe.name}</h1>
                    <p>{recipe.description}</p>
                    <ul>
                        {recipe.ingredients.map((ingredient, i) => (
                            <li key={`${recipe.name}-ingredient-${i}`}>
                                {ingredient}
                            </li>
                        ))}
                    </ul>
                    <ul>
                        {recipe.instructions.map((instruction, i) => (
                            <li key={`${recipe.name}-instruction-${i}`}>
                                {instruction}
                            </li>
                        ))}
                    </ul>
                </>
            ))}

            <div style={{ color: 'red' }}>
                {recipesListLocalStorage.length > 0 &&
                    recipesListLocalStorage.map((recipe, index) => (
                        <div key={index}>
                            <h1>{recipe.name}</h1>
                            <p>{recipe.description}</p>
                            <ul>
                                {recipe.ingredients.map((ingredient, i) => (
                                    <li key={`${recipe.name}-ingredient-${i}`}>
                                        {ingredient}
                                    </li>
                                ))}
                            </ul>
                            <ul>
                                {recipe.instructions.map((instruction, i) => (
                                    <li key={`${recipe.name}-instruction-${i}`}>
                                        {instruction}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Recipes;
