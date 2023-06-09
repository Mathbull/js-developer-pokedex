const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const lua = document.getElementsByClassName('ovo')


//quando click no pokemon ir para a pagina 
const verDetalhes = document.getElementById('ovo')
const link =  'http://127.0.0.1:5500/assets/pages/itemSelect.html'




const maxRecords = 151
const limit = 10
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `
    <div class= ovo>
        <li class="pokemon ${pokemon.type}" id="">
       
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            
        
            <div class="detail" id="ovo">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img   src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
           
            
        </li>
        </div>
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})


//quando click no pokemon ir para a pagina 

