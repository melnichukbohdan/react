import {useMemo} from "react";

export const useSortedPost = (posts, sort) => {
    // This logic blocks call the resort of Posts array on entering in the Search input.
    const sortedPosts = useMemo(() => {
        if(sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts;
    }, [sort, posts]);

    return sortedPosts;
}

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPost(posts, sort);
    // Filters posts by search query.
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedPosts]);

    return sortedAndSearchedPosts;
}