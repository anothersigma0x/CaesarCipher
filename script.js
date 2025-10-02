console.log("script.js loaded"); // Verifica que el script se carga

function caesarCipher(str, shift) {
    if (isNaN(shift) || shift < 1 || shift > 25) {
        return "Invalid shift value. Please use a number between 1 and 25.";
    }
    return str.replace(/[a-zA-Z]/g, function(c) {
        const base = c < 'a' ? 65 : 97;
        return String.fromCharCode((c.charCodeAt(0) - base + shift) % 26 + base);
    });
}

function translate() {
    console.log("translate function called"); // Verifica que la función se ejecuta
    const plaintext = document.getElementById('plaintext');
    const shift = document.getElementById('shift');
    const output = document.getElementById('output');
    
    if (!plaintext || !shift || !output) {
        console.error("Required DOM elements not found.");
        return;
    }

    const plaintextValue = plaintext.value.trim();
    const shiftValue = parseInt(shift.value);
    const outputValue = caesarCipher(plaintextValue, shiftValue);
    output.innerHTML = outputValue;
}

// Añadir event listener al botón
document.addEventListener('DOMContentLoaded', function() {
    const translateButton = document.getElementById('translateButton');
    if (translateButton) {
        translateButton.addEventListener('click', translate);
        console.log("Translate button listener added");
    } else {
        console.error("Translate button not found");
    }
});