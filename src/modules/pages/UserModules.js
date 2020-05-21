import React from 'react';
import { useParams } from 'react-router-dom';

import ModuleList from '../components/ModuleList';

const DUMMY_MODULES = [
    {
        id:'m1',
        title:'Méthodes numériques pour l’ingénieur et Analyse des Données',
        description:'Un module nécessaire pour la formation d\'un ingénieur' ,
        imageUrl: 'https://previews.123rf.com/images/9george/9george1608/9george160800366/61775862-math-lin%C3%A9aire-math%C3%A9matiques-%C3%A9ducation-cercle-fond-avec-des-parcelles-g%C3%A9om%C3%A9triques-des-formules-et-calcul-desig.jpg',
        creator: 'u1'
    }, 
    {
        id:'m2',
        title:'Empire State Building',
        description:'One of the most famous sky scrappers in the world!',
        imageUrl: 'https://www.great-towers.com/sites/default/files/2019-07/tower_0.jpg',
        creator: 'u2'
    }

];

const UserModules = () =>{
    const userId = useParams().userId;
    const loadedModules = DUMMY_MODULES.filter(Module => Module.creator === userId );
    return <ModuleList items={loadedModules}/>
};

export default UserModules;