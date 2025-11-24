import React, { useContext } from 'react';
import { RecipeContext, type Recipe } from '../../contex/RecipeContext';
import Edit from '../../assets/edit_modify_icon.png';
import TrashCan from '../../assets/trash_can_icon.png';
import { deleteRecipeFromLocalStorage } from '../../helpers/manageLocalStorage.js';

function Recipes({
    handleScreenChange,
}: {
    handleScreenChange: (value: number) => void;
}) {
    const context = useContext(RecipeContext);
    if (!context) {
        throw Error('Recipe context is undefined');
    }
    const { recipesList, setRecipesList, setEditedRecipe } = context;

    function handleEditRecipe(id: string) {
        const findRecipe = recipesList.find(
            (recipe: Recipe) => recipe.id === id
        );
        if (!findRecipe) return;
        setEditedRecipe({ ...findRecipe });
        handleScreenChange(6);
    }

    function handleDeleteRecipe(id: string) {
        const updatedRecipes = recipesList.filter((r) => r.id !== id);
        deleteRecipeFromLocalStorage(id);
        setRecipesList(updatedRecipes);
    }

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
                        <img
                            src={Edit}
                            alt="Pencil"
                            className="icon"
                            onClick={() => handleEditRecipe(recipe.id)}
                        />
                        <img
                            src={TrashCan}
                            alt="Trash can"
                            className="icon"
                            onClick={() => handleDeleteRecipe(recipe.id)}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Recipes;
