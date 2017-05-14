import $ from 'jquery'
import {} from 'lodash'

var weatherForecast =  [];
var weatherForecastForWeek = [];

$(document).ready(
    function(){
        getForecast();
        
    }
)

function getForecast() {
    

    $.get("http://api.openweathermap.org/data/2.5/forecast?id=1259229&APPID=0d1f8c8af4a3403bff59f4e5ca902546", function (response){
        
        $("#city").html(response.city.name);
        
        console.log(response);

        response.list.forEach(iterateWeatherList) ;
           
    }).then(function () {

        createTable();

    });
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
        console.log(element);
        return element.date == dayForecast.dt_txt.substring(0,10); 
    });
    if(tempArray.length == 0) {
        weatherForecastForWeek.push(weatherForecast);
    }

}


function createTable(){
    var table = $('<table></table>');
    var count;
    console.log("3  "+weatherForecastForWeek);
    console.log("4  "+ weatherForecastForWeek.length);
    for( count = 1; count < weatherForecastForWeek.length; count++){

         $("#date"+ count).html(weatherForecastForWeek[count].date); 

        table.append($('<tr></tr>').text(' Date ' + weatherForecastForWeek[count].date));
        table.append($('<tr></tr>').text(' Temperature ' + weatherForecastForWeek[count].temp));
        table.append($('<tr></tr>').text(' Maximum Temperature ' + weatherForecastForWeek[count].temp_max));
        table.append($('<tr></tr>').text(' Minimum Temperature ' + weatherForecastForWeek[count].temp_min));
        table.append($('<tr></tr>').text(' Humidity ' + weatherForecastForWeek[count].humidity));
        table.append($('<tr></tr>').text(' Wind Degree ' + weatherForecastForWeek[count].wind_deg));
        table.append($('<tr></tr>').text(' Wind Speed ' + weatherForecastForWeek[count].wind_speed));
        table.append($('<tr></tr>').text(' Description ' + weatherForecastForWeek[count].desc));
        $('#table'+i).html(table);
    }
}

function showWeatherForecast() {

    $.when(getForecast()).then(function () {

        createTable();

    });

}
