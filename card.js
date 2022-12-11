import { getPokemon, getEvolution,getSpecies } from "./getAPI.js"
var count = localStorage.getItem("count");
getPokemon(count).then((data) => {
    console.log("pokemon");
    console.log(data.name);
    console.log("-------------------------------");
    $(".pokemon_name").text(data.name);
    $(".main_img_pokemon").attr("src",data.sprites["front_default"]);
});
$("#nextPokemon").click(()=>{
    count++;
    localStorage.setItem("count",count);
    console.log(count);
})
$("#previousPokemon").click(()=>{
    count--;
    localStorage.setItem("count",count);
    console.log(count);
})