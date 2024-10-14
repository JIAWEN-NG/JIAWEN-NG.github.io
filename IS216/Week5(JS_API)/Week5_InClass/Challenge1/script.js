const weather_type_images = {
    "Clear": "images/clear.jpg",
    "Clouds": "images/clouds.jpg",
    "Haze": "images/haze.jpg",
    "Mist": "images/mist.jpg",
    "Rain": "images/rain.jpg",
    "Smoke": "images/smoke.jpg",
    "Snow": "images/snow.jpg",
    "Thunderstorm": "images/thunderstorm.jpg"
};

const temp_images = {
    "Hot": "images/hot.jpg",   // Celsius > 25
    "Okay": "images/okay.jpg", // Celsius 5-25
    "Cold": "images/cold.jpg"  // Celsius < 5
};


// DO NOT CHANGE THE FUNCTION SIGNATURE
function check_weather() {

    console.log("=== [START] check_weather() ===");

    //============================================================================
    // Task 1
    // Key in your own OpenWeatherMap.org API key (DO NOT SHARE IT WITH OTHERS)
    //============================================================================
    const weather_api_key = 'dc50d32f6e956285ca4a1d08d7c7aefe';


    //============================================================================
    // Task 2
    // Retrieve the user input (city name) from <input>
    //============================================================================
    const city = document.getElementById("city").value; // Default value, you need to replace this string with actual user input
    console.log(city);
    // let units = 'metric';

    // DO NOT MODIFY THIS
    let api_endpoint = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weather_api_key}&units=metric`;


    axios.get(api_endpoint)
        .then(response => {
            // Inspect what's in the API response
            console.log(response.data);


            //============================================================================
            // Task 3
            // Retrieve the weather info (e.g. Rain, Clouds, etc.)
            //============================================================================
            let temp_c = response.data.main.temp;
            let weather_type = response.data.weather[0].main;

            console.log(temp_c, weather_type);

            // YOUR CODE GOES HERE
            // Make use of const weather_type_images (at the top)

            let temperature_img = document.getElementById("temperature_image");
            let weather_img = document.getElementById("weather_images");
            let p = document.createElement("p");


            if (temp_c > 25) {
                temperature_img.src = temp_images["Hot"];
            } else if (temp_c >= 5 && temp_c <= 25) {
                temperature_img.src = temp_images["Okay"];
            } else {
                temperature_img.src = temp_images["Cold"];
            }

            if (weather_type in weather_type_images) {
                weather_img.src = weather_type_images[weather_type];
                console.log(weather_img.src);
            
            }

        
            //======================================================================================
            // Task 4
            // Perform JavaScript DOM to reflect weather info and temperature info in the HTML page.
            //======================================================================================
            

            // YOUR CODE GOES HERE
            // Make use of const temp_images (at the top)

        })
        .catch(error => {
            console.log(error.message);
        })

    console.log("=== [END] check_weather() ===");
}
