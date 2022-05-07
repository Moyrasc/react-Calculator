import "./ButtonsBox.css";

const ButtonsBox = ({children}) => {
    return (
        <div className="buttonbox">
            {children}
        </div>
    )
}

export default ButtonsBox;