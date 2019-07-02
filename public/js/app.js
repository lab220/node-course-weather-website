console.log('Client side javascript file is loaded!');

const getForecast = (address) => {
    const url = '/weather?address=' + address;

    messageOne.textContent = 'Retrieving forecast';
    messageTwo.textContent = '';

    fetch(url).then((response) => {
        response.json().then(({error, location, forecast}) => {
            if (error) {
                messageOne.textContent = error;
            } else {
                messageOne.textContent = location;
                messageTwo.textContent = forecast
            }
        })
    });
};

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = search.value;
    getForecast(location)
});