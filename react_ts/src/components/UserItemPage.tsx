import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
// @ts-ignore
import {useParams, useNavigate} from "react-router-dom";

interface UserItemPageParams {
    [id: string]: string | undefined;
}

const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null)
    const params = useParams<UserItemPageParams>()
    const history = useNavigate();
    useEffect(() => {
        fetchUser();
    }, []);

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id);
            setUser(response.data)
        } catch (e) {
            alert(e)
        }
    }
    return (
        <div>
            <button onClick={() => history('/users')}>Back</button>
            <h2>{user?.name} user page</h2>
            <div>
                {user?.email}
            </div>
            <div>
                {user?.address.city}
                {user?.address.street}
                {user?.address.zipcode}
            </div>
        </div>
    );
};

export default UserItemPage;