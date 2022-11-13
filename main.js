document.addEventListener("DOMContentLoaded", () => {
   
    for (let i = 1; i < 21; i++) {
        fetchData(i);
      }
})

const fetchData = async (id) => {
try {
    
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json()
    
    document.getElementById('js-alerta-success').classList.add('d-block')
    //console.log(data)

    const pokemon = {
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
        imgJuego: data.sprites.front_default,
        imgCvg: data.sprites.other.dream_world.front_default,
        nombre: data.name,
        experiencia: data.base_experience,
        hp: data.stats[0].base_stat,
        ataque: data.stats[1].base_stat,
        defensa: data.stats[2].base_stat,
        especial: data.stats[3].base_stat,
    }

    //api.innerHTML += `<div class="card-top"><h2>${pokemon.nombre}</h2><p>${pokemon.ataque}</p><img src="${pokemon.img}"/></div>`;

    api.innerHTML += 
    `<div> <img width="50%" src="${pokemon.img}" alt="Card image cap">
    <h3 class="card-title"> ${pokemon.nombre}</h3>
    <br>
    <h4> Características</h4>
    <h6> Ataque : ${pokemon.ataque}</h6>
    <h6> Defensa : ${pokemon.defensa}</h6>
    <h6> Experiencia : ${pokemon.experiencia}</h6>
    <h6> Especial : ${pokemon.especial}</h6>
    <h6> Hp : ${pokemon.hp}</h6>
    
    </div>`;
document.getElementById('js-alerta-success').classList.add('d-block')
    
} catch (error) {
    console.log(error)
    document.getElementById('js-alerta-error').classList.add('d-block')
}
} 