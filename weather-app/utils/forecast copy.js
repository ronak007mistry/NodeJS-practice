const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude + '&lon='+ longitude + '&units=metric&appid=yourappid'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body.daily[0].weather[0].description +' .Is is currently ' + response.body.current.temp + ' degrees out there, And humidity is ' + response.body.current.humidity)
        }
    })
}

module.exports = forecast