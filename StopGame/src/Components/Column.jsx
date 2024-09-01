import { useState } from "react";
import React from "react";
import '../Styles/Botones.css';

function Column ({title, placeholder, index, inputs, setInputs, letter}){

    // const [isCorrect, setIsCorrect] = useState(false);
    const [inputValue, setInputValue] = useState('');

    
    const handleChange =(event) =>{
        const { name, value } = event.target;

        // let firstLetter= event.key.toUpperCase();
        let firstLetter= value.charAt().toUpperCase();

        console.log(firstLetter);
         if( firstLetter != letter ){
            console.log(`it's diferent ${firstLetter}`);

        }else{
            // setIsCorrect(true);
            setInputValue(value);
            setInputs({ ...inputs, [name]: value });

            console.log("good");
        }
    }
    
    return (
            <input 
                key={index}
                className="col text-center py-3"
                type="text"
                placeholder={placeholder}
                name={title}
                disabled={index === 0} 
                value={inputValue}
                // onKeyDown={onKeyDown}
                onChange={handleChange}
            />
    )
}export default Column
