const input = document.getElementById("inputEl");
const button = document.getElementById("button");
const tempEl = document.getElementById("temp");
const windEl = document.getElementById("wind");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const inputCity = input.value.trim();
  if (!inputCity) return;
  fetchCoordinates(inputCity);
});

async function fetchCoordinates(input) {
  try {
    const result = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${input}&count=10&language=en&format=json`
    );
    const response = await result.json();
    if (!response.results || response.results.length === 0) throw new Error("City not found");
    const lat = response.results[0].latitude;
    const lon = response.results[0].longitude;
    fetchWeather(lat, lon);
  } catch (error) {
    showError(error);
  }
}

async function fetchWeather(lat, lon) {
  try {
    const result = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m`
    );
    const response = await result.json();
    if (!response.current) throw new Error("Weather data not available");
    const temp = response.current.temperature_2m;
    const wind = response.current.wind_speed_10m;
    showWeather(temp, wind);
  } catch (error) {
    showError(error)
  }
}

function showWeather(temp, wind) {
  tempEl.textContent = temp;
  windEl.textContent = wind;
}

function showError(error) {
  tempEl.textContent = "--";
  windEl.textContent = "--";
  alert(error.message || error)
}
