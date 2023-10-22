import React, {useRef, useState} from "react";
import './styles/App.css';
import PostList from "./components/PostList/PostList";
import PostForm from "./components/UI/PostForm/PostForm";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "JavaScript", body: "Description"},
        {id: 2, title: "JavaScript 2", body: "Description"},
        {id: 3, title: "JavaScript", body: "Description"},
        {id: 4, title: "JavaScript 4", body: "Description"},
        {id: 5, title: "JavaScript", body: "Description"},
        {id: 6, title: "JavaScript", body: "Description"},
    ])

    const addPostHandler = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

  return (
    <div className="App">
        <PostForm onAddPost={addPostHandler} />
        <PostList remove={removePost} posts={posts} title="Posts list JS"/>
    </div>
  );
}

export default App;
