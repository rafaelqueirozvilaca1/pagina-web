/* função para alternar o tema da página */
const htmlEl = document.querySelector('html');
const sectionEl = document.querySelectorAll('section');
const cabecalhoDaTabelaEl = document.querySelector('#cabecalho-tabela');
const h1El = document.querySelector('h1');
const h2El = document.querySelectorAll('h2');
const h3El = document.querySelectorAll('h3');
let alterarTemaEl = document.querySelector('#mudar-tema');
/* alterna a classe .selecionado dos elementos da página */
alternarTemaDaPagina = (elemento) => {
    let alterarTema = alterarTemaEl.checked;
    (alterarTema === false) ?
        elemento.classList.remove('selecionado'):
        elemento.classList.add('selecionado');
}

alterarTemaEl.addEventListener('click', () => {

    /* chamo a função para cada um dos elementos */
    alternarTemaDaPagina(htmlEl);

    for (let section of sectionEl)
        alternarTemaDaPagina(section);

    alternarTemaDaPagina(cabecalhoDaTabelaEl);
    alternarTemaDaPagina(h1El);

    for (let h2 of h2El)
        alternarTemaDaPagina(h2);

    for (let h3 of h3El)
        alternarTemaDaPagina(h3);
});