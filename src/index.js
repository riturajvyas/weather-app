import $ from 'jquery'
import {} from 'lodash'

var weatherForecast =  [];
var weatherForecastForWeek = [];
const APPID = '0d1f8c8af4a3403bff59f4e5ca902546';
const puneCityId = '1259229';

$(document).ready(
    function(){
        getForecast(puneCityId);
        
    }
)

function getForecast(cityId) {
    
    $.get("http://api.openweathermap.org/data/2.5/forecast?id=" + cityId + "&APPID=" + APPID, function (response){
        
        $("#city").html(response.city.name);
        $("#lon").html(response.city.coord.lon);
        $("#lat").html(response.city.coord.lat);
        
        console.log(response);
        weatherForecast = [];
        response.list.forEach(iterateWeatherList) ;

        
    }).then(function () {

        createTable();

    });
}

function iterateWeatherList(dayForecast) {
    
    var weatherData = { "date" : dayForecast.dt_txt.substring(0,10), 
                            "temp" : dayForecast.main.temp,
                            "temp_max" : dayForecast.main.temp_max,
                            "temp_min" : dayForecast.main.temp_min,
                            "humidity" : dayForecast.main.humidity,
                            "wind_deg" : dayForecast.wind.deg,
                            "wind_speed" : dayForecast.wind.speed,
                            "desc" : dayForecast.weather[0].description
                        };
    weatherForecast.push( weatherData );

    

    // checking weather forecast is available for same date.
    // Only showing first forecast of the day.
    var tempArray = $.grep(weatherForecastForWeek, function(element){ 
        return element.date == dayForecast.dt_txt.substring(0,10); 
    });
    if(tempArray.length == 0) {
        weatherForecastForWeek.push(weatherData);
    }
}


function createTable(){
   
    var count;
    
    for( count = 0; count < weatherForecastForWeek.length; count++){

        // $("#date"+ count).html(weatherForecastForWeek[count].date); 
        var table = $('<table></table>').addClass('titleTable');
        table.append($('<tr></tr>').text(' Date: ' + weatherForecastForWeek[count].date));
        table.append($('<tr></tr>').text(' Temperature: ' + weatherForecastForWeek[count].temp + ' Kelvin'));
        table.append($('<tr></tr>').text(' Maximum Temperature: ' + weatherForecastForWeek[count].temp_max + ' Kelvin'));
        table.append($('<tr></tr>').text(' Minimum Temperature: ' + weatherForecastForWeek[count].temp_min + ' Kelvin'));
        table.append($('<tr></tr>').text(' Humidity: ' + weatherForecastForWeek[count].humidity  + ' %'));
        table.append($('<tr></tr>').text(' Wind Degree: ' + weatherForecastForWeek[count].wind_deg + ' degrees'));
        table.append($('<tr></tr>').text(' Wind Speed: ' + weatherForecastForWeek[count].wind_speed + ' meter/sec'));
        table.append($('<tr></tr>').text(' Description: ' + weatherForecastForWeek[count].desc));
        $('#table'+ count).html(table);
    }
}

