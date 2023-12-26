import React from 'react';
import Card, {CardVariant} from "./components/Card";
import {IUser} from "./types/types";
import UserList from "./components/UserList ";

const App = () => {
    const users: IUser[] = [
        {id: 1, name: 'Bohdan', email: 'bohdan@i.ua', address: {city: 'Lutsk', street: 'Voli', zipcode: '123'}},
        {id: 2, name: 'Sasha', email: 'sasha@i.ua', address: {city: 'Lutsk', street: 'Kovelska', zipcode: '123'}},
    ];
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