
function Result({grados}){
    if(grados.celsius >=100){
        return(
            <>  
                <h5 className="text-center mt-3 pe-3">The water is Boiling <br></br>
                     to {grados.celsius}°C and {grados.fahrenheit} °F</h5>  
            </>
        )
    }
   
}export default Result