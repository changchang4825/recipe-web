<script lang="ts">
    import { page } from "$app/stores";
    export let data;

    let ingredientsList: string[] = [];
    const totalPages = 75;
    $: pageNum = Number($page.params.pageNum);

    function addToList(newItem: string) {
        if (!ingredientsList.includes(newItem)) {
            ingredientsList = [...ingredientsList, newItem];
        }
    }

    function removeFromList(index: number) {
        ingredientsList = ingredientsList.filter((_, i) => i !== index);
    }
</script>

<div class="m-4">
    <h1 class="mb-3">Ingredients</h1>

    {#each data.ingredients as ingredient}
        <p>
            <button on:click={() => addToList(ingredient.name)} class="underline text-sky-900">{ingredient.name}</button>
        </p>
    {/each}
    
    <div class="pagination mt-3 mb-3">
        {#each Array(totalPages) as _, idx}
            <a
                href="/ingredients/{idx + 1}"
                class={pageNum === idx + 1 ? "text-emerald-300" : ""}
            >
                {idx + 1}
            </a>
        {/each}
    </div>
    
    <p class="mb-3"><a href="../recipes/{ingredientsList.toString()}">검색</a></p>
    
    {#each ingredientsList as item, index}
        <span>{item}</span>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <span on:click={() => removeFromList(index)}>❌</span>
        <br>
    {/each}
</div>

