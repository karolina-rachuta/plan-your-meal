import React, { useContext, useState } from 'react';
import Add from '../../assets/add_plus.png';
import Edit from '../../assets/edit_modify_icon.png';
import TrashCan from '../../assets/trash_can_icon.png';
import { RecipeContext } from '../../contex/RecipeContext';
import { saveRecipeToLocalStorage } from '../../helpers/manageLocalStorage';

function EditRecipe({
    handleScreenChange,
}: {
    handleScreenChange: (value: number) => void;
}) {
    const context = useContext(RecipeContext);

    if (!context) {
        throw Error('Context is undefined');
    }
    const { editedRecipe, setEditedRecipe, updateRecipeInList } = context;

    const [newInstruction, setNewInstruction] = useState<string>('');
    const [newIngredient, setNewIngredient] = useState<string>('');
    const [editingIndex, setEditingIndex] = useState<number | null>(null);

    function handleSavingRecipe() {
        if (!editedRecipe) return;
        saveRecipeToLocalStorage(editedRecipe);
        updateRecipeInList(editedRecipe);
        setEditedRecipe(null);
        handleScreenChange(1);
    }

    function handleAddingInstruction() {
        if (!editedRecipe) return;
        if (editingIndex !== null) {
            const updatedInstructions = [...editedRecipe.instructions];
            updatedInstructions[editingIndex] = newInstruction;
            setEditedRecipe({
                ...editedRecipe,
                instructions: updatedInstructions,
            });
            setEditingIndex(null);
        } else if (newInstruction) {
            setEditedRecipe({
                ...editedRecipe,
                instructions: [...editedRecipe.instructions, newInstruction],
            });
        }
        setNewInstruction('');
    }

    function handleAddingIngredient() {
        if (!editedRecipe) return;
        if (editingIndex !== null) {
            const updatedIngredients = [...editedRecipe.ingredients];
            updatedIngredients[editingIndex] = newIngredient;
            setEditedRecipe({
                ...editedRecipe,
                ingredients: updatedIngredients,
            });
            setEditingIndex(null);
        } else if (newIngredient) {
            setEditedRecipe({
                ...editedRecipe,
                ingredients: [...editedRecipe.ingredients, newIngredient],
            });
        }
        setNewIngredient('');
    }

    function handleDeletingIngredient(index: number) {
        if (!editedRecipe) return;
        const updatedIngredients = editedRecipe.ingredients.filter(
            (_, id) => id !== index
        );
        setEditedRecipe({
            ...editedRecipe,
            ingredients: updatedIngredients,
        });
    }

    function handleDeletingInstruction(index: number) {
        if (!editedRecipe) return;
        const updatedInstructions = editedRecipe.instructions.filter(
            (_, id) => id !== index
        );
        setEditedRecipe({
            ...editedRecipe,
            instructions: updatedInstructions,
        });
    }

    function handleEditInstruction(index: number) {
        setEditingIndex(index);
        if (!editedRecipe) return;
        setNewInstruction(editedRecipe.instructions[index] ?? '');
    }

    function handleEditIngredient(index: number) {
        setEditingIndex(index);
        if (!editedRecipe) return;
        setNewIngredient(editedRecipe.ingredients[index] ?? '');
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
                            <img src={Add} alt="Plus" className="icon" />
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
                                            alt="Pencil"
                                            className="icon icon--small"
                                            onClick={() =>
                                                handleEditInstruction(index)
                                            }
                                        />
                                        <img
                                            src={TrashCan}
                                            alt="Trash can"
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
                            <img src={Add} alt="Plus" className="icon" />
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
                                            alt="Pencil"
                                            className="icon icon--small"
                                            onClick={() =>
                                                handleEditIngredient(index)
                                            }
                                        />
                                        <img
                                            src={TrashCan}
                                            alt="Trash can"
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
