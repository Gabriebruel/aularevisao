function calcularIMC() {
    let nome = document.getElementById("nome").value;
    let alturaCm = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);

    let alturaM = alturaCm / 100;
    let imc = peso / (alturaM * alturaM);

    let classificacao;

    if (imc < 16) {
        classificacao = "Baixo peso muito grave";
    } else if (imc < 17) {
        classificacao = "Baixo peso grave";
    } else if (imc < 18.5) {
        classificacao = "Baixo peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc < 35) {
        classificacao = "Obesidade grau I";
    } else if (imc < 40) {
        classificacao = "Obesidade grau II";
    } else {
        classificacao = "Obesidade grau III";
    }

    document.getElementById("saida").innerText =
        nome + " possui IMC de " + imc.toFixed(2) + " (" + classificacao + ")";
}