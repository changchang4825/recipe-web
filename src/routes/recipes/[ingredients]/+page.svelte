<script>
    export let data;
</script>

<h1>Available recipes</h1><br>
{#each data.recipes.availableRecipes as recipe}
    <p><a href="../recipes/details/{recipe.recipeCode}">{recipe.name}</a></p>
{/each}
<br><br>

<h1>Recommended recipes</h1><br>
{#each data.recipes.recommendedRecipes as recipe}
    <p><a href="../recipes/details/{recipe.recipeCode}">
        {recipe.name} &nbsp;&nbsp;[부족한 식재료: {recipe.neededIngredients}] ({recipe.neededNum}개)
    </a></p>
{/each}