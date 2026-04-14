const inputCep = document.getElementById("cep");
const btn = document.getElementById("btnBuscar");
const resultado = document.getElementById("resultado");

btn.addEventListener("click", buscarCep);

async function buscarCep() {
  const cep = inputCep.value.replace(/\D/g, ""); // remove traços e pontos

  if (cep.length !== 8) {
    resultado.textContent = "CEP inválido.";
    return;
  }

  resultado.textContent = "Carregando...";

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const dados = await response.json();

    if (dados.erro) {
      resultado.textContent = "CEP não encontrado.";
      return;
    }

    resultado.innerHTML = `
      <p>Rua: ${dados.logradouro}</p>
      <p>Bairro: ${dados.bairro}</p>
      <p>Cidade: ${dados.localidade}</p>
    `;
  } catch (erro) {
    resultado.textContent = "Erro ao buscar CEP.";
  }
}