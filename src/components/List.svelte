<script lang="ts">
    import Feedback from "./Feedback.svelte";
    import { fade, scale } from "svelte/transition";
    import { FeedbackStore } from "../stores/feedback";

    //******* long version for subscribe/unsunscribe
    // let feedbacks;
    // const unsubscribe = FeedbackStore.subscribe((data) => (feedbacks = data));
    // onDestroy(() => {unsubscribe()});
</script>

<main>
    {#each $FeedbackStore as fb (fb.id)}
        <div in:scale={{ duration: 500 }} out:fade={{ duration: 500 }}>
            <Feedback item={fb}/>
        </div>
    {/each}
</main>
