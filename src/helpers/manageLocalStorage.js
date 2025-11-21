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
    const currentScheduleId = schedule.id;
    const existingIndex = schedules.findIndex((s) => s.id === currentScheduleId);

    if (existingIndex >= 0) {
        schedules[existingIndex] = schedule;
    } else {
        schedules.push(schedule);
    }
    localStorage.setItem('schedules', JSON.stringify(schedules));
};

export const getScheduleFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('schedules')) || [];
}
export const getRecipesFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('recipes')) || [];
}

export const deleteRecipeFromLocalStorage = (id) => {
    const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    const updatedRecipes = recipes.filter((r) => r.id !== id);
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
};

export const deleteScheduleFromLocalStorage = (id) => {
    const schedules = JSON.parse(localStorage.getItem('schedules')) || [];
    const updatedSchedules = schedules.filter((s) => s.id !== id);
    localStorage.setItem('schedules', JSON.stringify(updatedSchedules));
}