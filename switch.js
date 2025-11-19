/* let escolhaUsuario = parseInt(prompt("Selecione a opção desejada:\n1 - Frutas\n2 - Doces\n3 - Bebidas"))

switch(escolhaUsuario){
    case 1:
        console.log("Temos: Banana, Maça e Morango");
    break;        
    case 2:   
        console.log("Temos: Brigadeiro, Chocolate e Balinha"); 
    break;    
    case 3:
        console.log("Temos: Coca, Energetico e suco");    
    break;   

    default:
        alert("Digite um número entre 1 a 3")
} */

   /*  let fruta = parseInt(prompt("Selecione uma fruta desejada:\n1-maça \n2-Kiwi \n3-Melancia"))

    switch(fruta){
        case 1:
            console.log("Não vendemos essa fruta aqui!");
            break;
        case 2:
            console.log("Estamos com escassez de kiwis.");
            break;
        case 3:
            console.log("Aqui está, são 3 reais o quilo.");
            break;

            default:
                alert("Erro, tente novamente.");

    } */

    let mesada = parseInt(prompt("Qual o valor da sua mesada?"));
    let opções = parseInt(prompt("Escolha: \n1-Comprar \n2-Apenas olhar"));
    
    switch(opções){
        case 1:
            let valor_da_compra = parseInt(prompt("Qual o valor da sua compra?"));
            let saldo = mesada - valor_da_compra

            if(valor_da_compra < mesada)
                console.log(`Compra efetuada com sucesso, seu saldo é: ${saldo}`);
        else{
            console.log("Saldo insuficiente.");
        }
        break;
        case 2:
            console.log ("Fique a vontade!");
        break;

        default:
            alert("Opção inváida")
    }