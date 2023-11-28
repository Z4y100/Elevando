document.addEventListener("DOMContentLoaded", function () {
    // Muestra la primera alerta
    Swal.fire({
        title: "En este apartado encontrará ejercicios divididos en 5 niveles de dificultad conforme lo aprendido. Recuerde que puede acceder a la sección de materiales de apoyo si tiene alguna duda.",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#FFFF00",
        backdrop: `
        rgba(0,0,123,0.4)
        url("img/bob.gif")
        left top
        no-repeat
        `,
        confirmButtonText: 'ENTENDIDO'
    }).then((result) => {
        // Este bloque de código se ejecutará después de que el usuario haga clic en "OK" en la primera alerta

        if (result.isConfirmed) {
            // Muestra la segunda alerta con un GIF animado en el centro
            Swal.fire({
                title: "A continuacion se van a presentar una serie de ejercicios de nivel 1. Si contesta adecuadamente cinco ejercicios seguidos, va a pasar al siguiente nivel, de lo contrario se mantendra en el nivel 1.",
                width: 600,
                padding: "3em",
                color: "#716add",
                background: "#FFFF00",
                backdrop: `
                    rgba(0,0,123,0.4)
                    url("img/bob.gif")
                    left top
                    no-repeat
                `,
                confirmButtonText: 'ENTENDIDO'

            }).then((result) => {
                // Este bloque de código se ejecutará después de que el usuario haga clic en "Entendido" en la segunda alerta

                if (result.isConfirmed) {
                    // Muestra la tercera alerta
                    Swal.fire({
                        title: "Si logra llegar al nivel 5, ¡FELICIDADES! Es usted un fuera de serie.",
                        width: 600,
                        padding: "3em",
                        color: "#716add",
                        background: "#FFFF00",
                        backdrop: `
                            rgba(0,0,123,0.4)
                            url("img/animo.gif")
                            left top
                            no-repeat
                        `,
                        confirmButtonText: 'ENTENDIDO'
                    });

                    // Variables para controlar el nivel y el número de respuestas correctas seguidas
                    let nivelActual = 1;
                    let respuestasCorrectasSeguidas = 0;

                    function avanzarNivel() {
                        nivelActual++;
                        respuestasCorrectasSeguidas = 0;

                        // Mostrar una alerta indicando que el usuario ha avanzado al siguiente nivel
                        Swal.fire({
                            title: `¡Felicidades! Has avanzado al Nivel ${nivelActual}`,
                            icon: 'success',
                            confirmButtonText: 'OK'
                        });
                    }

                    function generateExercise() {
                        // Generar números aleatorios para la base y el exponente
                        const base = Math.floor(Math.random() * 10) + 1;
                        const exponent = Math.floor(Math.random() * 5) + 1;

                        // Mostrar la operación en el párrafo con id "exercise"
                        document.getElementById('exercise').textContent = `${base}^${exponent}`;
                    }

                    function checkAnswer() {
                        // Obtener la respuesta del usuario
                        const userAnswer = document.getElementById('userAnswer').value;

                        // Obtener la base y el exponente actual
                        const [base, exponent] = document.getElementById('exercise').textContent.split('^');

                        // Calcular la respuesta correcta
                        const correctAnswer = Math.pow(parseInt(base), parseInt(exponent));

                        // Verificar si la respuesta del usuario es correcta
                        if (parseInt(userAnswer) === correctAnswer) {
                            alert('¡Correcto!');
                            respuestasCorrectasSeguidas++;

                            // Verificar si el usuario ha contestado 5 preguntas seguidas correctamente
                            if (respuestasCorrectasSeguidas === 5) {
                                // Avanzar al siguiente nivel
                                avanzarNivel();
                            }

                        } else {
                            alert('Incorrecto. Inténtalo de nuevo.');
                            // Reiniciar el contador de respuestas correctas seguidas
                            respuestasCorrectasSeguidas = 0;
                        }

                        // Generar un nuevo ejercicio después de verificar la respuesta
                        generateExercise();
                    }

                    // Asignar el evento clic al botón con el id "verificarButton"
                    document.getElementById('verificarButton').addEventListener('click', checkAnswer);

                    // Generar el primer ejercicio al cargar la página
                    generateExercise();
                }
            });
        }
    });
});
