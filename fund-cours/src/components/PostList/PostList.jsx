import React from 'react';
import PostItem from "../PostItem/PostItem";

const PostList = ({posts, title, remove}) => {
    console.log(posts)

    return (
        <div>
            <h1 style={{textAlign:"center"}}>
                {title}
            </h1>
            {posts.map((post, index) =>
                <PostItem remove={remove} number={index +1} post={post} key={post.id} />
            )}
        </div>
    );
};

export default PostList;