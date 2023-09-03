const carrinho = document.querySelector("#carrinho");
const botaoAbrir = document.querySelector("#abrir-carrinho");
const botaoFechar = document.querySelector("#fechar-carrinho");
const botaoAdicionar = document.querySelectorAll("#btnAdd");

botaoAbrir.addEventListener("click", _ => carrinho.classList.add('right-[0]'));

botaoFechar.addEventListener("click", _ => carrinho.classList.remove('right-[0]'));

botaoAdicionar.forEach(element => element.addEventListener("click", _ => 
    addCarrinho(
        element.parentNode.children[0].src, 
        element.parentNode.children[1].lastChild.data, 
        element.parentNode.children[2].lastChild.data, 
        element.parentNode.children[3].lastChild.data
    )
));

export function addCarrinho(img, marca, titulo, preco) {
    const containerProduto = document.querySelector("#produtos-carrinho");
    const cartaoProduto = `
    <article class="flex bg-slate-100 rounded-lg p-1 relative my-2">
        <button id="botaoRemover" class="absolute top-0 right-2"><i class="fa-solid fa-circle-xmark text-slate-500 hover:text-red-900 duration-200"></i></button>
        <img class="h-24 rounded-lg mr-2" src="${img}" alt="Produto adicionado no carrinho: ${titulo}">
        <div class="flex flex-col gap-2 py-2">
        <p class="text-slate-900 text-sm">${marca}</p>
        <p class="text-slate-900 text-sm">${titulo}</p>
        <p class="text-slate-400 text-xs">Tamanho: M</p>
        <p class="text-green-700 text-lg">${preco}</p>
        </div>
        </article>
        `
        containerProduto.innerHTML += cartaoProduto
}