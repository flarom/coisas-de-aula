const numeros = [10,20,30,40,50];

console.log(numeros[0]);
console.log(numeros[2]);
console.log(numeros[4]);

numeros.forEach(numero => {
    console.log("Número: " + numero);
});

let frutas = ["maçã", "banana", "cereja", "kiwi"];
console.log("Array original: ", frutas);

// push: adiciona elemento ao final do array
frutas.push("pêra");
console.log("Array após o push:", frutas);

// shift: remove o primeiro elemento do array
let frutaRemovida = frutas.shift();
console.log("Fruta removida:", frutaRemovida);
console.log("Array após o shift:", frutas);

// pop: remove o ultimo elemento do array
let ultimaFruta = frutas.pop();
console.log("Fruta removida:", ultimaFruta);
console.log("Array após o pop:", frutas);

// unshift: adiciona elemento ao inicio do array
frutas.unshift("morango");
console.log("Array após o unshift:", frutas);

// splice:  usado para remover ou adicionar elementos em qualquer posição
// exemplo: remover um elemento a partir do indice 1
let removidos = frutas.splice(1,1);
console.log("Após splice (remove 1 elemento do indice 1: ", frutas);
console.log("elemento removido: ", removidos);

// exemplo 2: adicionar elemento no indice 1 sem remover nenhum elemento
frutas.splice(1,0,"abacaxi", "uva");
console.log("Após splice (adiciona abacaxi e uva no indice 1: ", frutas);

// sort: ordenar em ordem alfabetica
frutas.sort();
console.log("Array após sort: ", frutas);

// map: cria um array com o resultado da aplicação de uma função em cada elemento
const numerosDobrados = numeros.map(numero => numero*2);
console.log(numerosDobrados);

// filter: criar um array contendo apenas os elementos que atendam uma condição
const numerosAleatorios = [5, 8, 20, 18, 9, 45];
const numerosPares = numerosAleatorios.filter(numero => numero %2===0);
console.log(numerosPares);

function maiorQue(valor){
    return valor>10;
}

const maiores = numerosAleatorios.filter(maiorQue);
console.log(maiores);

const frutasComLetraA = frutas.filter(fruta => fruta.includes("a"));
console.log(frutasComLetraA);