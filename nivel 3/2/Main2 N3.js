const status = document.getElementById("status");
const container = document.getElementById("cards");

carregarUsuarios();

async function carregarUsuarios() {
  // 🔹 Antes do fetch
  status.textContent = "Carregando...";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const usuarios = await response.json();

    // 🔹 Depois do fetch (remove a mensagem)
    status.textContent = "";

    usuarios.forEach(usuario => {
      const card = document.createElement("div");
      card.innerHTML = `
        <h3>${usuario.name}</h3>
        <p>${usuario.email}</p>
        <p>${usuario.address.city}</p>
      `;
      container.appendChild(card);
    });

  } catch (erro) {
    status.textContent = "Erro ao carregar usuários.";
  }
}