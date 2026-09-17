// WEATHER APP


const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const api ="0bde754b5a1743ab84542633261709";

weatherForm.addEventListener("submit", async event => {

    event.preventDefault();

    const city = cityInput.value;

    if(city) {

        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error) {
            console.error(error);
            displayError(error.message);
        }

    } 
    else {
        displayError("Please enter a city: ");
    }
});

async function getWeatherData(city) {
    
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${api}&q=${city}`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error("Could not fetch weather data. Check city name.");
    }

    return await response.json();
}

function displayWeatherInfo (data) {

    /*const { name: city,
            main: {temp, humidity},
            weather: [{description, id}]} = data; */

    const {
        location: { name: city },
        current: {
            temp_f,
            humidity,
            condition: { text: description, code: id }
        }
    } = data;

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent = city;
    //tempDisplay.textContent = `${((temp - 273.15) * (9/5 + 32)).toFixed(1)}°F`;
    tempDisplay.textContent = `${temp_f.toFixed(1)}°F`;
    humidityDisplay.textContent = `Humidity : ${humidity}%`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);

    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);

}

function getWeatherEmoji(weatherId) {

    switch (true) {
        case weatherId === 1000:
            return "☀️";
        case weatherId === 1003:
            return "🌤️";
        case weatherId >= 1006 && weatherId <= 1009:
            return "☁️";
        case weatherId === 1030 || weatherId === 1135 || weatherId === 1147:
            return "🌫️";
        case (weatherId >= 1063 && weatherId <= 1072) ||
             (weatherId >= 1150 && weatherId <= 1201) ||
             (weatherId >= 1240 && weatherId <= 1246):
            return "🌧️";
        case (weatherId >= 1066 && weatherId <= 1069) ||
             (weatherId >= 1204 && weatherId <= 1237) ||
             (weatherId >= 1249 && weatherId <= 1264):
            return "❄️";
        case weatherId >= 1087 && weatherId <= 1282:
            return "⛈️";
        default:
            return "🌡️";
    }
}

function displayError(message) {

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}



