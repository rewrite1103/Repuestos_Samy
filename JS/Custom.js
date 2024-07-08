function IniciarMapa (){
    let coord = {lat: 13.922983490718291,lng: -84.39597235176494};
    let map = new google.maps.Map(document.getElementById('Mapa'), {
        center: coord,
        zoom: 17 
    });
    let marker = new google.maps.Marker({
        position: coord,
        map: map,
        title: 'Repuestos SAMY'
    });

}

const seccionesOcultas = document.querySelectorAll('.esconder');


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle('mostrar', entry.isIntersecting);
    });
},
        {
            threshold: 0.4,
        });

    seccionesOcultas.forEach((seccion) => observer.observe(seccion));


    document.addEventListener("DOMContentLoaded", function() {
        const sections = document.querySelectorAll("section");
        const navLi = document.querySelectorAll("nav ul li a");
    
        window.addEventListener("scroll", () => {
            let current = "";
    
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                    current = section.getAttribute("id");
                }
            });
    
            navLi.forEach(a => {
                a.classList.remove("active");
                if (a.getAttribute("href").includes(current)) {
                    a.classList.add("active");
                }
            });
        });
    });
