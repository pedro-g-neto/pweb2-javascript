console.log(10 + 3);
console.log(10 - 3);
console.log(10 * 3); 
console.log(10 / 3);
console.log(10 % 3); // o resto da divisão
console.log(2 ** 3); // 2 elevado a 3

// Precedência de operações:
console.log(2 + 3 * 4);   // primeiro 3*4=12, depois +2
console.log((2 + 3) * 4); // o parêntese vem primeiro: 5*4

// Casting:
let texto = "42";
console.log(Number(texto)+8);
console.log(parseInt("15px")); // Extrai o número do início da string e descarta o resto
console.log(parseFloat("3.14 kg"));
console.log(parseInt("3.99"));

console.log(Number("banana")); // retorna NaN -> Not a Number
console.log(10/"oi"); //NaN
console.log(0/0);
console.log(typeof NaN);

// Objeto nativo Math:
console.log(Math.round(5.334)); // arredonda para o inteiro mais próximo 
console.log(Math.round(3.5));
console.log(Math.floor(3.6)); // arredonda pra baixo
console.log(Math.ceil(3.6)); // arredonda pra cima

console.log(Math.random()); // Sorteia um número entre 0 (inclusive) e 1 (exclusive)

let dado = Math.floor(Math.random()*6)+1//sorteio de 1 a 6
console.log(dado)