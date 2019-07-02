const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +
        '.json?access_token=pk.eyJ1IjoibGFiMjIwIiwiYSI6ImNqeGQ5cGVjcjBhejczb21qMXNrOWpqZGIifQ.m451cOxxSM9YS-mON2WrIQ&limit=1';

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to the geocoding service');
        } else if(body.features.length === 0) {
            callback(body.query[0] + ' not found');
        } else {
            callback (undefined, {
                location: body.features[0].place_name,
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0]
            });
        }
    });
};

module.exports = geocode;