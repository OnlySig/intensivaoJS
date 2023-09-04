const carrinhoComQtd = {}
const carrinho = document.querySelector("#carrinho");
const botaoAbrir = document.querySelector("#abrir-carrinho");
const botaoFechar = document.querySelector("#fechar-carrinho");
const botaoAdicionar = document.querySelectorAll("#btnAdd");

botaoAbrir.addEventListener("click", _ => carrinho.classList.add('right-[0]'));

botaoFechar.addEventListener("click", _ => carrinho.classList.remove('right-[0]'));

botaoAdicionar.forEach(element => element.addEventListener("click", _ => {
    addCarrinho(
        element.parentNode.children[0].src, 
        element.parentNode.children[1].lastChild.data, 
        element.parentNode.children[2].lastChild.data, 
        element.parentNode.children[3].lastChild.data,
        element.parentNode.children[0].alt
    )
    atualizaInfoQtd(element.parentNode.children[0].alt)
    }
));

function atualizaInfoQtd(id) {
    const valor = document.querySelector(`#quantidade-${id}`)
    valor.innerHTML = carrinhoComQtd[id]
}

function incrementaQtd(id) {
    carrinhoComQtd[id]++
    atualizaInfoQtd(id)
}

function decrementaQtd(id) {
    carrinhoComQtd[id]--
    atualizaInfoQtd(id)
}

export function addCarrinho(img, marca, titulo, preco, id) {
    const containerProduto = document.querySelector("#produtos-carrinho");
    if (id in carrinhoComQtd) {
        incrementaQtd(id)
        return;
    }
    carrinhoComQtd[id] = 1
    const elementoArticle = document.createElement('article');
    const articleClasses = ["flex", "bg-slate-100", "rounded-lg", "p-1", "relative"]

    articleClasses.forEach(element => {
        elementoArticle.classList.add(element)
    })

    const cartaoProduto = `
            <button id="botaoRemover-${id}" class="absolute top-0 right-2"><i class="${id} fa-solid fa-circle-xmark text-slate-500 hover:text-red-900 duration-200"></i></button>
            <img class="h-24 rounded-lg" src="${img}" alt="Produto adicionado no carrinho: ${titulo}">
            <div class="flex flex-col justify-between p-2">
                <p class="text-slate-900 text-sm">${marca}</p>
                <p class="text-slate-900 text-sm">${titulo}</p>
                <p class="text-slate-400 text-xs">Tamanho: M</p>
                <p class="text-green-700 text-lg">${preco}</p>
            </div>
            <div id="controlador-${id}" class="${id} flex justify-center p-2 items-end gap-1 text-slate-950 absolute right-2 bottom-0 text-lg">
                <button id='decrementaProduto-${id}'>-</button>
                <p id="quantidade-${id}">${carrinhoComQtd[id]}</p>
                <button id='incrementaProduto-${id}'>+</button>
            </div>
    `
    elementoArticle.innerHTML = cartaoProduto;
    containerProduto.appendChild(elementoArticle);

    const controlador = document.querySelectorAll(`#controlador-${id}`);
    const btnRemoveCard = document.querySelectorAll(`#botaoRemover-${id}`);

    controlador.forEach(element => {
        element.addEventListener("click", e => {
            if(e.target.attributes['id'].value == `decrementaProduto-${id}`){
                decrementaQtd(id)
                if(element.children[1].textContent <= 0) {
                    removeCartao(e.target.parentNode.parentElement, e.target.parentNode.classList[0]);
                    return;
                }
            } else if(e.target.attributes['id'].value == `incrementaProduto-${id}`) {
                incrementaQtd(id)
            }
        });
    });

    btnRemoveCard.forEach(element => {
        element.addEventListener("click", e => {
            removeCartao(e.target.parentNode.parentElement, e.target.classList[0]);
        });
    });

    function removeCartao(evento, id) {
        containerProduto.removeChild(evento)
        delete carrinhoComQtd[id]
    }
}