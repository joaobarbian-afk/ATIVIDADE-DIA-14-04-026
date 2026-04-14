const inputBusca = document.getElementById("busca");
const lista = document.getElementById("lista");

let todosPosts = [];

// 1) Buscar posts uma vez
carregarPosts();

async function carregarPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  todosPosts = posts;
  mostrarPosts(posts);
}

// 2) Mostrar posts na tela
function mostrarPosts(posts) {
  lista.innerHTML = "";

  posts.forEach(post => {
    const li = document.createElement("li");
    li.textContent = post.title;
    lista.appendChild(li);
  });
}

// 3) Filtrar conforme digita
inputBusca.addEventListener("input", () => {
  const texto = inputBusca.value.toLowerCase();

  const filtrados = todosPosts.filter(post =>
    post.title.toLowerCase().includes(texto)
  );

  mostrarPosts(filtrados);
});