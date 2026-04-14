const form = document.getElementById("formUsuario");

form.addEventListener("submit", enviarUsuario);

async function enviarUsuario(event) {
  event.preventDefault(); // não recarrega a página

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: nome,
        email: email
      })
    });

    const dados = await response.json();
    console.log("Resposta da API:", dados);

  } catch (erro) {
    console.error("Erro ao enviar:", erro);
  }
}   