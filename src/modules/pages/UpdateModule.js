import React from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';

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
        title:'POO JAVA',
        description:'One of the most famous sky scrappers in the world!',
        imageUrl: 'https://www.great-towers.com/sites/default/files/2019-07/tower_0.jpg',
        creator: 'u2'
    }

];

const UpdateModule = () =>{
    const moduleId = useParams().moduleId;

    const identifiedModule = DUMMY_MODULES.find(m => m.id === moduleId);
    if(!identifiedModule) {
        return (
            <div className="center">
                <h2>Aucun module n'a été trouvé!!</h2>
            </div>
            );
    }

    return(
        <form>
            <Input
             id="title"
             element="input" 
             type="text"
             label="Intitulé du Module"
             validators={[VALIDATOR_REQUIRE()]}
             errorText = "Please enter a valid title!"
             onInput={()=>{}}
             value = {identifiedModule.title}
             valid= {true}
            />
            <Input
             id="description"
             element="textarea" 
             label="Description du Module"
             validators={[VALIDATOR_MINLENGTH(5)]}
             errorText = "Please enter a valid description (min 5 characters)!"
             onInput={()=>{}}
             value = {identifiedModule.description}
             valid= {true}
            />
            <Button type="submit" disabled={true}>
                Update module
            </Button>
        </form>
    );
};

export default UpdateModule;