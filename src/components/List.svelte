<script lang="ts">
    import Feedback from "./Feedback.svelte";
    import { fade, scale } from "svelte/transition";

    export let feedbacks = [];
</script>

<main>
    {#each feedbacks as fb (fb.id)}
        <div transition:fade>
            <Feedback item={fb} on:delete-feedback />
        </div>
    {/each}
</main>
