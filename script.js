function getWeather() {

    let city = document.getElementById("city").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    document.getElementById("loading").innerHTML = "Loading weather...";

    // Hypothetical JSON API data
    let weatherJSON = {
        "city": city,
        "temperature": 29,
        "condition": "Partly Cloudy",
        "humidity": 75,
        "wind_speed": 12
    };

    // Simulate AJAX request
    setTimeout(function () {

        // Convert JSON string to JavaScript object
        let weatherData = JSON.parse(JSON.stringify(weatherJSON));

        document.getElementById("loading").innerHTML = "";

        document.getElementById("weather").innerHTML = `
            <div class="weather-card">
                <h2>${weatherData.city}</h2>
                <p>🌡️ Temperature: ${weatherData.temperature} °C</p>
                <p>☁️ Condition: ${weatherData.condition}</p>
                <p>💧 Humidity: ${weatherData.humidity}%</p>
                <p>💨 Wind Speed: ${weatherData.wind_speed} km/h</p>
            </div>
        `;

    }, 1000);
}