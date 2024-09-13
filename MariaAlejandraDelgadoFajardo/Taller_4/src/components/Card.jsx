import React, {useState, useEffect} from 'react';
import  Dado  from '../assets/icon-dice.svg';
import  DividerDesktop from '../assets/pattern-divider-desktop.svg';
import  Dividermobile from '../assets/pattern-divider-mobile.svg';
import "../Styles/Card.css";

function Card (){

    const [isMobile, setIsMobile] = useState(false);
    const [ advice, setAdvice ] = useState([]);  
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    const fetchAdvice = async (url) => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            setAdvice(data.slip);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const handleResize = () => { setIsMobile(window.innerWidth <= 575); };
        handleResize();
        window.addEventListener('resize', handleResize);
        fetchAdvice('https://api.adviceslip.com/advice/71'); 

        return () => {console.log("cambio"), window.removeEventListener('resize', handleResize); };
    }, []);

    const handleAdvice = () => fetchAdvice('https://api.adviceslip.com/advice');

    return( 
            <div className="card pt-2">
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <div className="card-title py-3 pt-lg-4 custom-title"> {advice.id ? `ADVICE #${advice.id}` : 'ADVICE'} </div>
                    <div className="card-text text-center mb-4 mx-lg-4 mx-sm-0 ">

                        {loading ? "Cargando el consejo..." : error ? error : `"${advice.advice}"`}
                        
                        </div>
                        <img src={isMobile ? Dividermobile : DividerDesktop} alt="" className='mt-lg-3  mt-sm-0 custom-color-divider'/>
                    <div className="position-relative  d-flex p-4  mt-lg-2  mt-sm-0">
                        <button className="position-absolute circular" onClick={handleAdvice}>
                            <img src={Dado} alt="" />
                        </button>
                    </div>
                </div>
            </div>
    )
}export default Card