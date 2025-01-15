import React, { useState } from 'react';

function NewRecipe() {
    const [recipe, setRecipe] = useState({
        name: '',
        description: '',
        instructions: [],
        ingredients: [],
    });
    const [newInstruction, setNewInstruction] = useState('');
    const [newIngredient, setNewIngredient] = useState('');

    function handleAddingInstruction() {
        setRecipe((prev) => ({
            ...prev,
            instructions: [...prev.instructions, newInstruction],
        }));
        setNewInstruction('');
    }

    function handleAddingIngredient() {
        setRecipe((prev) => ({
            ...prev,
            ingredients: [...prev.ingredients, newIngredient],
        }));
        setNewIngredient('');
    }
    return (
        <div className="maindesktop__container recipe__container">
            <div className="recipe__title">
                <h1>Add Recipe</h1>
                <button>Save and Close</button>
            </div>
            <div className="recipe__top">
                <div className="recipe__row">
                    <label htmlFor="recipe_name" className="recipe__label">
                        Recipe name
                    </label>
                    <input
                        type="text"
                        id="recipe_name"
                        className="recipe__input"
                        value={recipe.name}
                        onChange={(e) =>
                            setRecipe({ ...recipe, name: e.target.value })
                        }
                    />
                </div>
                <div className="recipe__row">
                    <label
                        htmlFor="recipe_description"
                        className="recipe__label"
                    >
                        Recipe description
                    </label>
                    <input
                        type="text"
                        id="recipe_description"
                        className="recipe__input"
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
            <div className="recipe__bottom">
                <div className="recipe__col">
                    <h2>Instructions</h2>
                    <div>
                        <input
                            type="text"
                            value={newInstruction}
                            onChange={(e) => {
                                setNewInstruction(e.target.value);
                            }}
                        />
                        <button onClick={handleAddingInstruction}>add</button>
                    </div>
                    <div>
                        <ol>
                            {recipe.instructions.map((instruction, index) => (
                                <li key={index}>{instruction}</li>
                            ))}
                        </ol>
                    </div>
                </div>
                <div className="recipe__col">
                    <h2>Ingredients</h2>
                    <div>
                        <input
                            type="text"
                            value={newIngredient}
                            onChange={(e) => {
                                setNewIngredient(e.target.value);
                            }}
                        />
                        <button onClick={handleAddingIngredient}>add</button>
                    </div>
                    <div>
                        <ol>
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewRecipe;
