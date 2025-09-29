const pokemon = "cyndaquil";
const statsList = document.getElementById("stats");

fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
.then((response) => response.json())
.then((data) => {
    const stats = data.stats;
    stats.forEach((stat) => {
        const statLi = document.createElement("li");
        statLi.textContent = `${stat.stat.name}: ${stat.base_stat}`;
        statsList.appendChild(statLi);
    });
}).catch((error) => console.error("Error al obtener los datos: ", error))