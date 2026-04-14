const lista = document.getElementById("lista");
const detalhes = document.getElementById("detalhes");

carregarUsuarios();

async function carregarUsuarios() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const usuarios = await response.json();

  usuarios.forEach(usuario => {
    const li = document.createElement("li");
    li.textContent = usuario.name;

    // quando clicar no nome
    li.addEventListener("click", () => {
      mostrarDetalhes(usuario);
    });

    lista.appendChild(li);
  });
}

function mostrarDetalhes(usuario) {
  detalhes.innerHTML = `
    <p><strong>Email:</strong> ${usuario.email}</p>
    <p><strong>Telefone:</strong> ${usuario.phone}</p>
    <p><strong>Empresa:</strong> ${usuario.company.name}</p>
  `;
}