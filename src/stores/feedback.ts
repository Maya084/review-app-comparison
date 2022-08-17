import { writable } from "svelte/store";

export const FeedbackStore = writable([
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
])