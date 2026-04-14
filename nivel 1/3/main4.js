const botao = document.getElementById("btnCarregar");
const lista = document.getElementById("lista");

botao.addEventListener("click", carregarUsuarios);

async function carregarUsuarios() {
  lista.innerHTML = "Carregando...";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const usuarios = await response.json();

    lista.innerHTML = "";

    usuarios.forEach(usuario => {
      const li = document.createElement("li");
      li.textContent = usuario.name;
      lista.appendChild(li);
    });

  } catch (erro) {
    lista.innerHTML = "Erro ao carregar usuários.";
  }
}