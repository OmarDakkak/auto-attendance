import React from 'react';

import UserItem from './UserItem';
import Card from '../../shared/components/UIElements/Card';
import './UsersList.css';

const UsersList = props =>{
    if (props.items.length === 0) {
        return (
            <div className="center">
                <Card>
                    <h2>No Professors found!</h2>
                </Card>
            </div>
        );
    }

    return (
        <React.Fragment>
            <h1 className="title-profs">La liste des professeurs:</h1>
            <ul className="users-list">
                {props.items.map(user =>(
                    <UserItem 
                    key={user.id} 
                    id={user.id} 
                    image={user.image} 
                    name={user.name} 
                    moduleCount={user.modules}
                    />
                ))}
            </ul>
        </React.Fragment>
    );
};

export default UsersList;