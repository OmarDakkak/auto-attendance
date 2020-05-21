import React, { useState } from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import ReactVirtualizedTable from '../../etudiants/Etudiants';
import './ModuleItem.css';

const ModuleItem = props =>{
    const [showMap, setShowMap] = useState(false);

    const openMapHandler = () => setShowMap(true);
    const closeMapHandler = () => setShowMap(false);

    return (
        <React.Fragment>
            <Modal 
                show={showMap} 
                onCancel={closeMapHandler} 
                header={'Liste des étudiants :'} 
                contentClass="module-item__modal-content"
                footerClass="module-item__modal-actions"
                footer={<Button onClick={closeMapHandler}>Close</Button>}
            >
                <div className="map-container">
                    <ReactVirtualizedTable/>
                </div>
            </Modal>
            <li className="module-item">
                <Card className="module-item__content">
                    <div className="module-item__image">
                        <img src={props.image} alt={props.title}/>
                    </div>
                    <div className="module-item__info">
                        <h2>{props.title}</h2>
                        <p>{props.description}</p>
                    </div>
                    <div className="module-item__actions">
                        <Button inverse onClick={openMapHandler}>Etudiants</Button>
                        <Button>Nouvelle Abscence</Button>
                        <Button to={`/Modules/${props.id}`} danger>Modifier une abscence</Button>
                    </div>
                </Card>
            </li>
        </React.Fragment>
    );
};

export default ModuleItem;