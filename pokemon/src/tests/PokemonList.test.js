import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PokemonList from '../components/PokemonList';


test('fetches Pokemon data from API and displays them', async () => {
    const mockPokemonList = {
        results: [
            { name: 'bulbasaur' },
            { name: 'charmander' },
            { name: 'squirtle' },
        ],
    };

    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve(mockPokemonList),
        })
    );

    render(<PokemonList />);

    const bulbasaurElement = await screen.findByText('bulbasaur');
    const charmanderElement = await screen.findByText('charmander');
    const squirtleElement = await screen.findByText('squirtle');

    expect(bulbasaurElement).toBeInTheDocument();
    expect(charmanderElement).toBeInTheDocument();
    expect(squirtleElement).toBeInTheDocument();
});

test('error message on failed fetch', async () => {
    global.fetch = jest.fn(() => Promise.reject(new Error('Failed to fetch data')));
    render(<PokemonList />);

    const errorMessage = await screen.findByText('Error fetching pokemon cards');

    expect(errorMessage).toBeInTheDocument();
})