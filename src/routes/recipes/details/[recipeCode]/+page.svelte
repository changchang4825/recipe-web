<script>
    export let data;
</script>

<h1>{data.informations.name}</h1><br>
<img src="{data.informations.imageURL}" alt=""><br>
<p>{data.informations.summary}</p><br>
<p>분류: {data.informations.category}</p>
<p>난이도: {data.informations.difficulty}</p>
<p>인분: {data.informations.servings}</p>
<p>시간: {data.informations.time}</p><br>

{#each data.orders as order}
    <p>{order.order}. {order.description}</p>
    <img src="{order.imageURL}" alt="">
    <br><br>
{/each}