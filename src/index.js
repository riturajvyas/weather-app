import $ from 'jquery'
import {} from 'lodash'

var weatherForecast =  [];
var weatherForecastForWeek = [];

$(document).ready(
    function(){
        showWeatherForecast();
        
    }
)

function getForecast() {
    

    $.get("http://api.openweathermap.org/data/2.5/forecast?id=1259229&APPID=0d1f8c8af4a3403bff59f4e5ca902546", function (response){
        
        $("#city").html(response.city.name);
        
        console.log(response);

        response.list.forEach(iterateWeatherList) ;

   
    })
}

function iterateWeatherList(dayForecast) {
    weatherForecast = [];

    weatherForecast.push( { "date" : dayForecast.dt_txt.substring(0,10), 
                            "temp" : dayForecast.main.temp,
                            "temp_max" : dayForecast.main.temp_max,
                            "temp_min" : dayForecast.main.temp_min,
                            "humidity" : dayForecast.main.humidity,
                            "wind_deg" : dayForecast.wind.deg,
                            "wind_speed" : dayForecast.wind.speed,
                            "desc" : dayForecast.weather[0].description
                        });

    

    // checking weather forecast is available for same date.
    var tempArray = $.grep(weatherForecastForWeek, function(element){ 
        return element[0].date == dayForecast.dt_txt.substring(0,10); 
    });
    if(tempArray.length == 0) {
        weatherForecastForWeek.push(weatherForecast);
    }
     
}

function showWeatherForecast() {
    getForecast();

    var table = $('<table></table>');
    var count;
    console.log(weatherForecastForWeek);
    console.log(weatherForecastForWeek.length);
    for( count = 1; count < weatherForecastForWeek.length; count++){

         $("#date"+i).html(weatherForecastForWeek[i].date); 

        table.append($('<tr></tr>').text(' Date ' + weatherForecastForWeek[i].date));
        table.append($('<tr></tr>').text(' Temperature ' + weatherForecastForWeek[i].temp));
        table.append($('<tr></tr>').text(' Maximum Temperature ' + weatherForecastForWeek[i].temp_max));
        table.append($('<tr></tr>').text(' Minimum Temperature ' + weatherForecastForWeek[i].temp_min));
        table.append($('<tr></tr>').text(' Humidity ' + weatherForecastForWeek[i].humidity));
        table.append($('<tr></tr>').text(' Wind Degree ' + weatherForecastForWeek[i].wind_deg));
        table.append($('<tr></tr>').text(' Wind Speed ' + weatherForecastForWeek[i].wind_speed));
        table.append($('<tr></tr>').text(' Description ' + weatherForecastForWeek[i].desc));
        $('#table'+i).html(table);
    }

    
}
