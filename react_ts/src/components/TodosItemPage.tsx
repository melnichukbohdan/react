import React, {FC, useEffect, useState} from 'react';
import {ITodo} from "../types/types";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

interface TodoItemPageParams {
    [id: string]: string | undefined;
}
const TodosItemPage: FC = () => {

    const [todo, setTodo] = useState<ITodo | null>(null)
    const params = useParams<TodoItemPageParams>()
    const history = useNavigate();
    useEffect(() => {
        fetchTodo()
    }, []);

    async function fetchTodo() {
        try {
            const response = await axios.get<ITodo>('https://jsonplaceholder.typicode.com/todos/' + params.id );
            setTodo(response.data)
        } catch (e) {
            alert(e)
        }
    }
    return (
        <div>
            <button onClick={() => history('/todos')}>Back</button>
            <h2>TODO id: {todo?.id}</h2>
            <h2>TODO name: {todo?.title}</h2>
            <label>DODO completed: </label>
            <input type="checkbox" checked={todo?.completed}/>
        </div>
    );
};

export default TodosItemPage;