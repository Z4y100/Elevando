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
                    let correctAnswer;

                    function avanzarNivel() {
                        // Verificar si ya estás en el último nivel
                        if (nivelActual < 5) {
                            nivelActual++;
                            respuestasCorrectasSeguidas = 0;
                    
                            // Mostrar una alerta indicando que el usuario ha avanzado al siguiente nivel
                            Swal.fire({
                                title: `¡Felicidades! Has avanzado al Nivel ${nivelActual}`,
                                icon: 'success',
                                confirmButtonText: 'OK'
                            });
                        } else {
                            // Si ya estás en el nivel 5, puedes hacer algo adicional o simplemente no hacer nada
                            console.log('¡Ya estás en el nivel más alto!');
                        }
                    }
                    

                    function generateExercise() {
                        let ejercicio;
                    
                        // Determina qué función de generación de ejercicio llamar según el nivel actual
                        switch (nivelActual) {
                            case 1:
                                ejercicio = generarEjercicioNivel1();
                                correctAnswer = ejercicio.resultado;
                                console.log('el resultado es: ', correctAnswer);
                                // Muestra la operación en el párrafo con id "exercise"
                                document.getElementById('exercise').innerHTML = `Resuelve: ${ejercicio.base}<sup>${ejercicio.exponente}</sup>`;
                                break;
                            case 2:
                                ejercicio = generarEjercicioNivel2();
                                correctAnswer = ejercicio.resultado;
                                console.log('el resultado es: ', correctAnswer);
                                document.getElementById('exercise').innerHTML = `Resuelve: ${ejercicio.base}<sup>-${ejercicio.exponente}</sup>`;
                                break;
                            case 3:
                                ejercicio = generarEjercicioNivel3();
                                correctAnswer = ejercicio.resultado;
                                console.log('el resultado es: ', correctAnswer);
                                console.log('La funcion seleccionada fue:  ', ejercicio.nombreFuncion);

                                    if (ejercicio.nombreFuncion === 'generarEjerciciosMultiplicacionMismaBase') {
                                        document.getElementById('exercise').innerHTML = `Resuelve: (${ejercicio.base}<sup>${ejercicio.exponente1}</sup>)(${ejercicio.base}<sup>${ejercicio.exponente2}</sup>)`;
                                    } else if (ejercicio.nombreFuncion === 'generarEjerciciosDivisionMismaBase') {
                                        document.getElementById('exercise').innerHTML = `Resuelve: (${ejercicio.base}<sup>${ejercicio.exponente1}</sup>)/(${ejercicio.base}<sup>${ejercicio.exponente2}</sup>)`;
                                    } else if (ejercicio.nombreFuncion === 'generarEjerciciosMultiplicacionDiferenteBase') {
                                        document.getElementById('exercise').innerHTML = `Resuelve: (${ejercicio.base1}<sup>${ejercicio.exponente}</sup>)(${ejercicio.base2}<sup>${ejercicio.exponente}</sup>)`;
                                    } else if (ejercicio.nombreFuncion === 'generarEjerciciosDivisionDiferenteBase') {
                                        document.getElementById('exercise').innerHTML = `Resuelve: (${ejercicio.base1}<sup>${ejercicio.exponente}</sup>)/(${ejercicio.base2}<sup>${ejercicio.exponente}</sup>)`;
                                    }
                                break;
                            case 4:
                                ejercicio = generarEjercicioNivel4();
                                correctAnswer = ejercicio.resultado;
                                console.log('el resultado es: ', correctAnswer);
                                document.getElementById('exercise').innerHTML = `Resuelve: (${ejercicio.base}<sup>${ejercicio.exponente1}</sup>)<sup>${ejercicio.exponente2}</sup>`;
                                break;
                            case 5:

                            ejercicio = generarEjercicioNivel5();
                            correctAnswer = ejercicio.resultado;
                            console.log('el resultado es: ', correctAnswer);
                            console.log('La funcion seleccionada fue:  ', ejercicio.nombreFuncion);

                            
                            if (ejercicio.nombreFuncion === 'generarEjercicioNivel1') {
                                ejercicio = generarEjercicioNivel1();
                                correctAnswer = ejercicio.resultado;
                                console.log('el resultado es: ', correctAnswer);
                                // Muestra la operación en el párrafo con id "exercise"
                                document.getElementById('exercise').innerHTML = `Resuelve: ${ejercicio.base}<sup>${ejercicio.exponente}</sup>`;

                            } else if (ejercicio.nombreFuncion === 'generarEjercicioNivel2') {
                                ejercicio = generarEjercicioNivel2();
                                correctAnswer = ejercicio.resultado;
                                console.log('el resultado es: ', correctAnswer);
                                document.getElementById('exercise').innerHTML = `Resuelve: ${ejercicio.base}<sup>-${ejercicio.exponente}</sup>`;

                            } else if (ejercicio.nombreFuncion === 'generarEjercicioNivel3') {

                                ejercicio = generarEjercicioNivel3();
                                correctAnswer = ejercicio.resultado;
                                console.log('el resultado es: ', correctAnswer);
                                console.log('La funcion seleccionada fue:  ', ejercicio.nombreFuncion);

                                    if (ejercicio.nombreFuncion === 'generarEjerciciosMultiplicacionMismaBase') {
                                        document.getElementById('exercise').innerHTML = `Resuelve: (${ejercicio.base}<sup>${ejercicio.exponente1}</sup>)(${ejercicio.base}<sup>${ejercicio.exponente2}</sup>)`;
                                    } else if (ejercicio.nombreFuncion === 'generarEjerciciosDivisionMismaBase') {
                                        document.getElementById('exercise').innerHTML = `Resuelve: (${ejercicio.base}<sup>${ejercicio.exponente1}</sup>)/(${ejercicio.base}<sup>${ejercicio.exponente2}</sup>)`;
                                    } else if (ejercicio.nombreFuncion === 'generarEjerciciosMultiplicacionDiferenteBase') {
                                        document.getElementById('exercise').innerHTML = `Resuelve: (${ejercicio.base1}<sup>${ejercicio.exponente}</sup>)(${ejercicio.base2}<sup>${ejercicio.exponente}</sup>)`;
                                    } else if (ejercicio.nombreFuncion === 'generarEjerciciosDivisionDiferenteBase') {
                                        document.getElementById('exercise').innerHTML = `Resuelve: (${ejercicio.base1}<sup>${ejercicio.exponente}</sup>)/(${ejercicio.base2}<sup>${ejercicio.exponente}</sup>)`;
                                    }
                                
                            } else if (ejercicio.nombreFuncion === 'generarEjercicioNivel4') {
                                ejercicio = generarEjercicioNivel4();
                                correctAnswer = ejercicio.resultado;
                                console.log('el resultado es: ', correctAnswer);
                                document.getElementById('exercise').innerHTML = `Resuelve: (${ejercicio.base}<sup>${ejercicio.exponente1}</sup>)<sup>${ejercicio.exponente2}</sup>`;
                                
                            }
                                break;
                            // Agrega más casos según sea necesario para niveles adicionales
                            default:
                                break;
                        }
                    
                        
                    }
                    

                    function checkAnswer() {
                        // Obtener la respuesta del usuario
                        const userAnswer = document.getElementById('userAnswer').value;
                    

                                              
                                            console.log('Respuesta generada:', correctAnswer.toString().trim());
                                            console.log('Respuesta del usuario:', userAnswer.trim());
                        // Verificar si la respuesta del usuario es correcta
                        if (userAnswer.trim() === correctAnswer.toString().trim()) {
                            // Respuesta correcta
                                Swal.fire({
                                title: `¡Correcto!`,
                                icon: 'success',
                                confirmButtonText: 'OK'
                            });
                            respuestasCorrectasSeguidas++;
                    
                            // Verificar si el usuario ha contestado 5 preguntas seguidas correctamente
                            if (respuestasCorrectasSeguidas === 5) {
                                // Avanzar al siguiente nivel
                                avanzarNivel();
                            }
                        } else {
                            // Respuesta incorrecta
                            Swal.fire({
                                title: `Incorrecto. Inténtalo de nuevo.`,
                                icon: 'error',
                                confirmButtonText: 'OK'
                            });
                            // Reiniciar el contador de respuestas correctas seguidas
                            respuestasCorrectasSeguidas = 0;
                        }
                    
                        // Generar un nuevo ejercicio después de verificar la respuesta
                        generateExercise();
                    }



        
                    // Generar el primer ejercicio al cargar la página
                    generateExercise();

                    // Asignar el evento clic al botón con el id "verificarButton"
                        document.getElementById('verificarButton').addEventListener('click', function () {
                            checkAnswer(); // Llamada a la función existente

                            // Limpiar el campo de entrada después de verificar la respuesta
                            document.getElementById('userAnswer').value = '';
                        });


                }
            });
        }
    });
});





