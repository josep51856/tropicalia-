document.addEventListener('DOMContentLoadedDOM', function () {
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
    const botaoDeAcessibilidade = document.getElementById('opcao-acessibilidade')
    botaoDeAcessibilidade.addEventListener('click', function () {
        botaoDeAcessibilidade.classList.toggle ('rotacao-botao')
        opcoesDeAcessiblidade.classList.toggle('apresenta-lista')
    }
)}