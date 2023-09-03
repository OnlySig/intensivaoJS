const mostraProduto = document.querySelector("#container-produto");
export function criaCartao(catalogo) {
    catalogo.forEach(element => {
        mostraProduto.innerHTML += `
        <div class=" flex flex-col justify-between shadow-xl shadow-slate-400 w-48 m-2 p-2 group rounded-lg" id="card-produto-${element.id}">
            <img class="imagem group-hover:scale-110 duration-300 my-3 rounded-lg" src="./assets/img/${element.imagem}" alt="Produto 1 do IntensivaoJS">
            <p class="text-sm">${element.marca}</p>
            <p class="text-sm">${element.nome}</p>
            <p class="text-sm">$${element.preco}</p>
            <button class="bg-slate-950 hover:bg-slate-700 duration-200 text-slate-200" id="btnAdd"><i class="fa-solid fa-cart-plus"></i></button>
        </div>
    `
});
}