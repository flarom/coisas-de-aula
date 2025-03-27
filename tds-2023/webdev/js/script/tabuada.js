let numero = prompt("Digite um valor");
imprimirTabuada(numero);

function imprimirTabuada(numero){
    if(numero==""){
        alert("Valor invalido");
        return;
    }
    for(let i = 1; i <= 10; i++) {
        let multiplicacao = numero * i;
        let par = ehPar(multiplicacao);
        console.log(`${numero}*${i}=${multiplicacao} (${par})`);
    }
}

function ehPar(numero){
    let mensagem;

    if(numero %2 === 0) {
        mensagem = "par";
    } else {
        mensagem = "impar";
    }

    return mensagem;
}