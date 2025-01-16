export const savingToLocalStorage = (key, value) => {
    const recipe = localStorage.setItem(key, JSON.stringify(value));
}

export const readFromLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    return JSON.parse(data)
}

export const deleteFromLocalStorage = (key) => {
    localStorage.removeItem(key);
}