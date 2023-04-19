<script>
    export let data;
</script>

<div class="m-4">
    <h1 class="mb-3">바로 만들 수 있는 요리법</h1><br>
    {#each data.recipes.availableRecipes as recipe}
        <p><a href="../recipes/details/{recipe.recipeCode}">{recipe.name}</a></p>
    {/each}
    <br><br>
    
    <h1 class="mt-3 mb-3">도전해볼 수 있는 요리법</h1><br>
    {#each data.recipes.recommendedRecipes as recipe}
        <p><a href="../recipes/details/{recipe.recipeCode}">
            {recipe.name} &nbsp;&nbsp;[부족한 식재료: {recipe.neededIngredients}] ({recipe.neededNum}개)
        </a></p>
    {/each}
</div>
