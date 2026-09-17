// Arquivo JavaScript para funcionalidades interativas da página Netflix
// Este script gerencia a alternância entre modos escuro e claro e o armazenamento do perfil ativo

// Aguarda o carregamento completo do DOM (Document Object Model) antes de executar
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o botão de alternar tema pelo ID
    const themeToggle = document.getElementById('theme-toggle');
    // Seleciona o elemento body da página
    const body = document.body;

    // Verifica se há uma preferência de tema salva no localStorage do navegador
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        // Se houver, aplica a classe salva ao body
        body.classList.add(savedTheme);
    }

    // Adiciona um ouvinte de evento de clique ao botão de alternar tema
    themeToggle.addEventListener('click', () => {
        // Alterna a classe 'light-mode' no body (adiciona se não existir, remove se existir)
        body.classList.toggle('light-mode');
        // Salva a preferência atual no localStorage
        // Se o body tem 'light-mode', salva 'light-mode', senão salva uma string vazia
        const currentTheme = body.classList.contains('light-mode') ? 'light-mode' : '';
        localStorage.setItem('theme', currentTheme);
    });

    // Seleciona todos os links de perfil
    const profileLinks = document.querySelectorAll('.profile');

    // Adiciona ouvinte de clique a cada link de perfil
    profileLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Impede o redirecionamento imediato
            event.preventDefault();

            // Seleciona a imagem e o nome do perfil clicado
            const img = link.querySelector('img');
            const figcaption = link.querySelector('figcaption');

            // Obtém o src da imagem e o texto do nome
            const profileImage = img.src;
            const profileName = figcaption.textContent;

            // Salva no localStorage como objeto JSON
            const activeProfile = {
                name: profileName,
                image: profileImage
            };
            localStorage.setItem('activeProfile', JSON.stringify(activeProfile));

            // Redireciona para a página do catálogo
            window.location.href = 'catalogo/catalogo.html';
        });
    });
});