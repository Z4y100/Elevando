document.addEventListener("DOMContentLoaded", function () {
    // Muestra la primera alerta
    Swal.fire({
        title: "En este apartado encontrarás ejercicios divididos en 5 niveles de dificultad conforme lo aprendido. Recuerda que puedes acceder a la sección de materiales de apoyo si tienes alguna duda.",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#FFFF00",
        backdrop: `
        rgba(0,0,123,0.4)
        url("img/bob.gif")
        left top
        no-repeat
        `
    }).then((result) => {
        // Este bloque de código se ejecutará después de que el usuario haga clic en "OK" en la primera alerta

        if (result.isConfirmed) {
            // Muestra la segunda alerta con un GIF animado en el centro
            Swal.fire({
                title: 'Segunda Alerta',
                html: '<img src="img/calamardo.gif" style="display: block; margin: auto;">' +
                      '<p>Texto adicional o contenido aquí.</p>',
                icon: 'success',
                confirmButtonText: 'Entendido'
            }).then((result) => {
                // Este bloque de código se ejecutará después de que el usuario haga clic en "Entendido" en la segunda alerta

                if (result.isConfirmed) {
                    // Muestra la tercera alerta
                    Swal.fire({
                        title: 'Tercera Alerta',
                        text: 'Esta es la tercera alerta después de hacer clic en Entendido.',
                        icon: 'info',
                        confirmButtonText: 'OK'
                    });
                }
            });
        }
    });
});
