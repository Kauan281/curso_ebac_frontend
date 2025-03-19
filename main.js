document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-comparacao")
    const numberA = document.getElementById("numA");
    const numberB = document.getElementById("numB");
    const mensagem = document.querySelector(".resultado");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const num1 = parseFloat(numberA.value);
        const num2 = parseFloat(numberB.value);

        if (num2 > num1){
            mensagem.textContent = "Formulário válido. Número B é maior que o número A."
            mensagem.style.backgroundColor = "#27ae60"
        } else {
            mensagem.textContent = "Formulário inválido. Número B é menor que o número A. Tente novamente."
            mensagem.style.backgroundColor = "red"
        }

        mensagem.style.display = "block";
    });

    numberA.addEventListener("input", function() {
        mensagem.style.display = "none"
    });
    
    numberB.addEventListener("input", function() {
        mensagem.style.display = "none"
    });
});