<script lang="ts">
	import List from "./components/List.svelte";
	import Stats from "./components/Stats.svelte";

	let feedbacks = [
		{
			id: 1,
			rating: 10,
			comment:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia commodi hic quos tempora temporibus harum. Illum a nobis harum ullam.",
		},
		{
			id: 2,
			rating: 9,
			comment: "Lorem ipsum dolor sit amet. Illum a nobis harum ullam.",
		},
		{
			id: 3,
			rating: 7,
			comment:
				"Illum a nobis harum ullam. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
		},
	];

	$: count = feedbacks.length;
	$: average =
		feedbacks.reduce((a, { rating }) => a + rating, 0) / feedbacks.length;

	const deleteFeedback = (e) => {
		const itemId = e.detail;
		feedbacks = feedbacks.filter((item) => item.id !== itemId);
	};
</script>

<main class="container">
	<Stats {count} {average} />
	<List {feedbacks} on:delete-feedback={deleteFeedback} />
</main>

<style>
</style>
