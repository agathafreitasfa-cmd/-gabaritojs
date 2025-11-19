    let maca =parseInt(prompt("Digite quantas maças você deseja comprar:")) 
    let precoun = 0.30
    let precoQuant = 0.25
    let totalUn = maca * precoun
    let totalQuant = maca * precoQuant

    if(maca >= 12){
        console.log( `Você comprou ${maca} maças, você pagara ${precoQuant} por unidade, o total da compra será R$ ${totalQuant}`)
    }else if (maca < 12){
         console.log( `Você comprou ${maca} maças, você pagara ${precoun} por unidade, o total da compra será R$ ${totalUn}`)
    }else{
        console.log("Você não digitou um número, tente novamente")
    }