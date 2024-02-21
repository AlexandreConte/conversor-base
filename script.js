const botao = document.getElementById("botao");
const inputNumero = document.getElementById("numero");
const seletorBaseAtual = document.getElementById("base-atual");
const seletorBaseFinal = document.getElementById("base-final");
const divRes = document.getElementById("resultado");

botao.addEventListener("click", () => {
    let numeroFinal;
    const numeroAtual = +inputNumero.value;
    const baseAtual = +seletorBaseAtual.value;
    const baseFinal = +seletorBaseFinal.value;

    const decimal = parseInt(numeroAtual, baseAtual);
    numeroFinal = decimal.toString(baseFinal);

    divRes.innerHTML = `${numeroAtual}<sub>${baseAtual}</sub> = ${numeroFinal}<sub>${baseFinal}</sub>`;
    divRes.classList.remove("invisivel");
});
