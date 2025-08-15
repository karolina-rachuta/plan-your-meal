import React, { useContext, useState, useEffect } from 'react';
import { RecipeContext } from '../../contex/RecipeContext';
import { getRecipesFromLocalStorage } from '../../helpers/manageLocalStorage';
import { recipesFromDataBase } from '../../recipes';
import Edit from '../../assets/edit_modify_icon.png';
import TrashCan from '../../assets/trash_can_icon.png';
function Recipes() {
    const [recipesListLocalStorage, setRecipesListLocalStorage] = useState([]);
    const { recipesList } = useContext(RecipeContext);

    // useEffect(() => {
    //     const recipes = getRecipesFromLocalStorage();
    //     setRecipesListLocalStorage(recipes);
    // }, []);

    const totalRecipesFromDatabase = recipesFromDataBase.length;
    return (
        <div className="maindesktop__container table__container">
            <h1>List of recipes</h1>
            <div className="row">
                <p>ID</p>
                <p>NAME</p>
                <p>INGREDIENTS</p>
                <p>INSTRUCTION</p>
                <p>ACTION</p>
            </div>
            {recipesList.map((recipe, index) => (
                <div className="row" key={index}>
                    <p>{index + 1}</p>
                    <p>{recipe.name}</p>
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
                    <div className="action__btn">
                        <img src={Edit} alt="" className="icon" />
                        <img src={TrashCan} alt="" className="icon" />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Recipes;
