const API_URL = 'https://api.chucknorris.io/jokes/random'

fetch(API_URL)
    .then(resp => resp.json()
        .then(joke => console.log('Piada 1:', joke.value)))

fetch(API_URL)
    .then(resp => resp.json())
    .then(data => data.value)
    .then(value => value.toUpperCase())
    .then(value => 'PIADA 2:' + value + '!!!!')
    .then(console.log)