function verMais() {

    let titulo = document.getElementById("titulo");
    let nome = document.getElementById("nome");
    let descricao = document.getElementById("descricao");
    let mensagem = document.getElementById("mensagem");
    let btnVer = document.getElementById("btnVer");
    let btnResetar = document.getElementById("btnResetar");

    titulo.textContent = "Sobre mim";
    nome.textContent = "Maria Clara Machado";
    descricao.textContent = "Olá, pode me chamar de Maria ^-^!";
    mensagem.textContent = "Gosto de criar coisas criativas, como design, sites, pixel art, jogos, etc.";

    btnVer.hidden = true;
    btnResetar.hidden = false;
    nome.hidden = false;

   alert("Yaaay!"); 
}
