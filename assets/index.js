const ruido = document.getElementById("ruido");
const input = document.getElementById("pokemonInput");
const btn = document.getElementById("buscarBtn");
const imgFront = document.getElementById("pokeImgFr");
const imgBack = document.getElementById("pokeImgBack");
const nombrepoke = document.getElementById("nombre");

// STATS
const tipo = document.getElementById("tipo");
const peso = document.getElementById("peso");

const tablaEstadisticas = document.querySelector("#tablaStats")

btn.addEventListener("click", () => {
    const pokemon = input.value.trim().toLowerCase();

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((response) => response.json())
      .then((data) => {
        const cries = data.cries.latest;
        const sprite_back = data.sprites.back_default;
        const sprite_front = data.sprites.front_default;
        const name = data.name;
        const type = data.types.map(t => t.type.name);
        const weight = data.weight;
        

        data.stats.forEach((stat) => {
            switch(stat.stat.name) {
              case 'hp':
                document.getElementById('vida').textContent = stat.base_stat;
              case 'attack':
                document.getElementById('ataque').textContent = stat.base_stat;
              case 'defense':
                document.getElementById('defensa').textContent = stat.base_stat;
              case 'special-attack':
                document.getElementById('ataEspecial').textContent = stat.base_stat;
              case 'special-defense':
                document.getElementById('defEspecial').textContent = stat.base_stat;
              case 'speed':
                document.getElementById('velocidad').textContent = stat.base_stat;
            }

        });

        ruido.src = cries;
        pokeImgFr.src = sprite_front;
        pokeImgBack.src = sprite_back;
        nombre.textContent = name.toUpperCase();

        tipo.textContent = type;
        peso.textContent = weight;

        
      })
      .catch((error) => console.error("Error al obtener los datos: ", error));
});

