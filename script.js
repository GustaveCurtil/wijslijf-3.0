const landingspagina = document.querySelector(".landingspagina");

// landingspagina.addEventListener("click", (e) => {
//     console.log("yo")
//     document.location.href="aanbod.html"
// })

['touchmove', 'touchend'].forEach(event => {
    landingspagina.addEventListener(event, (e) => {
        console.log("yo")
        document.location.href="aanbod.html"
    })
});

