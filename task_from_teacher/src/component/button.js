export default function Button({text, color, handleClick}) {
    // console.log(props);
    // console.log(props.myData);
    return (
            <div className="d-flex">
                <button style={{backgroundColor: color}} onClick={handleClick} >{text}</button>
            </div>
    )
}