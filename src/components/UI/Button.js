import './Button.css';

const Button = props => {
    <button onClick={props.onClick} type={props.type||'button'}>
        {props.children}
    </button>
};

export default Button;