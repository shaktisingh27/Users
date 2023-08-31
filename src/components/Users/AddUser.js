import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from './AddUser.module.css';
import ErrorModal from "../UI/ErrorModal";


const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')

    const [error, setError] = useState();


    const addUserHandler = (event) => {
        event.preventDefault();
        //validation logic is user name or age is entered that is has value
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please Enter a Valid  name and age (non empty value).'
            })
            return;
        }
        //if entered age is valid that is>1
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid Age',
                message: 'Please Enter a Valid age (age>0).'
            })
            return
        }

        console.log(enteredUsername, enteredAge);
        props.onAddUser(enteredUsername, enteredAge)
        setEnteredUsername('');
        setEnteredAge('');
    }

    const userNameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }
    const handleError = () => {
        setError(null);
    }
    
    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onErrorHandle={handleError}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler} >
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        value={enteredUsername}
                        id="username"
                        onChange={userNameChangeHandler}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        type="number"
                        value={enteredAge}
                        id="age"
                        onChange={ageChangeHandler}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;