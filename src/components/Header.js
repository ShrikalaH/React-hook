import React, { useState } from "react";

const Header = () => {
    const [InputValue, setInputValue] = useState("shrikala")
    let onChange = (event) =>{
        const newValue=event.target.value;
        setInputValue(newValue)
    }
    return(
        <div>
            <h3>TYPE SOMETHING IN INPUTBOX</h3>
            <input placeholder="type something..." onChange={onChange}/>
            {InputValue}
         </div> 

    );
}

export default Header;