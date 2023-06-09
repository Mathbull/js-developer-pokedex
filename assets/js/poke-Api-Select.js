

function eggs(){


}


function converterPokeDetail(pokePoke){
    const pokemonDetales = new SelectPoke () 
    pokemonDetales.name = pokePoke.name
    pokemonDetales.namber = pokePoke.id

    const types = pokePoke.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemonDetales.types = types
    pokemonDetales.type = type
    pokemonDetales.photo = pokePoke.sprites.other.dream_world.front_default
    pokemonDetales.height = pokePoke.height
    pokemonDetales.weight = pokePoke.weight
     

        

    pokemonDetales.abilities = pokePoke.abilities.map((abilitySlot) => abilitySlot.ability.name)




    return pokemonDetales


}



const pokeApiSelect = {}

pokeApiSelect.getpokemons = (limit = 68)=> {

    const url = `https://pokeapi.co/api/v2/pokemon/${limit}`
    return fetch(url)
    .then((response) => response.json())
    
    .then((pokemonD) =>  pokemonD = converterPokeDetail(pokemonD))
    .catch((error) => console.log(error))
} 