//Nivel 1
function generarEjercicios0o1() {
    var base = Math.floor(Math.random() * 10) + 1; //Numero de base
    var exponente = Math.floor(Math.random() * (2)); //exponente solo 0 o 1
    resultado = Math.pow(base, exponente);
    return { base, exponente, resultado };
}
function mostrarEjercicios0o1() {
    var contenedor = document.getElementById("ejercicios0o1");
    const { base, exponente, resultado } = generarEjercicios0o1();
    const impresionExponente = `<h1>${base}<sup>${exponente}</sup></h1>`;
    contenedor.innerHTML = `Resuelve: ${impresionExponente} = ${resultado}`;
}


//Nivel 2
function generarEjerciciosNegativos() {
    var base = Math.floor(Math.random() * 10) + 1; //Numero de base
    var exponente = Math.floor(Math.random() * (11) + 1);
    // console.log('Simplificado: ' + resultado);
    resultado = '1/' + base + '^' + exponente; //falta como ponerlo en fraccion
    return { base, exponente, resultado };
}
function mostrarEjerciciosNegativos() {
    var contenedor = document.getElementById("ejerciciosNegativos");
    const { base, exponente, resultado } = generarEjerciciosNegativos();
    const impresionExponente = `<h1>${base}<sup>-${exponente}</sup></h1>`;
    contenedor.innerHTML = `Resuelve: ${impresionExponente} = ${resultado}`;
}



