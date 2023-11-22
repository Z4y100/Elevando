document.addEventListener('DOMContentLoaded', function() {
    var switchCheckbox = document.getElementById('switch-theme');

    switchCheckbox.addEventListener('change', function() {
        // Agrega lógica para cambiar el tema aquí
        if (switchCheckbox.checked) {
            Swal.fire({
                title: "Tema Oscuro!",
                text: "Ahora navegaras con el tema oscuro!",
                icon: "success",
                // background: "#1f2430",
              });
            var body = document.body;
                    // Alterna entre las clases de tema claro y oscuro
                    body.classList.toggle('light-mode');
                    body.classList.toggle('dark-mode');
        } else {
            Swal.fire({
                title: "Tema Claro!",
                text: "Ahora navegaras con el tema claro!",
                icon: "success"
              });
            var body = document.body;
            // Alterna entre las clases de tema claro y oscuro
            body.classList.toggle('light-mode');
            body.classList.toggle('dark-mode');
        }
    });
});
