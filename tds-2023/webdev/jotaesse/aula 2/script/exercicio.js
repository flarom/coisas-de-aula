class Produto {
    constructor(id, nome, preco, categoria) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
    }
}

const produtos = [
    new Produto(1,  "Café Preto",       2.00, "Tradicional"),
    new Produto(2,  "Café Expresso",    2.80, "Tradicional"),
    new Produto(3,  "Café Americano",   2.70, "Tradicional"),
    new Produto(4,  "Café com Leite",   2.50, "Com Leite"),
    new Produto(5,  "Café Latte",       3.00, "Com Leite"),
    new Produto(6,  "Café Macchiato",   3.20, "Com Leite"),
    new Produto(7,  "Cappuccino",       3.50, "Doces e Especiais"),
    new Produto(8,  "Mocha",            4.00, "Doces e Especiais"),
    new Produto(9,  "Café Irlandês",    5.00, "Doces e Especiais"),
    new Produto(10, "Café Gelado",      3.50, "Gelado")
];

function getFiltradoPreco(lista, filtroPreco) {
    return lista.filter(produto => produto.preco <= filtroPreco);
}

function getFiltradoCategoria(lista, categoria) {
    return lista.filter(produto => produto.categoria===categoria);
}

function getOrdenadoNome(){
    return produtos.sort((a, b) => a.nome.localeCompare(b.nome));
}

function getOrdenadoPreco(){
    return produtos.sort((a, b) => a.preco - b.preco);
}

// console.log("ordenado por nome     : ", getOrdenadoNome());
console.log("ordenado por preco    : ",getOrdenadoPreco());

// console.log("menores de 3 reais    : ", getFiltradoPreco(produtos, 3.00));
// console.log("com leite             : ", getFiltradoCategoria(produtos, "Com Leite"));

let cat = prompt("Categoria:");
let prc = parseFloat(prompt("Preço:"));

console.log(cat + " até "+ prc +" reais : ", getFiltradoPreco(getFiltradoCategoria(produtos, cat),prc));