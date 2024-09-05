import './Search.css';
import React from 'react';
function Search({handleChange}){
 
    return(
        <>
        <input type="text" 
        onChange={handleChange}
        
        />
        </>
    )
}export default Search