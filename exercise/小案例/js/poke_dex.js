// 获取元素
const contentEl = document.querySelector('.content')
const pokemon_count = 150
const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5'
}
const main_types = Object.keys(colors)

// 发起网络请求
const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i)
  }
}

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const res = await fetch(url)
  const data = await res.json()

  // 创建元素
  createPokemonCard(data)
}

// 创建元素
const createPokemonCard = function (pokemon) {
  const pokemonEl = document.createElement('div')
  pokemonEl.classList.add('pokemon')

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
  const id = pokemon.id.toString().padStart(3, '0')

  const poke_types = pokemon.types.map(type => type.type.name)
  const type = main_types.find(type => poke_types.indexOf(type) > -1)
  const color = colors[type]

  pokemonEl.style.backgroundColor = color

  const pokemonInnerHTML = `
    <div class="img_container">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt=""${name} />
    </div>
    <div class="info">
      <span class="number">#${id}</span>
      <h3 class="name">${name}</h3>
      <div class="type">Type:${type}</div>
    </div>
  `

  pokemonEl.innerHTML = pokemonInnerHTML

  contentEl.appendChild(pokemonEl)
}

fetchPokemons()