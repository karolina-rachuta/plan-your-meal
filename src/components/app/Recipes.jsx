import React, { useContext } from 'react';
import { RecipeContext } from '../../contex/RecipeContext';
import { readFromLocalStorage } from '../../helpers/manageLocalStorage';

const recipe = readFromLocalStorage('Nalesniki');
function Recipes() {
    const { recipesList } = useContext(RecipeContext);
    return (
        <div className="maindesktop__container">
            {/* {recipesList.map((recipe) => (
                <>
                    <h1>{recipe.name}</h1>
                    <p>{recipe.description}</p>
                </>
            ))} */}

            <div style={{ color: 'red' }}>{recipe.name}</div>
        </div>
    );
}

export default Recipes;
