document.addEventListener("DOMContentLoaded", function () {
    const botonTema = document.getElementById("cambiarTema");
    
    botonTema.addEventListener("click", function () {
        window.location.href = "https://www.salud.gob.sv/autoridades-de-salud-informan-sobre-la-situacion-del-dengue-en-el-salvador/"; 
    });
    
    const imagenes = document.querySelectorAll("#lugares img");
    imagenes.forEach(img => {
        img.addEventListener("click", function () {
            alert("¡Recuerda tomar medidas de prevención contra el dengue!");
        });
    });
});
