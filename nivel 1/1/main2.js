const btn = document.getElementById("btn");
const lista = document.getElementById("lista");

btn.addEventListener("click", buscarUsuarios);

async function buscarUsuarios() {

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const usuarios = await response.json();

        
        usuarios.forEach(usuario => {
            const li = document.createElement("li");
            li.textContent = `${usuario.name} - ${usuario.email}`;
            lista.appendChild(li);
        });

    } catch (erro) {
        lista.innerHTML = "Erro ao buscar usuários.";
        console.error(erro);
    }
}