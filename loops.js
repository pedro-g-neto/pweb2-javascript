// Loop for(inicialização ; condição ; incremento)
for(let numero = 0; numero < 5; numero++){
    console.log(numero+1)
}

// Loops interagindo com objetos e arrays
const object ={
    name: "Pedro",
    age: 20,
    city: "João Pessoa"
}

for (key in object){
    console.log(object[key]);
}

const array = ['hb20', 'hilux', 'corolla']
for (item of array){
    console.log(item)
}