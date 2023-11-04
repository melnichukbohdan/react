import React, {useState} from "react";
import './styles/App.css';
import PostList from "./components/PostList/PostList";
import PostForm from "./components/UI/PostForm/PostForm";
import MySelect from "./components/UI/Select/MySelect";
import MyInput from "./components/UI/input/MyInput";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "AN", body: "bLa"},
        {id: 2, title: "PHP", body: "La"},
        {id: 3, title: "Java", body: "A"},
    ])

    const [selectedSort, setSelectedSort] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    function getSortedPosts() {
        console.log('resort')
        if(selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts;
    }

    const sortedPost = getSortedPosts();

    const addPostHandler = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPost = (sort) => {
        setSelectedSort(sort)
    }

  return (
    <div className="App">
        <PostForm onAddPost={addPostHandler} />
        <hr style={{margin: '15px 0'}} />
        <div>
            <MyInput
                placeholder={'Search...'}
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
            />
            <MySelect
                defaultValue={'Sort by'}
                options={[
                    {value: 'title', name: 'Name'},
                    {value: 'body', name: 'Description'},
                ]}
                value={selectedSort}
                onChange={sortPost}
            />
        </div>
        {posts.length !== 0
            ? <PostList remove={removePost} posts={sortedPost} title="Posts list JS"/>
            : <h2 style={{textAlign: "center"}}>Posts was not found</h2>
        }

    </div>
  );
}

export default App;
