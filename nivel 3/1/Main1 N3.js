const container = document.getElementById("cards");

carregarUsuarios();

async function carregarUsuarios() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const usuarios = await response.json();

  usuarios.forEach(usuario => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${usuario.name}</h3>
      <p>Email: ${usuario.email}</p>
      <p>Cidade: ${usuario.address.city}</p>
    `;

    container.appendChild(card);
  });
}