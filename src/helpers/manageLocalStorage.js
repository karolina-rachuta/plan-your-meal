export const savingToLocalStorage = (key, value) => {
    const recipe = localStorage.setItem(key, JSON.stringify(value));
}

export const saveRecipeToLocalStorage = (recipe) => {
    const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    recipes.push(recipe);
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

export const deleteFromLocalStorage = (key) => {
    localStorage.removeItem(key);
}