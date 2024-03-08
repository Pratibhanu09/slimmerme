const ErrorModal = (props) => {
    if(props.type==='invalid calories' || props.msg==='invalid input'){
        return <h1>{props.msg}</h1>;
    }
    
};

export default ErrorModal;