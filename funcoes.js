function saudar(){
    console.log("Olá!");
    console.log("Seja bem vindo.");
}
function potencia(base, expoente){
    return base**expoente;
}
const saudarArrow = (nome='visitante') => { // Também é possível guardar a função como function expression, sem arrow
    return `Olá ${nome}`;
}
const potenciaArrow = (base,exp) => base**exp; // Retorno implícito quando é uma função simples

function teste(nome){
    console.log("function declaration", nome)
}

const testeExp = function(){
    console.log("function expression")
}

const testeArrow = (nome) => {
    console.log("Arrow function",nome)
}
/*
------- Factory Function ---------
*/
// Essa função retorna um objeto quando executada
const factoryFunction = (name) =>{
    return {
        logou: () => alert(`O usuário ${nome} logou`),
        deslogou: () => alert(`O usuário ${nome} deslogou`),
    }
}
factoryFunction('Pedro').logou()