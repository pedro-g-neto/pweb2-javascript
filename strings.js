const nome = "Pedro";
let saldoConta = 3000;
// String literal: coloca o texto entre graves e coloca as variáveis entre ${}
console.log(`O saldo na conta de ${nome} é R$ ${saldoConta}`);

let palavra = "Javascript";
console.log(palavra.length); // Conta quantos caracteres a string tem

palavra = palavra.toUpperCase();
console.log(palavra);
palavra = palavra.toLowerCase();
console.log(palavra);

let email = "pedro@gmail.com"
console.log(email.includes('@')) // verifica se determinada parte pertence à string (true/false)
console.log(email.includes('!'))
console.log(email.length) 
console.log(email.indexOf("@")) // Retorna 5, então está na 6ª posição
palavra = "JavaScript";
console.log(palavra.slice(0,4)); // Recorta e devolve os 4 primeiros caracteres
console.log(palavra.slice(4)); // do 4º em diante
console.log(palavra.slice(-6)); // os 6 últimos

palavra = palavra.replace("Java", "Peniel"); // Substitui um trecho da string por outro
console.log(palavra);

let data = "21-08-2026";
console.log(data);
data = data.replace("-", "/"); // o replace substitui apenas a primeira ocorrência do trecho
console.log(data);
data = "21-08-2026";
data = data.replaceAll('-','/'); // aqui substitui todas as ocorrências do trecho
console.log(data);

let itens = "maçã, banana, uva";
console.log(itens.split(", ")); // quebra a string em vários pedaços delimitados por um separador e devolve uma lista
 email = "   pedro@gmail.com   ";
 email = email.trim(); // remove os espaçoes em branco das extremidades da string
 console.log(email);