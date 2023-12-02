import React, {useEffect, useState} from "react";
import './styles/App.css';
import PostList from "./components/PostList/PostList";
import PostForm from "./components/UI/PostForm/PostForm";
import PostFilter from "./components/PostFilter/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/Button/MyButton";
import {usePosts} from "./components/hooks/usePosts";
import PostService from "./components/API/PostService";
import Loader from "./components/UI/Loader/Loader";
import {useFetching} from "./components/hooks/useFetching";

function App() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const posts = await PostService.getAll();
        setPosts(posts);
    })

    // console.log(fetchPosts)

    useEffect(() => {
        fetchPosts();
    }, []);

    const addPostHandler = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

  return (
    <div className="App">
        <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>Add post</MyButton>
        <MyModal visible={modal} setVisible={setModal}>
            <PostForm onAddPost={addPostHandler} />
        </MyModal>
        <hr style={{margin: '15px 0'}} />
        <PostFilter
            filter={filter}
            setFilter={setFilter}
        />
        {postError &&
            <h1>Error {postError}</h1>
        }
        {isPostsLoading
            ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader /></div>
            : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Posts list JS"/>
        }
    </div>
  );
}

export default App;
