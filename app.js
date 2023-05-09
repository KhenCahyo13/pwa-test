if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/serviceWorker.js')
        .then(registration => {
            console.log('Service worker terdaftar', registration)
        })
        .catch(error => {
            console.log('Service worker gagal didaftarkan', error)
        })
    })
}