// geocode ('Aurangabad', (error,data) => {
//     console.log('Error', error)
//     console.log('data', data)
// })

// forecast ('19.855947,75.437804', (error,data) => {
//     console.log('Error', error)
//     console.log('data', data)
// })

const request = require('request')

const forecast = (latitude, longitude,callback) => {
    const url ="http://api.weatherstack.com/forecast?access_key=4da5d083bb0a7dcedb6f198dd2fa921d&query=" + latitude +', ' + longitude +' ,';

request({ url, json: true }, (error, {body}) => {
    if (error ) {
        callback('Unable to connect to weather services!',undefined)
    } else if (body.error) {
        callback('Unable to find location',undefined)
    } else {
        callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature +
    " degrees out. It feels like " +body.current.feelslike +" degrees out. ")
    }
    
})
}

module.exports= forecast