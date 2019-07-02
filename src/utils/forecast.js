request = require('request');


const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/21d14aefbdbc25e29f95f52bac1b1fa7/' + latitude + ',' + longitude + '?units=si';

    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback(error);
        } else if(body.error) {
            callback(body.error)
        } else {
            callback(undefined,
                body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees. ' +
                'There is ' + 100 * body.currently.precipProbability + '% chance of rain.'
            )
        }
    })
};

module.exports = forecast;