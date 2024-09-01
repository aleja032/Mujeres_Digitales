import React from "react";
import Column from "./Column"; // Ensure this path is correct
import Constante from '../Utilities/Constante';
import '../Styles/Botones.css';

const  Row = ({letter, inputs, setInputs, }) => {
    return (
            <div className="row d-flex esquinas_row ms-0">
                {Constante.map((item, index) => (
                        <Column 
                            key={index} 
                            // letter={index <= 1 ? letter : ""} // Conditional letter prop
                            title={item} 
                            placeholder={item === "Letter" ? letter : item} 
                            desabilitar ={index}
                            // onInputChange={(value) => onInputChange(id, value)}
                            inputs={inputs} 
                            setInputs={setInputs}
                            letter={letter}
                        />
                    ))
                }
            </div>
    );
}

export default Row;
