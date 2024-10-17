// fetch = Function used to make HTTP requests to fetch resources
// JSON data, images, & files
// simplifies asynchronous data 
// used to interact w APIs to retrieve and send data
// 2 argumments(url, options)



// sync & await -- to fetch a resource


// Attach event listener to the button
document.getElementById("fetchPokemon").addEventListener("click", function() {
    let pokemonName = document.getElementById("pokemonName").value.toLowerCase(); 

    async function fetchData() {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

            if (!response.ok) {
                throw new Error("Could not fetch resource");
            }

            const data = await response.json();
            console.log(data);


            let pokemonImage = document.getElementById("pokemonImage");
            pokemonImage.src = data.sprites.front_default;
            pokemonImage.style.display = "block"; // Make image visible
        } catch (error) {
            console.error(error);
        }
    }

    fetchData(); // Call the function
});
