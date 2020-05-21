import React from 'react';

import UsersList from '../components/UsersList';
const Users = () =>{
    const USERS = [
        {
            id:'u1',
            name: 'Mohamed Addam',
            image:'https://i1.rgstatic.net/ii/profile.image/346778609176576-1459689871732_Q512/M_Addam.jpg', 
            modules: 3
        }
    ];
    return <UsersList items={USERS}/>;
};

export default Users;