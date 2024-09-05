import React, { useState, useEffect, useCallback } from 'react';
import './StarWarsCharacter.css';
import Loader from '../Loader/Loader';
import Search from '../Search/Search';

function StarWarsCharacters() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState('https://swapi.dev/api/people/?page=1');
    const [nextPage, setNextPage] = useState(null);
    const [hasMore, setHasMore] = useState(true);

    // filter
    const handleChange = async (e) => {
        const value = e.target.value;

        try {
            const response = await fetch(`https://swapi.dev/api/people/?search=${value}`);
            const data = await response.json();
            setCharacters(data.results); // Actualiza el estado con los resultados filtrados
        } catch (err) {
            setError(err);
        }
    };

    // Characters 
    const fetchCharacters = async (pagina) => {
        if (loading || !hasMore) return;

        try {
            setLoading(true);
            const response = await fetch(pagina);
            const data = await response.json();
            setCharacters(prevCharacters => [...prevCharacters, ...data.results]); // Agregar los nuevos personajes al array existente
            setHasMore(!!data.next); // Verifica si hay más personajes para cargar

            setNextPage(data.next); // Guarda la URL de la siguiente página
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    // cuando llega al final de la pagina me retorne mas personajes
    const handleScroll = useCallback(() => {
        if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100 && !loading) {
            if (nextPage) {
                fetchCharacters(nextPage);
            }
        }
    }, [loading, nextPage]);


    useEffect(() => {
        fetchCharacters(currentPage);
    }, [currentPage]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);


    if (error) {
        return <div>Error: {error.message}</div>;
    }
    
    const getCharacterImage = (url) => {
        const id = url.split("/").filter(Boolean).pop();
        return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
    };
    
    return (
        <div className="characters-container">
            <h1 className="title">Star Wars Characters</h1>
            <Search handleChange={handleChange} />
            <div className="character-list">
                {characters.map((character, index) => (
                    <div key={index} className="character-card">
                        <img
                            src={getCharacterImage(character.url)}
                            alt={character.name}
                            className="character-image"
                            onError={(e) => e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"}
                        />
                        <div className="character-info">
                            <h2>{character.name}</h2>
                            <p><strong>Height:</strong> {character.height} cm</p>
                            <p><strong>Gender:</strong> {character.gender}</p>
                            <p><strong>Birth Year:</strong> {character.birth_year}</p>
                            <p><strong>Eye Color:</strong> {character.eye_color}</p>
                        </div>
                    </div>
                ))}
            </div>
            {loading && <Loader />} {/* Mostrar el loader mientras se cargan más personajes */}
        </div>
    );
}


export default StarWarsCharacters;
