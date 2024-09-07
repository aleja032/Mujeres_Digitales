import { React, useState } from "react";
import Result from "./Result";
import Candelita from '../assets/candelita.png';
import '../Syles/Form.css';

function Form() {
    const [grados, setGrados] = useState({ fahrenheit: 0, celsius: 0 });

    const convertToCelsius = (fahrenheit) => ((fahrenheit - 32) * (5/9)).toFixed(0);
    const convertToFahrenheit = (celsius) => (celsius * (9 / 5) + 32).toFixed(0);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === "celsius" && value !== "") {
            const fahrenheit = convertToFahrenheit(Number(value));
            setGrados({ celsius: value, fahrenheit });
        } else if ( name === "fahrenheit" && value !== "") {
            const celsius = convertToCelsius(Number(value));
            setGrados({ fahrenheit: value, celsius });
        } else {
            setGrados({ fahrenheit: "", celsius: "" });
        }
    }
    return (
        <div className="container  d-flex justify-content-center align-items-center">
            <div className="form">
                <h3 className="border-bottom p-4 text-center">
                    TEMPERATURE CALCULATOR
                </h3>
                <div className="p-3 mt-3 ">
                    <label htmlFor="celsius" className="mb-2">Enter temperature in degrees celsius: </label>
                    <input type="number"
                        name="celsius"
                        onChange={handleInputChange}
                        value={grados.celsius || ""}
                        className="py-1 text-center"
                    />
                </div>
                <div className="text-center"> Or</div>

                <div className="p-3">
                    <label htmlFor="fahrenheit" className="mb-2">Enter temperature in degrees fahrenheit: </label>
                    <input type="number"

                        name="fahrenheit"
                        onChange={handleInputChange}
                        value={grados.fahrenheit || ""}
                        className="py-1 text-center"

                    />
                </div>
                <Result grados={grados} />
                <img src={Candelita} alt="" className="candelita" />
            </div>
        </div>
    )
} export default Form