function multiplicar() {
    // Obtener los valores
    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;

    // Validar que ambos números existan
    if (num1 === "" || num2 === "") {
        document.getElementById("resultado").innerText = "Por favor, ingresa ambos números.";
        return;
    }

    // Convertir a número y multiplicar
    let resultado = parseFloat(num1) * parseFloat(num2);

    // Mostrar el resultado en el <p id="resultado">
    document.getElementById("resultado").innerText = 
        "El resultado de la multiplicación es: " + resultado;
}
