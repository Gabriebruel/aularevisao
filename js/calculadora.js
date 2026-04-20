function calcular() {
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let operacao = document.getElementById("operacao").value;

    let resultado;

    if (operacao === "+") {
        resultado = n1 + n2;
    } else if (operacao === "-") {
        resultado = n1 - n2;
    } else if (operacao === "*") {
        resultado = n1 * n2;
    } else if (operacao === "/") {
        resultado = n1 / n2;
    }

    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}