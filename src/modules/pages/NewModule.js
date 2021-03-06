import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './ModuleForm.css';



const NewModule = () => {

   const [formState, inputHandler] = useForm(
        {
          title:{
                value: '',
                isValid: false
            },
          description:{
                value: '',
                isValid: false
            }
        }, false
        );

    

    const ModuleSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs); // send this to the backend!
    };

    return (
        <form className="module-form" onSubmit={ModuleSubmitHandler}>
            <Input 
                id="title"
                element="input"
                type="text" 
                label="Intitulé du Module" 
                validators={[VALIDATOR_REQUIRE()]} 
                errorText="Please enter a valid title."
                onInput={inputHandler}
            />
            <Input 
                id="description"
                element="textarea"
                label="Description du Module" 
                validators={[VALIDATOR_MINLENGTH(5)]} 
                errorText="Please enter a valid description (at least 5 characters)."
                onInput={inputHandler}
            />
            <Button type="submit" disabled={!formState.isValid}>Add Module!</Button>
        </form>
    );
};

export default NewModule;