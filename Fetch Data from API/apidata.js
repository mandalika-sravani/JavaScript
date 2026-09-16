// fetch() -- Function used for HTTP requests to fetch resources. 
//          (JSON style data, images, files)
//              Simplifies asynchronous data fetching in JavaScript and 
//              used for interacting with APIs to retrieve and send data asynchronously
//              fetch(url, {options})

fetchData();

async function fetchData() {
    
    try {

        const pokemonName = document.getElementById("names").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok) {
            throw new Error("Could not fetch response");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const img = document.getElementById("pokemonSprite");

        img.src = pokemonSprite;
        img.style.display = "block";
        

    }
    catch(error) {
        console.log(error);
    }

}