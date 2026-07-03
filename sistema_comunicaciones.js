let señalDB = -85;
let estadoAntena = true;

console.log("Iniciando sistema de comunicaciones...");

if (señalDB < -90) {
    console.log("🚨 ALERTA: Señal muy débil. Comunicación en riesgo.");
} else {
    console.log("✅ Señal estable. Comunicación con la Tierra activa.");
}

if (!estadoAntena) {
    console.log("🚨 ALERTA CRÍTICA: Antena principal fuera de línea.");
} else {
    console.log("✅ Antena operativa.");
}

console.log("--- Sistema de comunicaciones listo ---");