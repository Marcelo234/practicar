let nivelOxigeno = 80;
let nivelCombustible = 60;

console.log("Revisando sistemas de soporte vital...");

if (nivelOxigeno < 20) {
    console.log("🚨 ALERTA CRÍTICA: ¡Oxígeno por debajo del 50%! Activando reserva.");
} else {
    console.log("✅ Oxígeno estable. Los astronautas pueden respirar tranquilos.");
}


if (nivelCombustible < 30) {
    console.log("🚨 ALERTA CRÍTICA: ¡Combustible bajo! Abortando misión.");
} else {
    console.log("✅ Combustible suficiente para continuar la misión.");
}

console.log("--- Revisión completada ---");
