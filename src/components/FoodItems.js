import { MessageContext } from "./UI/PassContext";
import { useContext } from "react";
const FoodItems = (props) => {
    const msgCtx = useContext(MessageContext);
        return (
        <div>
            <h1>Fitlist</h1>
            <h1>{msgCtx}</h1>
            {props.items.map(food => {
                return <li key={food.id}>{`${food.foodName} - ${food.calorie}`}</li>
            })}
        </div>
    );
}

export default FoodItems;