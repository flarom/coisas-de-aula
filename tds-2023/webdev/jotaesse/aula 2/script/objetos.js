const produto = {
    id: 1,
    nome: "Camiseta",
    preco: 29.90,
    emEstoque: true,

    mostrarDetalhes: function() {
        console.log(`Produto: ${this.nome}, Preço: ${this.preco}`);
    }
};

console.log(produto.nome);
console.log(produto["preco"]);
produto.mostrarDetalhes();

// adicionar nova propriedade
produto.categoria = "Vestuário";

// modificar uma propriedade existente
produto.preco = 24.90;

// remover uma propriedade
delete produto.emEstoque;