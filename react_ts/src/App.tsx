import React, {useEffect, useState} from 'react';
import Card, {CardVariant} from "./components/Card";
import {IUser} from "./types/types";
import UserList from "./components/UserList ";
import axios from "axios";

const App = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        fetchUsers();
    }, []);

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data)
        } catch (e) {
            alert(e)
        }
    }

    console.log(users)
    return (
        <div>
            <Card
              onClick={(num) => console.log('click', num)}
              variant={CardVariant.outlined}
              width='200px' height='200px'>
              <button>button</button>
            </Card>
            <UserList users={users} />

        </div>
    );
};

export default App;