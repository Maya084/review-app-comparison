<script lang="ts">
    import { createEventDispatcher } from "svelte";

    let radioButtonValues = [];
    for (let i = 1; i <= 10; i++) {
        radioButtonValues = [
            ...radioButtonValues,
            {
                id: `num${i}`,
                value: i,
            },
        ];
    }

    const dispatch = createEventDispatcher();

    const onChange = (e) => {
        dispatch("rating-select", e.currentTarget.value);
    };
    export let selected = 10;
</script>

<main>
    <ul class="rating">
        {#each radioButtonValues as rating}
            <li>
                <input
                    type="radio"
                    id={rating.id}
                    name="rating"
                    value={rating.value}
                    on:change={onChange}
                    checked={selected === rating.value}
                />
                <label for={rating.id}>{rating.value}</label>
            </li>
        {/each}
    </ul>
</main>

<style>
    .rating {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .rating li {
        position: relative;
        background: #f4f4f4;
        width: 50px;
        height: 50px;
        padding: 10px;
        text-align: center;
        border-radius: 50%;
        font-size: 19px;
        border: 1px #eee solid;
        transition: 0.3s;
    }

    .rating li label {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 50px;
        height: 50px;
        padding: 10px;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
    }

    .rating li:hover {
        background: #cd2d5b;
        color: #fff;
    }

    /* Make actual radio select invisible */
    [type="radio"] {
        opacity: 0;
    }

    /* Use the sibling select */
    [type="radio"]:checked ~ label {
        background: #cd2d5b;
        color: #fff;
    }
</style>
