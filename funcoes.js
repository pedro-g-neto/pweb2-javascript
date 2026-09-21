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
saudar();
console.log(potencia(5,2));
console.log(potencia(4,3));
console.log(saudarArrow());
console.log(saudarArrow("Pedro"));