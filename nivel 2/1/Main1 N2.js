const inputId = document.getElementById("inputId");
const botao = document.getElementById("btnBuscar");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", buscarUsuario);

async function buscarUsuario() {
  const id = inputId.value;

  if (!id) {
    resultado.textContent = "Digite um ID válido.";
    return;
  }

  resultado.textContent = "Carregando...";

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const usuario = await response.json();

    resultado.textContent = `Nome: ${usuario.name} | Telefone: ${usuario.phone}`;

  } catch (erro) {
    resultado.textContent = "Erro ao buscar usuário.";
  }
}