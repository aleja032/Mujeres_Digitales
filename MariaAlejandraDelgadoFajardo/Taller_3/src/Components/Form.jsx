import {React, useState} from "react";
import Result from "./Result";
import Candelita from '../assets/candelita.png';
import '../Syles/Form.css';

function Form(){
    const [grados, setGrados] = useState({fahrenheit: 0, celsius: 0});


    const converter = (e) =>{

        if(e.target.name === "celsius" && e.target.value != 0){
            let  fahrenheit =(e.target.value *  9/5) + 32 ;

            setGrados((prevGrados) => ({
                ...prevGrados, fahrenheit : fahrenheit, celsius : e.target.value
            }));

            console.log(fahrenheit);
        }else if (e.target.name === "fahrenheit" && e.target.value != 0){
            let  celsius =(e.target.value - 32) * 5/9 ;

            setGrados((prevGrados) => ({
                ...prevGrados, fahrenheit : e.target.value, celsius : celsius
            }));
            console.log(e.target.value);
        }else {
            setGrados((prevGrados) => ({
                ...prevGrados, fahrenheit : 0, celsius : 0
            }));
        }
    }
    return(
        <div className="container  d-flex justify-content-center align-items-center">
            <div className="form">
                <h3 className="border-bottom p-4 text-center">
                    TEMPERATURE CALCULATOR
                </h3>
                <div className="p-3 mt-3 "> 
                    <label htmlFor="celsius" className="mb-2">Enter temperature in degrees celsius: </label>
                    <input type="number" 
                    name="celsius"
                    onChange={converter}
                    value={grados.celsius != "" ? grados.celsius : ""}
                    className="py-1 text-center"
                    />
                </div>
                <div className="text-center"> Or</div>

                <div className="p-3"> 
                    <label htmlFor="fahrenheit" className="mb-2">Enter temperature in degrees fahrenheit: </label>
                    <input type="number" 

                    name="fahrenheit"
                    onChange={converter}
                    value={grados.fahrenheit != "" ? grados.fahrenheit : ""}
                    className="py-1 text-center"

                    />
                </div>
                <Result grados={grados}/>
            <img src={Candelita} alt="" className="candelita"/>
            </div>
        </div>
    )
}export default Form