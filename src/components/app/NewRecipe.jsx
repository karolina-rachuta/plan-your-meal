import React, { useContext, useState } from 'react';
import Add from '../../assets/add_plus.png';
import Edit from '../../assets/edit_modify_icon.png';
import TrashCan from '../../assets/trash_can_icon.png';
import { RecipeContext } from '../../contex/RecipeContext';
import { saveRecipeToLocalStorage } from '../../helpers/manageLocalStorage';

function NewRecipe({ handleScreenChange }) {
    const { addRecipeToRecipesList, recipe, setRecipe } =
        useContext(RecipeContext);

    const [newInstruction, setNewInstruction] = useState('');
    const [newIngredient, setNewIngredient] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);

    function handleSavingRecipe() {
        if (recipe.name && recipe.description) {
            //addRecipeToRecipesList(recipe);
            saveRecipeToLocalStorage(recipe);
            setRecipe({
                name: '',
                description: '',
                instructions: [],
                ingredients: [],
            });
            handleScreenChange(1);
        } else {
            alert('Please provide a recipe name and description.');
        }
    }

    function handleAddingInstruction() {
        if (editingIndex !== null) {
            const updatedInstructions = [...recipe.instructions];
            updatedInstructions[editingIndex] = newInstruction;
            setRecipe((prev) => ({
                ...prev,
                instructions: updatedInstructions,
            }));
            setEditingIndex(null);
        } else if (newInstruction) {
            setRecipe((prev) => ({
                ...prev,
                instructions: [...prev.instructions, newInstruction],
            }));
        }
        setNewInstruction('');
    }

    function handleAddingIngredient() {
        if (editingIndex !== null) {
            const updatedIngredients = [...recipe.ingredients];
            updatedIngredients[editingIndex] = newIngredient;
            setRecipe((prev) => ({
                ...prev,
                ingredients: updatedIngredients,
            }));
            setEditingIndex(null);
        } else if (newIngredient) {
            setRecipe((prev) => ({
                ...prev,
                ingredients: [...prev.ingredients, newIngredient],
            }));
        }
        setNewIngredient('');
    }

    function handleDeletingIngredient(index) {
        const updatedIngredients = recipe.ingredients.filter(
            (_, id) => id !== index
        );
        setRecipe((prev) => ({
            ...prev,
            ingredients: updatedIngredients,
        }));
    }

    function handleDeletingInstruction(index) {
        const updatedInstructions = recipe.instructions.filter(
            (_, id) => id !== index
        );
        setRecipe((prev) => ({ ...prev, instructions: updatedInstructions }));
    }

    function handleEditInstruction(index) {
        setEditingIndex(index);
        setNewInstruction(recipe.instructions[index]);
    }

    function handleEditIngredient(index) {
        setEditingIndex(index);
        setNewIngredient(recipe.ingredients[index]);
    }

    return (
        <div className="maindesktop__container add__container">
            <div className="add__title">
                <h1>Add Recipe</h1>
                <button onClick={handleSavingRecipe}>Save and Close</button>
            </div>
            <div className="add__top">
                <div className="add__row">
                    <label htmlFor="recipe_name" className="add__label">
                        Recipe name
                    </label>
                    <input
                        type="text"
                        id="recipe_name"
                        className="add__input"
                        value={recipe.name}
                        onChange={(e) =>
                            setRecipe({ ...recipe, name: e.target.value })
                        }
                    />
                </div>
                <div className="add__row">
                    <label htmlFor="recipe_description" className="add__label">
                        Recipe description
                    </label>
                    <input
                        type="text"
                        id="recipe_description"
                        className="add__input"
                        value={recipe.description}
                        onChange={(e) =>
                            setRecipe({
                                ...recipe,
                                description: e.target.value,
                            })
                        }
                    />
                </div>
            </div>
            <div className="add__bottom">
                <div className="add__col">
                    <h2>Instructions</h2>
                    <div>
                        <input
                            type="text"
                            value={newInstruction}
                            onChange={(e) => {
                                setNewInstruction(e.target.value);
                            }}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleAddingInstruction();
                                }
                            }}
                        />
                        <button onClick={handleAddingInstruction}>
                            <img src={Add} alt="" className="icon" />
                        </button>
                    </div>
                    <div>
                        <ol>
                            {recipe.instructions.map((instruction, index) => (
                                <li key={index}>
                                    {instruction}
                                    <img
                                        src={Edit}
                                        alt=""
                                        className="icon"
                                        onClick={() =>
                                            handleEditInstruction(index)
                                        }
                                    />
                                    <img
                                        src={TrashCan}
                                        alt=""
                                        className="icon"
                                        onClick={() =>
                                            handleDeletingInstruction(index)
                                        }
                                    />
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
                <div className="add__col">
                    <h2>Ingredients</h2>
                    <div>
                        <input
                            type="text"
                            value={newIngredient}
                            onChange={(e) => {
                                setNewIngredient(e.target.value);
                            }}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleAddingIngredient();
                                }
                            }}
                        />
                        <button onClick={handleAddingIngredient}>
                            <img src={Add} alt="" className="icon" />
                        </button>
                    </div>
                    <div>
                        <ol>
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>
                                    {ingredient}
                                    <img
                                        src={Edit}
                                        alt=""
                                        className="icon"
                                        onClick={() =>
                                            handleEditIngredient(index)
                                        }
                                    />
                                    <img
                                        src={TrashCan}
                                        alt=""
                                        className="icon"
                                        onClick={() =>
                                            handleDeletingIngredient(index)
                                        }
                                    />
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewRecipe;
