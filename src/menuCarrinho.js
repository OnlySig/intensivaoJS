const carrinho = document.querySelector("#carrinho");
const botaoAbrir = document.querySelector("#abrir-carrinho");
const botaoFechar = document.querySelector("#fechar-carrinho");

botaoAbrir.addEventListener("click", _ => carrinho.classList.add('right-[0]'));

botaoFechar.addEventListener("click", _ => carrinho.classList.remove('right-[0]'));