<script lang="ts">
    import Button from "./Button.svelte";
    import Card from "./Card.svelte";
    import RatingSelect from "./RatingSelect.svelte";

    let minValue = 10; //min length for message
    let text = "";
    let rating = 10;
    $: btnDisabled = text.trim().length < minValue;
</script>

<main>
    <Card>
        <RatingSelect />
        <header>
            <h2>How would you rate your service with us?</h2>
        </header>
        <form>
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
