import React, { useEffect, useState } from 'react'
//import { ListGroup } from 'react-bootstrap'

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(data => setPokemonList(data.result))
        .catch(error => {
            console.error('Error fetching pokemon cards', error);
        });

    })
    return (
        <div>
            <h1>Original 150 Pokemon</h1>
            
            {pokemonList ? <img src={pokemonList} alt=" List of Pokemon's" /> : <p>Loading...</p>}
        </div>
    );
};

export default PokemonList