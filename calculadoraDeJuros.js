import entrada from 'readline-sync';

console.log("Aplicação de juros\n");

let valor_juros;

let valor_divida = entrada.question("\nInforme o valor devido: R$")

if(valor_divida > 0){
    let dias_vencimento = entrada.question("Informe quantos dias se passaram após o vencimento:")

    if(dias_vencimento > 0){
        if(dias_vencimento > 15){
            valor_juros = 10
        }
         else{
            valor_juros = 5
        }


        valor_divida = Number(valor_divida)
        dias_vencimento = Number(dias_vencimento)

        let total_juros = (valor_divida / 100) * valor_juros
        let valorTotal = valor_divida + total_juros

        console.log("\nValor original da dívida: R$ "+valor_divida);
        console.log("Dias atrasados: "+dias_vencimento);
        console.log("Taxa de Juros: "+valor_juros+"%");
        console.log("Valor total com juros: R$ "+valorTotal);
    }
    else{
        console.log("Você esta em dia!")
    }
}
else{
    console.log("O valor da divida deve ser maior que zero!")
}


