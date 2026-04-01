import type { Recipe } from '../context/RecipeContext';
import type { Schedule } from '../context/ScheduleContext';
import { safeJsonParse } from './safeJsonParse';

const recipeName = 'recipes';
const scheduleName = 'schedules';

export const saveRecipeToLocalStorage = (recipe: Recipe) => {
    const recipes = safeJsonParse<Recipe[]>(
        localStorage.getItem(recipeName) || '[]',
        []
    );

    const existingIndex = recipes.findIndex((r) => r.id === recipe.id);

    if (existingIndex >= 0) {
        recipes[existingIndex] = recipe;
    } else {
        recipes.push(recipe);
    }

    localStorage.setItem(recipeName, JSON.stringify(recipes));
};

export const saveScheduleToLocalStorage = (schedule: Schedule) => {
    const schedules = safeJsonParse<Schedule[]>(
        localStorage.getItem(scheduleName) || '[]',
        []
    );

    const existingIndex = schedules.findIndex((s) => s.id === schedule.id);

    if (existingIndex >= 0) {
        schedules[existingIndex] = schedule;
    } else {
        schedules.push(schedule);
    }

    localStorage.setItem(scheduleName, JSON.stringify(schedules));
};

export const getScheduleFromLocalStorage = (): Schedule[] => {
    return safeJsonParse<Schedule[]>(
        localStorage.getItem(scheduleName) || '[]',
        []
    );
};

export const getRecipesFromLocalStorage = (): Recipe[] => {
    return safeJsonParse<Recipe[]>(
        localStorage.getItem(recipeName) || '[]',
        []
    );
};

export const deleteRecipeFromLocalStorage = (id: string) => {
    const recipes = safeJsonParse<Recipe[]>(
        localStorage.getItem(recipeName) || '[]',
        []
    );

    const updatedRecipes = recipes.filter((r) => r.id !== id);
    localStorage.setItem(recipeName, JSON.stringify(updatedRecipes));
};

export const deleteScheduleFromLocalStorage = (id: string) => {
    const schedules = safeJsonParse<Schedule[]>(
        localStorage.getItem(scheduleName) || '[]',
        []
    );

    const updatedSchedules = schedules.filter((s) => s.id !== id);
    localStorage.setItem(scheduleName, JSON.stringify(updatedSchedules));
};
