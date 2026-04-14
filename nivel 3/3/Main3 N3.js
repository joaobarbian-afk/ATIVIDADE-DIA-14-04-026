const mensagem = document.getElementById("mensagem");
const btn = document.getElementById("btn");

btn.addEventListener("click", buscarDados);

async function buscarDados() {
  mensagem.textContent = "Carregando...";

  try {
    // ❌ URL ERRADA de propósito
    const response = await fetch("https://jsonplaceholder.typicode.com/ususarios");

    // força erro se não vier OK
    if (!response.ok) {
      throw new Error("Erro na requisição");
    }

    const dados = await response.json();

    mensagem.textContent = "Dados carregados com sucesso!";

  } catch (erro) {
    mensagem.textContent = "Erro ao carregar dados";
    console.error(erro);
  }
}