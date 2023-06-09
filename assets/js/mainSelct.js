



pokeApiSelect.getpokemons().then((pokemonD = []) => { 
    console.log( pokemonD.type )
        const newHtml = `
            <div class=" ${pokemonD.type} " >
            <a class="vlt" href="../../index.html">&#8592;</a> 
                <div class="back" id="back">
                    <ol id="pokemonList" class="as">
                        <li class="pokemon select ${pokemonD.type}">
                            <div class="nameAndTypes">
                                <span class="name" id="name">${pokemonD.name }</span>
                                <ol class="typeSelect as">
                        </li>
                        ${pokemonD.types.map((type) => `<li class="type  ${type} ">${type}</li>`).join('')} 
                                </ol>
                            </div>
                            <div class="numero">
                                <span class="number">#${pokemonD.namber}</span>
                            </div>
                        </li>
                        <li class="detail ">
                            <img src="${pokemonD.photo}"
                                alt="${pokemonD.name}">
                        </li>
                    </ol>
                </div>
                <div class="detailSelect">
                    <ul class="pokelista">
                        <li> About </li>
                        <li>Base States</li>
                        <li>Evolution</li>
                        <li>Moves</li>
                    </ul>
                    <hr>
                    <div>
                        <ol class="space" >
                            <li class="selctDetail">
                                <ul>
                                    <li>
                                        specie
                                    </li>
                                    <li>
                                        speed
                                    </li>
                                </ul>
                            </li>
                            <li class="selctDetail">
                                <ul>
                                    <li>
                                        height
                                    </li>
                                    <li>${pokemonD.height}</li>
                                </ul>
                            </li>
                            <li class="selctDetail">
                                <ul>
                                    <li>
                                        weight
                                    </li>
                                    <li>
                                    ${pokemonD.weight}
                                    </li>
                                </ul>
                            </li>
                            <li class="selctDetail">
                                <ul>
                                    <li>
                                        Abilities
                                    </li>
                                    ${pokemonD.abilities.map((ability) => `<li>${ability}</li>`).join('')}
                                </ul>
                            </li>
                        </ol>
                        Breeding
                        <ol class=" space">
                            
                            <li class="selctDetail">
                                <ul>
                                    <li>
                                        Gender
                                    </li>
                                    <li>
                                        87.5%
                                    </li>
                                    <li>
                                        12.6%
                                    </li>
                                </ul>
                            </li>
                            <li class="selctDetail">
                                <ul>
                                    <li>
                                        Egg Groups
                                    <li>
                                        Monster
                                    </li>
                                </ul>
                            </li>
                            <li class="selctDetail">
                                <ul>
                                    <li>
                                        Egg Cycle
                                    </li>
                                    <li>
                                        Grass
                                    </li>
                                </ul>
                            </li>
        
                        </ol>
                    </div>
                </div>
                </div>
                `
                
        
        link.innerHTML = newHtml
    })

