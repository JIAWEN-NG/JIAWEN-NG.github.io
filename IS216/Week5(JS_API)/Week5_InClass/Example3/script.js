// OpenWeatherMaps API key - Key in your own below
// NEVER SAVE API keys this way - you must save them securely (e.g. environment variable)
const weather_api_key = 'dc50d32f6e956285ca4a1d08d7c7aefe';

function get_temperature() {

    console.log("[START] get_temperature()");
    // Get the city name from the input field

    //task 1: retrieve user input city value from hmtl 
    // replace Pyongyang with it
    //let city = 'Pyongyang';
    let city = document.getElementById("city").value;  // get input value
    console.log(city);
    let units = 'metric';

    let api_endpoint_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weather_api_key}&units=${units}`;


    // Axios calling API endpoint asynchrously
    axios.get(api_endpoint_url).
    then(response =>{
    console.log(response.data); //get a array of Objects
    

    //task 2: get the temperature from the response and display html
    let temperature = response.data.main.temp;
   
    //task 3: get humidity and display in html 
    let humidity = response.data.main.humidity;
    console.log(temperature,humidity);


    // JS DOM 
    // document.getElementById("info").innerHTML = `
    // <p> City: ${city}</p>
    // <p> Temperature: ${temperature} C</p>
    // <p> Humidity: ${humidity}%</p>
    // `;
    
    //create element of p 
    let p = document.createElement("p");

    

    }).
    catch((error) =>{
        console.log(error.message);
    })
    
    console.log("[END] get_temperature()");
    

    

}
