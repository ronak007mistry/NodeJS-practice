const https = require('https')
const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=40&lon=-75&units=metric&appid=yourappid'

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()