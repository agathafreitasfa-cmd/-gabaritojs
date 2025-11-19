console.log('teste');

let nomeUsuario = document.getElementById("nomeUsuario"); // Armazena a informação capturada no HTML, dentro da variável nomeUsuario.

let botao = document.getElementById("botao");
let conteudoDoTexto = document.getElementById("conteudoDoTexto")
let conteudoDaMedia = document.getElementById("conteudoDaMedia")

botao.addEventListener("click", () => {
    // console.log(nomeUsuario.value);
    conteudoDoTexto.innerHTML = nomeUsuario.value;

    let nota1 = parseInt(document.getElementById("nota1").value);
    let nota2 = parseInt(document.getElementById("nota2").value);
    let nota3 = parseInt(document.getElementById("nota3").value);
    let nota4 = parseInt(document.getElementById("nota4").value);

    let media = ((nota1 + nota2 + nota3 + nota4) / 4);

    console.log(media)

    conteudoDaMedia.innerHTML = media;
    
})



