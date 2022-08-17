<script lang="ts">
    import { FeedbackStore } from "../stores/feedback";

    $: count = $FeedbackStore.length;
    $: average =
        $FeedbackStore.reduce((a, { rating }) => a + rating, 0) /
        $FeedbackStore.length;
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