//Nivel 3
function generarEjerciciosMultiplicacionMismaBase() {
    var base = Math.floor(Math.random() * 10) + 1; //Numero de base
    var exponente1 = Math.floor(Math.random() * (11));
    var exponente2 = Math.floor(Math.random() * (11));
    var sumaExponentes = exponente1 + exponente2;
    var resultado;
    if (sumaExponentes === 0 || sumaExponentes === 1) {
        resultado = Math.pow(base, sumaExponentes);
    } else {
        // resultado = `<h1>${base}<sup>${sumaExponentes}</sup></h1>`;
        resultado = base + '^' + sumaExponentes;
    }
    // console.log('Simplificado: ' + resultado);
    return { base, exponente1, exponente2, resultado };
}
function mostrarEjerciciosMultiplicacionMismaBase() {
    var contenedor = document.getElementById("ejerciciosMultiplicacionMismaBase");
    const { base, exponente1, exponente2, resultado } = generarEjerciciosMultiplicacionMismaBase();
    const impresionExponente = `<h1>(${base}<sup>${exponente1}</sup>)(${base}<sup>${exponente2}</sup>)</h1>`; //falta como ponerlo en fraccion
    contenedor.innerHTML = `Resuelve: ${impresionExponente} = ${resultado}`;
}
function generarEjerciciosDivisionMismaBase() {
    var base = Math.floor(Math.random() * 10) + 1; //Numero de base
    var exponente1 = Math.floor(Math.random() * (11));
    var exponente2 = Math.floor(Math.random() * (11));
    var restaExponentes = exponente1 - exponente2;
    var resultado;
    if (restaExponentes == 0 || restaExponentes == 1) {
        resultado = Math.pow(base, restaExponentes);
    } else {
        if (restaExponentes < 0) {
            var exponente = Math.abs(restaExponentes);
            resultado = '1/' + base + '^' + exponente; //falta como ponerlo en fraccion
        } else {
            // resultado = `<h1>${base}<sup>${restaExponentes}</sup></h1>`;
            resultado = base + '^' + restaExponentes;
        }
    }
    return { base, exponente1, exponente2, resultado };
}

function mostrarEjerciciosDivisionMismaBase() {
    var contenedor = document.getElementById("ejerciciosDivisionMismaBase");
    const { base, exponente1, exponente2, resultado } = generarEjerciciosDivisionMismaBase();
    const impresionExponente = `<h1>(${base}<sup>${exponente1}</sup>)/(${base}<sup>${exponente2}</sup>)</h1>`;
    contenedor.innerHTML = `Resuelve: ${impresionExponente} = ${resultado}`;
}
function generarEjerciciosMultiplicacionDiferenteBase() {
    var base1 = Math.floor(Math.random() * 10) + 1; //Numero de base
    var base2 = Math.floor(Math.random() * 10) + 1; //Numero de base
    var exponente = Math.floor(Math.random() * (11));
    var resultado;
    var multiplicaBases = base1 * base2;
    if (exponente === 0 || exponente === 1) {
        resultado = Math.pow(multiplicaBases, exponente);
    } else {
        // resultado = `<h1>${multiplicaBases}<sup>${exponente}</sup></h1>`;
        resultado = multiplicaBases + '^' + exponente;
    }
    return { base1, base2, exponente, resultado };
}

