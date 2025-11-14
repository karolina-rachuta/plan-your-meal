import React, { useContext, useEffect, useState } from 'react';
import Add from '../../assets/add_plus.png';
import Edit from '../../assets/edit_modify_icon.png';
import TrashCan from '../../assets/trash_can_icon.png';
import { RecipeContext } from '../../contex/RecipeContext';
import { saveRecipeToLocalStorage } from '../../helpers/manageLocalStorage';

function EditRecipe({ handleScreenChange }) {
    const { editedRecipe, setEditedRecipe, updateRecipeInList } =
        useContext(RecipeContext);

    const [newInstruction, setNewInstruction] = useState('');
    const [newIngredient, setNewIngredient] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);

    function handleSavingRecipe() {
        saveRecipeToLocalStorage(editedRecipe);
        updateRecipeInList(editedRecipe);
        setEditedRecipe(null);
        handleScreenChange(1);
    }

    function handleAddingInstruction() {
        if (editingIndex !== null) {
            const updatedInstructions = [...editedRecipe.instructions];
            updatedInstructions[editingIndex] = newInstruction;
            setEditedRecipe((prev) => ({
                ...prev,
                instructions: updatedInstructions,
            }));
            setEditingIndex(null);
        } else if (newInstruction) {
            setEditedRecipe((prev) => ({
                ...prev,
                instructions: [...prev.instructions, newInstruction],
            }));
        }
        setNewInstruction('');
    }

    function handleAddingIngredient() {
        if (editingIndex !== null) {
            const updatedIngredients = [...editedRecipe.ingredients];
            updatedIngredients[editingIndex] = newIngredient;
            setEditedRecipe((prev) => ({
                ...prev,
                ingredients: updatedIngredients,
            }));
            setEditingIndex(null);
        } else if (newIngredient) {
            setEditedRecipe((prev) => ({
                ...prev,
                ingredients: [...prev.ingredients, newIngredient],
            }));
        }
        setNewIngredient('');
    }

    function handleDeletingIngredient(index) {
        const updatedIngredients = editedRecipe.ingredients.filter(
            (_, id) => id !== index
        );
        setEditedRecipe((prev) => ({
            ...prev,
            ingredients: updatedIngredients,
        }));
    }

    function handleDeletingInstruction(index) {
        const updatedInstructions = editedRecipe.instructions.filter(
            (_, id) => id !== index
        );
        setEditedRecipe((prev) => ({
            ...prev,
            instructions: updatedInstructions,
        }));
    }

    function handleEditInstruction(index) {
        setEditingIndex(index);
        setNewInstruction(editedRecipe.instructions[index]);
    }

    function handleEditIngredient(index) {
        setEditingIndex(index);
        setNewIngredient(editedRecipe.ingredients[index]);
    }

    if (!editedRecipe) return <div>Loading...</div>;

    return (
        <div className="maindesktop__container add__container">
            <div className="add__title">
                <h1>Add Recipe</h1>
                <button onClick={handleSavingRecipe} className="btn">
                    Save and Close
                </button>
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
                        value={editedRecipe.name}
                        onChange={(e) =>
                            setEditedRecipe({
                                ...editedRecipe,
                                name: e.target.value,
                            })
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
                        value={editedRecipe.description}
                        onChange={(e) =>
                            setEditedRecipe({
                                ...editedRecipe,
                                description: e.target.value,
                            })
                        }
                    />
                </div>
            </div>
            <div className="add__bottom">
                <div className="add__col">
                    <h2 className="add__hdl">Instructions</h2>
                    <div className="input__row">
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
                        <button
                            onClick={handleAddingInstruction}
                            className="icon__container"
                        >
                            <img src={Add} alt="" className="icon" />
                        </button>
                    </div>
                    <div>
                        <ol>
                            {editedRecipe.instructions.map(
                                (instruction, index) => (
                                    <li key={index}>
                                        {instruction}
                                        <img
                                            src={Edit}
                                            alt=""
                                            className="icon icon--small"
                                            onClick={() =>
                                                handleEditInstruction(index)
                                            }
                                        />
                                        <img
                                            src={TrashCan}
                                            alt=""
                                            className="icon icon--small"
                                            onClick={() =>
                                                handleDeletingInstruction(index)
                                            }
                                        />
                                    </li>
                                )
                            )}
                        </ol>
                    </div>
                </div>
                <div className="add__col">
                    <h2 className="add__hdl">Ingredients</h2>
                    <div className="input__row">
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
                        <button
                            onClick={handleAddingIngredient}
                            className="icon__container "
                        >
                            <img src={Add} alt="" className="icon" />
                        </button>
                    </div>
                    <div>
                        <ol>
                            {editedRecipe.ingredients.map(
                                (ingredient, index) => (
                                    <li key={index}>
                                        {ingredient}
                                        <img
                                            src={Edit}
                                            alt=""
                                            className="icon icon--small"
                                            onClick={() =>
                                                handleEditIngredient(index)
                                            }
                                        />
                                        <img
                                            src={TrashCan}
                                            alt=""
                                            className="icon icon--small"
                                            onClick={() =>
                                                handleDeletingIngredient(index)
                                            }
                                        />
                                    </li>
                                )
                            )}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditRecipe;
