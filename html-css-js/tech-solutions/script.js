function about() {
    let conhecer = document.getElementById("conhecer");

    conhecer.textContent = "Bem-vindo à TechSolutions! Estamos prontos para transformar sua ideia em realidade.";
    conhecer.style.color = "#0b6e4f";
    alert("Obrigada pelo interesse!");
}

function darkMode() {
    let pageHeader = document.getElementById("pageHeader");
    let cards = document.querySelectorAll(".cards, .service-card, .contact-form");
    let textElements = document.querySelectorAll("main h1, main h2, main h3, main p, main label");

    document.body.style.backgroundColor = "#17202a";
    document.body.style.color = "#f4f7fb";
    pageHeader.style.backgroundColor = "#0b1320";

    cards.forEach(function(card) {
        card.style.backgroundColor = "#253447";
        card.style.color = "#f4f7fb";
    });

    textElements.forEach(function(textElement) {
        textElement.style.color = "#f4f7fb";
    });
}

function lightMode() {
    let pageHeader = document.getElementById("pageHeader");
    let cards = document.querySelectorAll(".cards, .service-card, .contact-form");
    let textElements = document.querySelectorAll("main h1, main h2, main h3, main p, main label");

    document.body.style.backgroundColor = "#f4f7fb";
    document.body.style.color = "#243447";
    pageHeader.style.backgroundColor = "#12355b";

    cards.forEach(function(card) {
        card.style.backgroundColor = "white";
        card.style.color = "#243447";
    });

    textElements.forEach(function(textElement) {
        textElement.style.color = "#243447";
    });

    let mainTitle = document.getElementById("mainTitle");
    if (mainTitle) {
        mainTitle.style.color = "#12355b";
    }
}

function restorePage() {
    let conhecer = document.getElementById("conhecer");
    let mainTitle = document.getElementById("mainTitle");

    conhecer.textContent = "Clique no botão para conhecer nossa empresa.";
    conhecer.style.color = "#243447";
    mainTitle.style.color = "#12355b";
    lightMode();
}

function showMore(textId) {
    let texto = document.getElementById(textId);
    let mensagens = {
        texto1: "Nosso serviço de desenvolvimento de sites cria soluções personalizadas para cada empresa.",
        texto2: "Desenvolvemos aplicativos pensados para facilitar a experiência dos usuários.",
        texto3: "Nossos sistemas ajudam empresas a organizar seus processos e informações."
    };

    texto.textContent = mensagens[textId];
    texto.style.color = "#7b2cbf";
}

function sendMessage(event) {
    event.preventDefault();

    let statusMessage = document.getElementById("statusMessage");
    statusMessage.textContent = "Mensagem enviada com sucesso! A equipe TechSolutions entrará em contato em breve.";
    statusMessage.style.color = "#0b6e4f";
    alert("Mensagem enviada com sucesso!");
}