function mostrarEjerciciosMultiplicacionDiferenteBase() {
    var contenedor = document.getElementById("ejerciciosMultiplicacionDiferenteBase");
    const { base1, base2, exponente, resultado } = generarEjerciciosMultiplicacionDiferenteBase();
    const impresionExponente = `<h1>(${base1}<sup>${exponente}</sup>)(${base2}<sup>${exponente}</sup>)</h1>`;
    contenedor.innerHTML = `Resuelve: ${impresionExponente} = ${resultado}`;

}
function generarEjerciciosDivisionDiferenteBase() {
    var base1 = Math.floor(Math.random() * 10) + 1; //Numero de base
    var base2 = Math.floor(Math.random() * 10) + 1; //Numero de base
    var exponente = Math.floor(Math.random() * (11));
    var resultado;
    if (base1 % base2 == 0) {
        var baseEntera = base1 / base2;
        if (exponente == 0 || exponente == 1) {
            resultado = Math.pow(baseEntera, exponente);
        } else {
            // resultado = `<h1>${baseEntera}<sup>${exponente}</sup></h1>`;
            resultado = baseEntera + '^' + exponente;
        }
    } else {
        var baseFraccionaria = base1 + '/' + base2; //poner como fraccion
        if (exponente == 0) {
            resultado = 1;
        } else if (exponente == 1) {
            resultado = baseFraccionaria;
        } else {
            // resultado = `<h1>(${baseFraccionaria})<sup>${exponente}</sup></h1>`;
            resultado = baseFraccionaria + '^' + exponente;
        }

    }
    return { base1, base2, exponente, resultado };
}
function mostrarEjerciciosDivisionDiferenteBase() {
    var contenedor = document.getElementById("ejerciciosDivisionDiferenteBase");
    const { base1, base2, exponente, resultado } = generarEjerciciosDivisionDiferenteBase();
    const impresionExponente = `<h1>(${base1}<sup>${exponente}</sup>)/(${base2}<sup>${exponente}</sup>)</h1>`; //ponerlo como fraccion
    contenedor.innerHTML = `Resuelve: ${impresionExponente} = ${resultado}`;


}
//Nivel 4
function generarEjerciciosPotencias() {
    var base = Math.floor(Math.random() * 10) + 1; //Numero de base
    var exponente1 = Math.floor(Math.random() * (11));
    var exponente2 = Math.floor(Math.random() * (11));
    var multiplicaExponentes = exponente1 * exponente2;
    var resultado;
    if (multiplicaExponentes == 0 || multiplicaExponentes == 1) {
        resultado = Math.pow(base, multiplicaExponentes);
    } else {
        // resultado = `<h1>${base}<sup>${multiplicaExponentes}</sup></h1>`;
        resultado = base + '^' + multiplicaExponentes;
    }
    return { base, exponente1, exponente2, resultado };
}
function mostrarEjerciciosPotencias() {
    var contenedor = document.getElementById("ejerciciosPotencias");
    const { base, exponente1, exponente2, resultado } = generarEjerciciosPotencias();
    const impresionExponente = `<h1>(${base}<sup>${exponente1}</sup>)<sup>${exponente2}</sup></h1>`;
    contenedor.innerHTML = `Resuelve: ${impresionExponente} = ${resultado}`;

}









function generarEjercicioNivel1() {
    return generarEjercicios0o1();
}

function generarEjercicioNivel2() {
    return generarEjerciciosNegativos();
}


function generarEjercicioNivel3() {
    const funcionesGeneradoras = [
        { funcion: generarEjerciciosMultiplicacionMismaBase, nombre: 'generarEjerciciosMultiplicacionMismaBase' },
        { funcion: generarEjerciciosDivisionMismaBase, nombre: 'generarEjerciciosDivisionMismaBase' },
        { funcion: generarEjerciciosMultiplicacionDiferenteBase, nombre: 'generarEjerciciosMultiplicacionDiferenteBase' },
        { funcion: generarEjerciciosDivisionDiferenteBase, nombre: 'generarEjerciciosDivisionDiferenteBase' }
    ];

    // Selecciona un objeto con la función y su nombre al azar del array
    const objetoSeleccionado = funcionesGeneradoras[Math.floor(Math.random() * funcionesGeneradoras.length)];

    // Llama a la función seleccionada para obtener el ejercicio
    const ejercicio = objetoSeleccionado.funcion();

    // Agrega el nombre de la función al objeto del ejercicio
    ejercicio.nombreFuncion = objetoSeleccionado.nombre;

    return ejercicio;
}




function generarEjercicioNivel4() {
    return generarEjerciciosPotencias();
}


function generarEjercicioNivel5() {
    const funcionesGeneradoras = [
        { funcion: generarEjercicioNivel1, nombre: 'generarEjercicioNivel1' },
        { funcion: generarEjercicioNivel2, nombre: 'generarEjercicioNivel2' },
        { funcion: generarEjercicioNivel3, nombre: 'generarEjercicioNivel3' },
        { funcion: generarEjercicioNivel4, nombre: 'generarEjercicioNivel4' }
    ];

    // Selecciona un objeto con la función y su nombre al azar del array
    const objetoSeleccionado = funcionesGeneradoras[Math.floor(Math.random() * funcionesGeneradoras.length)];

    // Llama a la función seleccionada para obtener el ejercicio
    const ejercicio = objetoSeleccionado.funcion();

    // Agrega el nombre de la función al objeto del ejercicio
    ejercicio.nombreFuncion = objetoSeleccionado.nombre;

    return ejercicio;
}
