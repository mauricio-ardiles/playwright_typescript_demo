import { test, expect } from '@playwright/test';
import axios from 'axios';
import { IPokemon } from '../interfaces/iPokemon';

//constante agregada a modo de practica la url deberia ir en el .env file para ser manejado los entornos
const pokemonUrl: string = "https://pokeapi.co/api/v2/pokemon/";
test('Verify that user can Get a pokemon searching by ID', {tag: '@api',}, async ({ page }) => {
    const pokemonId: number = 1;
    const {data} = await axios.get<IPokemon>(`${pokemonUrl}${pokemonId}`);
    //console.log(data);
    expect(data.name, 'Wrong pokemon name').toBe('bulbasaur');
});