import React, {FC} from 'react';
import {IUser} from "../types/types";

interface UserItemProps {
    user: IUser
}

const UserItem: FC<UserItemProps> = ({user}) => {
    return (
        <div style={{padding: 15, border: '1px solid grey'}}>
            {user.id}. {user.name},
            lives in {user.address.city},
            on {user.address.street} street.
        </div>
    );
};

export default UserItem;