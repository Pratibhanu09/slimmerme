import FoodItems from "./FoodItems";
import NewFood from "./NewFood";
import { useState } from "react";

const dummy_list = [
    {
        id: 1,
        foodName: 'Banana',
        calorie: 89
    },
    {
        id: 2,
        foodName: 'Peanuts',
        calorie: 567
    },
    {
        id: 3,
        foodName: 'Rice',
        calorie: 130
    },
];

const Fitlist = () => {
    const [foodList, setFoodList] = useState(dummy_list);

    const addFoodHandler = (food) => {
        setFoodList(foodList => [...foodList, food]);
    }

    return (
        <>
            <NewFood onAdd={addFoodHandler} />
            <FoodItems items={foodList} />
        </>
    );
}
export default Fitlist;