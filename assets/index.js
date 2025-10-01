const statsList = document.getElementById("stats");
const ruido = document.getElementById("ruido");
const input = document.getElementById("pokemonInput");
const btn = document.getElementById("buscarBtn");
const imgFront = document.getElementById("pokeImgFr");
const imgBack = document.getElementById("pokeImgBack");
const nombrepoke = document.getElementById("nombre");

const tablaEstadisticas = document.querySelector("#tablaStats")

const limpiar = () => {
    statsList.innerHTML = "";
}

btn.addEventListener("click", () => {
    const pokemon = input.value.trim().toLowerCase();
            limpiar();

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((response) => response.json())
      .then((data) => {
        const stats = data.stats;
        const cries = data.cries.latest;
        const sprite_back = data.sprites.back_default;
        const sprite_front = data.sprites.front_default;
        const name = data.name;
        

   

        stats.forEach((stat) => {
          const fila = document.createElement("td");
          fila.textContent = ` ${stat.base_stat}`;
          tablaEstadisticas.appendChild(fila);
        });

        ruido.src = cries;
        pokeImgFr.src = sprite_front;
        pokeImgBack.src = sprite_back;
        nombre.textContent = name.toUpperCase();

        tipo.textContent = type;

        
      })
      .catch((error) => console.error("Error al obtener los datos: ", error));
});

