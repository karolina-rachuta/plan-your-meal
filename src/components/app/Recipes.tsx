import React from 'react';
import { type Recipe } from '../../context/RecipeContext';
import Edit from '../../assets/pencil.svg';
import TrashCan from '../../assets/trash.svg';
import { deleteRecipeFromLocalStorage } from '../../helpers/manageLocalStorage';
import useRecipeContext from '../../context/useRecipeContext';

type Table_Hdl = (typeof TABLE_HEADERS)[number];
const TABLE_HEADERS = [
    'ID',
    'NAME',
    'INGREDIENTS',
    'INSTRUCTION',
    'ACTION',
] as const;

type Props = {
    onScreenChange: (value: number) => void;
};

function Recipes({ onScreenChange }: Props) {
    const { recipesList, setRecipesList, setEditedRecipe } = useRecipeContext();

    function handleEditRecipe(id: string) {
        const findRecipe = recipesList.find(
            (recipe: Recipe) => recipe.id === id
        );
        if (!findRecipe) return;
        setEditedRecipe({ ...findRecipe });
        onScreenChange(6);
    }

    function handleDeleteRecipe(id: string) {
        const updatedRecipes = recipesList.filter((r) => r.id !== id);
        deleteRecipeFromLocalStorage(id);
        setRecipesList(updatedRecipes);
    }

    return (
        <div className="maindesktop__container table__container">
            <h1 className="hdl">List of recipes</h1>
            <div className="row">
                {TABLE_HEADERS.map((header, index) => (
                    <p className="row__hdl" key={index}>
                        {header}
                    </p>
                ))}
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
