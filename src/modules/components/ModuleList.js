import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import './ModuleList.css';
import ModuleItem from './ModuleItem';

const ModuleList = props =>{
    if(props.items.length === 0 ){
        return (
            <div className="Module-list center">
                <Card> 
                    <h2>No Modules found, maybe create one?</h2>
                    <button>Share Module</button>
                </Card>
            </div>
            );
    }

    return (
        <ul className="module-list">
            {props.items.map(module => 
                <ModuleItem 
                    key={module.id} 
                    id={module.id} 
                    image={module.imageUrl} 
                    title={module.title} 
                    description={module.description} 
                    adress={module.adress} 
                    creatorId={module.creator} 
                    coordinates={module.location}
                />)}
        </ul>
    );
};

export default ModuleList;