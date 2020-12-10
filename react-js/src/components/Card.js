import React, {useState} from 'react'; 

const Card = () => {
    const stateNum = useState(); 
    console.log(stateNum);
    return (
    <div>
        <header></header>
        <div>${stateNum[0]} "lol"</div>
        <footer>
            <button type = "button" onClick = {() => {}}>-</button>
            <button type = "button" onClick = {() => {}}>+</button>
        </footer>
    </div>)
}; 

export default Card;