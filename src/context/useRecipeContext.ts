import { useContext } from 'react';
import { RecipeContext } from './RecipeContext';

function useRecipeContext() {
    const context = useContext(RecipeContext);
    if (!context) {
        throw new Error('Context is undefines, please provide context');
    }
    return context;
}

export default useRecipeContext;
