let nivelOxigeno = 10;
let nivelCombustible = 60;

console.log("Revisando sistemas de soporte vital...");

if (nivelOxigeno < 50 || nivelCombustible < 20) {
    console.log("🚨 ALERTA CRÍTICA EN LA NAVE: Revisar sistemas de emergencia inmediatamente.");
} else {
    console.log("✅ Todos los sistemas estables. Misión segura.");
}


console.log("--- Revisión completada ---");
