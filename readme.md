# Weather App Mini Project

A simple weather application built with **HTML, CSS, and JavaScript** that fetches and displays the current temperature and wind speed for any city. This project demonstrates handling user input, working with asynchronous JavaScript (`fetch`), and interacting with free APIs to process real-world data.

## Features

- Type a city name and click **Get Weather** to fetch current weather.
- Uses **Open-Meteo’s Geocoding API** to convert city names into coordinates.
- Uses **Open-Meteo’s Weather API** to fetch temperature and wind speed for the given location.
- Handles invalid city input with proper error messages.
- Displays `--` as placeholders until valid data is available.

## How It Works

1. **User Input** – The user enters a city name.
2. **Geocoding** – The app fetches latitude and longitude for the city using Open-Meteo’s geocoding API.
3. **Weather Fetch** – Using the coordinates, it fetches current temperature and wind speed.
4. **Display** – The weather data is displayed dynamically in the browser.
5. **Error Handling** – Invalid city names or missing data show an alert and reset the display.

## Technologies Used

- **HTML / CSS** – Structure and styling, responsive design with mobile-friendly tweaks.
- **JavaScript (Vanilla)** – DOM manipulation, event handling, async/await, and error handling.
- **APIs** – Open-Meteo Geocoding and Weather APIs.
- 
## Demo

Check it live here: [Your GitHub Pages Link](https://nabeel-ahsan.github.io/weather-app/)

## How to Use

1. Open the project in a browser.
2. Type a city name in the input field.
3. Click **Get Weather**.
4. The current temperature (°C) and wind speed (km/h) will be displayed.
5. If the city is invalid or data is unavailable, an alert will appear.


