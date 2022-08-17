<script lang="ts">
    export let count;
    export let average;
</script>

<main>
    <div class="stats">
        <h3>Reviews: {count}</h3>
        <h3>Average rating: {average.toFixed(2)}</h3>
    </div>
</main>

<style>
    .stats {
        display: flex;
        justify-content: space-between;
    }
</style>
