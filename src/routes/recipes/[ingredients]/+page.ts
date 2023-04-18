export async function load({ params, fetch }) {
    const ingredients = params.ingredients;

    async function getRecipes(ingredients: string) {
        const res = await fetch(`http://localhost:3000/informations?ingredients=${ingredients}`);
        const data = await res.json();

        return data;
    }

    return {
        recipes: await getRecipes(ingredients)
    };
}