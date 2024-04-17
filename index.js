window.onload = function () {
    const request = new XMLHttpRequest()
    request.open('GET', 'https://api-consumers.onrender.com/')
    request.setRequestHeader('Content-Type', 'application/json')
    request.setRequestHeader('Accept', 'application/json')
    request.setRequestHeader('Access-Control-Allow-Origin', '*')
    request.addEventListener('load', function() {
        if (request.status === 200 && request.readyState === 4) {
            window.location.href = "https://api-consumers.onrender.com/"
        } else {
            if (request.status == 400 && request.readyState === 4) {
                console.log(request.response)
                // TODO: Add proper error handling
            }
        }
    })
    request.send()
}