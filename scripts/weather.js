var weather = "Clear";
var icon = "01d";
var temp = 0;
var celsius = true;
var appid = "e7f97bd1900b94491d3263f89cbe28d6";
var zip = "46120";
var country = "es";

var weatherRain = ['Thunderstorm', 'Drizzle', 'Rain', 'Mist'];
var weatherSnow = ['Snow', 'Fog'];

function setZip(newZip) {
    zip = newZip;
}

function setCountry(newCountry) {
    country = newCountry;
}

function getZip() {
    return zip;
}

function getCountry() {
    return country;
}

function setCelsius(celc) {
    celsius = celc;
}

function getCelsius() {
    return celsius;
}

function getWeather(cond) {
    if(weatherRain.indexOf(cond) > -1) {
        return "Rain";
    } else if(weatherSnow.indexOf(cond) > -1) {
        return "Snow";
    } else {
        return "Clear";
    }
}

function KtoC(tempK) {
    return Math.round(tempK - 273.15);
}

function KtoF(tempK) {
    return Math.round((tempK * 9 / 5) - 459.67);
}

// Checks the weather every 10 minutes, calls callback if it's changed
function weatherCheck() {
    //if appid is not valid nothing will be returned
    var url = "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + "," + country + "&appid=" + appid;

    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if(request.readyState == 4 && request.status == 200) {
            var response = JSON.parse(request.responseText);
            if( response.cod == "200" && (response.main.temp !== temp || response.weather[0].icon !== icon)) {
                weather = getWeather(response.weather[0].main);
                icon = response.weather[0].icon;
                    temp = response.main.temp;
            }
        }
    }

    request.open("GET", url, true);
    request.send();
    
    setTimeout(function() { updateWeather(); }, 250);
}

function updateWeather() {
    if(celsius)
        $("#temp").text(KtoC(temp) + "° C");
    else
        $("#temp").text(KtoF(temp) + "° F");
}