<script lang="ts">
    import Card from "./Card.svelte";
    import { createEventDispatcher } from "svelte";

    export let item;

    const dispatch = createEventDispatcher();

    const handleDelete = (itemId: number) => {
        dispatch("delete-feedback", itemId);
    };
</script>

<Card>
    <div class="num-display">
        {item.rating}
    </div>
    <button class="close" on:click={() => handleDelete(item.id)}>x</button>
    <p class="text-display">
        {item.comment}
    </p>
</Card>

<style>
    .num-display {
        position: absolute;
        top: -10px;
        left: -10px;
        width: 50px;
        color: #fff;
        border-radius: 50%;
        padding: 10px;
        text-align: center;
        background-color: rgb(157, 63, 219);
        font-size: 19px;
    }

    .close {
        position: absolute;
        top: 10px;
        right: 20px;
        cursor: pointer;
        background: none;
        border: none;
        font-size: 25px;
        font-weight: 600;
    }
</style>
