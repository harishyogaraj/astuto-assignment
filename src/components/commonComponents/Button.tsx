
const defaultBtnStyles = {
    display: "flex",
    height: "52px",
    width: "766px"
}

const Button = ({text, btnStyles=defaultBtnStyles, btnHandler}: any) => {
    return (
        <button style={btnStyles} onClick={btnHandler}>
            {text}
        </button>
    )
};

export default Button;