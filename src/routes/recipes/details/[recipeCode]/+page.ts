export async function load({ params, fetch }) {
    const recipeCode = params.recipeCode;

    async function getRecipeInformations(recipeCode: string) {
        const res = await fetch(`http://localhost:3000/informations/${recipeCode}`);
        const data = await res.json();
        console.log(data);
        return data;
    }

    async function getRecipeOrders(recipeCode: string) {
        const res = await fetch(`http://localhost:3000/orders/${recipeCode}`);
        const data = await res.json();
        console.log(data);
        return data;
    }

    return {
        informations: await getRecipeInformations(recipeCode),
        orders: await getRecipeOrders(recipeCode)
    };
}