import React, {useEffect, useMemo, useState} from "react";
import './styles/App.css';
import PostList from "./components/PostList/PostList";
import PostForm from "./components/UI/PostForm/PostForm";
import PostFilter from "./components/PostFilter/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/Button/MyButton";
import {usePosts} from "./components/hooks/usePosts";
import axios from "axios";

function App(factory, deps) {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    useEffect(() => {
        fetchPosts();
    }, []);

    const addPostHandler = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    async function fetchPosts() {
        const responce = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPosts(responce.data)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

  return (
    <div className="App">
        <button onClick={fetchPosts}>GET POSTS</button>
        <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>Add post</MyButton>
        <MyModal visible={modal} setVisible={setModal}>
            <PostForm onAddPost={addPostHandler} />
        </MyModal>
        <hr style={{margin: '15px 0'}} />
        <PostFilter
            filter={filter}
            setFilter={setFilter}
        />
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Posts list JS"/>
    </div>
  );
}

export default App;
