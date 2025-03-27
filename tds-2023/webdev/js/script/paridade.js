function ehPar(numero){
    let mensagem;

    if(numero %2 === 0) {
        mensagem = "o numero é par";
    } else {
        mensagem = "o numero é impar";
    }

    return mensagem;
}

console.log(ehPar(8));