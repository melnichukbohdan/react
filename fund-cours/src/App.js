import React, {useMemo, useState} from "react";
import './styles/App.css';
import PostList from "./components/PostList/PostList";
import PostForm from "./components/UI/PostForm/PostForm";
import PostFilter from "./components/PostFilter/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/Button/MyButton";


function App(factory, deps) {
    const [posts, setPosts] = useState([
        {id: 1, title: "AN", body: "bLa"},
        {id: 2, title: "PHP", body: "La"},
        {id: 3, title: "Java", body: "A"},
    ])

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)

    // This logic blocks call the resort of Posts array on entering in the Search input.
    const sortedPosts = useMemo(() => {
        if(filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;
    }, [filter.sort, posts]);

    // Filters posts by search query.
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts]);

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
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Posts list JS"/>
    </div>
  );
}

export default App;
