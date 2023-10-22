import React, {useState} from 'react';
import MyInput from "../input/MyInput";
import MyButton from "../Button/MyButton";

const PostForm = ({onAddPost}) => {

    const [post, setPost] = useState({title: '', body: ''});

    // const bodyInputRef = useRef();
    const addNewPost = (e) => {
        e.preventDefault();
        onAddPost({...post, id: Date.now()});
        setPost({title: '', body: ''});

    }
    return (
        <form>
            {/*controlled component*/}
            <MyInput type="text"
                     placeholder='Title'
                     value={post.title}
                     onChange={e => setPost({...post, title: e.target.value})}
            />
            {/*unmanaged component*/}
            {/*<MyInput ref={bodyInputRef} type="text" placeholder='Description' />*/}
            <MyInput type="text"
                     placeholder='Description'
                     value={post.body}
                     onChange={e => setPost({...post, body: e.target.value})}/>
            <MyButton onClick={addNewPost} >Create</MyButton>
        </form>
    );
};

export default PostForm;