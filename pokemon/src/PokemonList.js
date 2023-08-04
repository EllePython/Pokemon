import React, { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap'

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
            <h1>Original 151 Pokemon</h1>
            <ListGroup>
                {pokemonList.map(pokemon => (
                    <ListGroup.Item key={pokemon.name}>{pokemon.name}</ListGroup.Item>
              
                ))}
            </ListGroup>
        </div>
    );
};

export default PokemonList