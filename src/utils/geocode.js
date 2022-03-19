const request = require('request')

const geocode = (address,callback) => {
    const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?access_token=pk.eyJ1Ijoicm9oaXQ1NTUyIiwiYSI6ImNsMDE2Y24yaDBoaDUza21lcDg4N2Q2MjIifQ.Dd_D9yL3tlSxKSv-ZwsneQ&limit=1"

request({ url: geocodeURL, json: true }, (error, {body}) => {
    if (error ) {
        callback('Unable to connect to weather services!', undefined)
    } else if (body.features == "") {
        callback('Unable to find location', undefined)
    } else {
        callback(undefined, {
            latitude: body.features[0].center[0],
            longitude : body.features[0].center[1],
            location: body.features[0].
            place_name })
        
        }
    })
}

module.exports= geocode