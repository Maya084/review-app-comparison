<script lang="ts">
    import Feedback from "./Feedback.svelte";

    export let feedbacks = [];
</script>

<main>
{#each feedbacks as fb (fb.id)}
    
<Feedback item={fb} on:delete-feedback/>

{/each}
</main>

