<script lang="ts">
    import Button from "./Button.svelte";
    import Card from "./Card.svelte";
    import RatingSelect from "./RatingSelect.svelte";
    import { v4 as uuidv4 } from "uuid";
import { FeedbackStore } from "../stores/feedback";
   
    let minValue = 10; //min length for message
    let text = "";
    let rating = 10;
    $: btnDisabled = text.trim().length < minValue;

    const handleSelect = (e) => (rating = e.detail);

    const handleSubmit = () => {
        if (text.trim().length < minValue) {
            return;
        }
        const newFeedback = {
            id: uuidv4(),
            comment: text,
            rating: +rating,
        };

		FeedbackStore.update((currentFeedbackList)=>{
            return [newFeedback, ...currentFeedbackList]
        })
        rating = 10;
        text = "";
	};
</script>

<main>
    <Card>
        <RatingSelect on:rating-select={handleSelect} selected={rating}/>
        <header>
            <h2>How would you rate your service with us?</h2>
        </header>
        <form on:submit|preventDefault={handleSubmit}>
            <div class="input-group">
                <input
                    bind:value={text}
                    type="text"
                    placeholder="Tell us something that keeps you coming back"
                />
                <Button type="submit" disabled={btnDisabled}>Send</Button>
            </div>
            {#if btnDisabled}
                <p class="message">
                    The review must be at least 10 characters long.
                </p>
            {/if}
        </form>
    </Card>
</main>

<style>
    header {
        max-width: 400px;
        margin: auto;
    }

    header h2 {
        font-size: 22px;
        font-weight: 600;
        text-align: center;
    }

    .input-group {
        display: flex;
        flex-direction: row;
        border: 1px solid #ccc;
        padding: 8px 10px;
        border-radius: 8px;
        margin-top: 15px;
    }

    input {
        flex-grow: 2;
        border: none;
        font-size: 16px;
    }

    input:focus {
        outline: none;
    }

    .message {
        padding-top: 10px;
        text-align: center;
        color: rebeccapurple;
    }
</style>
