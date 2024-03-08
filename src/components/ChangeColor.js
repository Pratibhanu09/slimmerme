import { useReducer } from "react";

const colorChangeReducer = (state, action) => {
    if (action.type === 'COLOR') {
        const r = Math.floor(Math.random() * 100) + 1;
        const g = Math.floor(Math.random() * 100) + 1;
        const b = Math.floor(Math.random() * 100) + 1;
         state.color = `rgb(${r},${g},${b})`;
        document.body.style.backgroundColor=state.color;
            return { color: state.color };

    }
    return state;
}

const ChangeColor = () => {
    const [color, dispatchColor] = useReducer(colorChangeReducer, {
        currentColor:null
    })


    const dispatchColorHandler = () => {
        dispatchColor({ type: 'COLOR' })
    }


    return <>
        <button onClick={dispatchColorHandler}>Change Color</button>
        <h3>{color.currentColor}</h3>
    </>
};

export default ChangeColor;