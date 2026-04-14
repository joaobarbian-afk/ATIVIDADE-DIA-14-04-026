const btn = document.getElementById("btn");
const lista = document.getElementById("lista");

btn.addEventListener("click", buscarUsuarios);

async function buscarUsuarios() {
    lista.innerHTML = "Carregando...";

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const usuarios = await response.json();

        lista.innerHTML = "";

        const primeiros5 = usuarios.slice(0, 5);

        primeiros5.forEach(usuario => {
            const li = document.createElement("li");
            li.textContent = `${usuario.title} - ${usuario.body}`;
            lista.appendChild(li);
        });

    } catch (erro) {
        lista.innerHTML = "Erro ao buscar usuários.";
        console.error(erro);
    }
}