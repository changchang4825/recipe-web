export async function load({ params, fetch }) {
    const pageNum = Number(params.pageNum);

    async function getIngredients(pageNum: number) {
        const res = await fetch(`http://localhost:3000/ingredients?page=${pageNum}`);
        const data = await res.json();

        return data;
    }

    return {
        ingredients: await getIngredients(pageNum)
    };
}