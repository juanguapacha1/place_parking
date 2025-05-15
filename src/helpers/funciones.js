// src/helpers/funciones.js
import Swal from "sweetalert2"; // Lo mantenemos para alertaError

export function alertaConfirmacion() {
    Swal.fire({
        title: "Correcto!",
        text: "Ha ingresado de forma correcta!",
        icon: "success"
    });
}

export function alertaError(mensaje) {
    Swal.fire({
        title: "Error!",
        text: mensaje,
        icon: "error"
    });
}

// MODIFICADA: Hacemos la redirección más directa
export function alertaRedireccion(navigateFunction, path, mensaje) {
    // Primero, muestra la alerta (opcional, puedes quitarla si interfiere)
    // Para depuración, podemos usar un alert simple por ahora.
    alert(mensaje); // O usar Swal pero sin su lógica de timer para la redirección

    // Luego, ejecuta la navegación inmediatamente.
    navigateFunction(path);

    // Si quieres usar Swal de forma más controlada para esto:
    /*
    Swal.fire({
        title: mensaje,
        icon: "success",
        timer: 1500, // Un timer corto
        showConfirmButton: false
    }).then(() => {
        // La navegación ocurre DESPUÉS de que la alerta se cierra.
        // Esto es generalmente más seguro si hay operaciones que deben completarse antes.
        navigateFunction(path);
    });
    */
}

export function generarToken() {
    // Tu función de generar token está bien
    return Math.random().toString(36).substring(2, 10) + "-" + Math.random().toString(36).substring(2, 10);
}