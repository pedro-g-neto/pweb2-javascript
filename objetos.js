const Pedro = {
    completeName: "Pedro Gomes de Andrade Neto",
    age: 20,
    showMessage: function(){ // Quando o valor da chave é uma função, chamamos de método
        alert('Mensagem')
    },
    province: "Paraíba"
}
console.log(Pedro.completeName)
console.log(Pedro.showMessage())