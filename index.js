window.onload = function () {
    fetch('GET', "https://api-consumers.onrender.com/")
    .then(() => {window.location.href = "https://api-consumers.onrender.com/"})
}