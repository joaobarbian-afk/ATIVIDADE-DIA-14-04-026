const inputFiltro = document.getElementById("filtro");
const listaPosts = document.getElementById("listaPosts");

let todosPosts = [];

// Carrega os posts uma vez
carregarPosts();

async function carregarPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  todosPosts = posts; // guarda todos
  mostrarPosts(posts); // mostra todos no início
}

// Mostra os posts na tela
function mostrarPosts(posts) {
  listaPosts.innerHTML = "";

  posts.forEach(post => {
    const li = document.createElement("li");
    li.textContent = post.title;
    listaPosts.appendChild(li);
  });
}

// Filtra em tempo real enquanto digita
inputFiltro.addEventListener("input", () => {
  const texto = inputFiltro.value.toLowerCase();

  const filtrados = todosPosts.filter(post =>
    post.title.toLowerCase().includes(texto)
  );

  mostrarPosts(filtrados);
});