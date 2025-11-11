export const savingToLocalStorage = (key, value) => {
    const recipe = localStorage.setItem(key, JSON.stringify(value));
}

export const saveRecipeToLocalStorage = (recipe) => {
    const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    const currentRecipeId = recipe.id;
    const existingIndex = recipes.findIndex((r) => r.id === currentRecipeId);
    //czy to id jest juz moze w recipes
    if (existingIndex >= 0) {
        // jeśli istnieje — zaktualizuj
        recipes[existingIndex] = recipe;
    } else {
        // jeśli nie ma — dodaj nowy
        recipes.push(recipe);
    }
    localStorage.setItem('recipes', JSON.stringify(recipes));
};

export const saveScheduleToLocalStorage = (schedule) => {
    const schedules = JSON.parse(localStorage.getItem('schedules')) || [];
    schedules.push(schedule);
    localStorage.setItem('schedules', JSON.stringify(schedules));
};

export const getScheduleFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('schedules')) || [];
}
export const getRecipesFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('recipes')) || [];
}

export const readFromLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    return JSON.parse(data)
}
export const deleteRecipeFromLocalStorage = (id) => {
    const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    const updatedRecipes = recipes.filter((r) => r.id !== id);
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
};

export const deleteFromLocalStorage = (key) => {
    localStorage.removeItem(key);
}