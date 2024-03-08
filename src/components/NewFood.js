import { useState } from "react";
import './NewFood.css';
import { v4 as uuidv4 } from 'uuid';


const NewFood = (props) => {
    const [foodName, setFoodName] = useState('');
    const [calorie, setCalorie] = useState(0);
    const [showForm, setShowForm] = useState(false);

    const submitHandler = (event) => {
        event.preventDefault();
        props.onAdd({ id: uuidv4(), foodName, calorie });
        document.querySelector('button').classList.remove();
        setShowForm(showForm => !showForm);
        setFoodName('');
        setCalorie(0);

    };

    const nameChangeHandler = (event) => {
        setFoodName(foodName => foodName = event.target.value);
    };

    const calorieChangeHandler = (event) => {
        setCalorie(calorie => calorie = event.target.value);
    };

    const clickHandler = () => {
        setShowForm(showForm => showForm = !showForm);
    };

    return (
        <>
            <button onClick={clickHandler}>Add a New Food!/Cancel</button>
            {showForm && <form onSubmit={submitHandler}>
                <label htmlFor="foodName">Enter the name of product</label>
                <input id="foodName" type="string" placeholder="name of food"
                    onChange={nameChangeHandler} value={foodName}></input>
                <label htmlFor="foodCalories">Enter the Calories</label>
                <input id="foodCalories" type="number" placeholder="Calories of food"
                    onChange={calorieChangeHandler} value={calorie}></input>
                <button type='submit'>Submit</button>
            </form>}

        </>
    );
};

export default NewFood;