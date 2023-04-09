
    let primeiroNumeroEl = document.querySelector('#primeiro-numero');
    let segundoNumeroEl = document.querySelector('#segundo-numero');
    let resultadoEl = document.querySelector('#resultado');
    let opcaoEl = document.querySelector('#opcao-operacoes');

// função que realiza uma operação de acordo com a opção escolhida pelo usuário
function realizandoOperacao() {

    let primeiroNumero = primeiroNumeroEl.value; // pega o primeiro número digitado pelo usuário
    let segundoNumero = segundoNumeroEl.value; // pega o segundo número digitado pelo usuário
    let opcao = opcaoEl.value; // pega a opção digitada pelo usuário

    switch (opcao) {
        case '':
            alert ('Selecione uma opção dentre as descritas'); 
            return; 
        case '+': 
            resultadoEl.value = `Soma = ${parseFloat(primeiroNumero) + parseFloat(segundoNumero)}`; // realiza a soma se opção digitada for "+".
            break;
        case '-': 
            resultadoEl.value = `Resultado da subtração = ${primeiroNumero - segundoNumero}`; // realiza a subtração se opção digitada for "-".
            break;
        case '*': 
            resultadoEl.value = `Produto = ${primeiroNumero * segundoNumero}`; // realiza a multiplicação se opção digitada for "*".
            break;
        case '/': 
            resultadoEl.value = `Quociente = ${primeiroNumero / segundoNumero}`; // realiza a divisão se opção digitada for "-".
            break;
        case '%': 
            resultadoEl.value = `Resto da divisão = ${primeiroNumero % segundoNumero}`; // realiza a soma se opção digitada for "+".
            break;
        default: 
            alert ('Opção inválida'); // se a opção digitada for diferente das mencionadas acima, imprime mensagem de alerta avisando que a opção é inválida.
            return;
    }
    primeiroNumeroEl.focus();
}

let botaoResolverEl = document.querySelector('#botao-resolver');
botaoResolverEl.addEventListener('click', realizandoOperacao);

function botaoEnterClicado (e) {
    if (e.key === 'Enter') {
        realizandoOperacao ();
    }
}
primeiroNumeroEl.addEventListener ('keyup', botaoEnterClicado);
segundoNumeroEl.addEventListener ('keyup', botaoEnterClicado);
opcaoEl.addEventListener ('keyup', botaoEnterClicado);

// ----------------------------------------------------------------------------------------------------------------

// função que conta o número de vezes que o botão "Clique em mim!" foi clicado
let contaCliques = 0; // inicializa o numero de cliques
let botaoClicadoEl = document.querySelector ('#botao-clique-em-mim'); //seleciona o botão "Clique em Mim!"

function incrementarCliques (e) { 
    contaCliques++; // conta quantas vezes o botão foi clicado
    e.currentTarget.innerHTML = `Botão Clique em mim! foi clicado ${contaCliques} vezes`; // recupera o botão clicado e altera o seu conteúdo
}
let botaoCliqueEmMimEl = document.querySelector ('#botao-clique-em-mim');
botaoCliqueEmMimEl.addEventListener ('click', incrementarCliques);

// função que zera o número de cliques do botão "Clique em mim!"
function zerarCliques () {
    contaCliques = 0; //zera o número de cliques
    botaoClicadoEl.innerHTML = `Botão Clique em mim! foi clicado ${contaCliques} vezes`;
}
let botaoZerarCliquesEl = document.querySelector ('#botao-zerar-cliques');
botaoZerarCliquesEl.addEventListener ('click', zerarCliques);

// função que decrementa o número de cliques
function decrementarCliques () {
    contaCliques--; // decrementa o número de cliques
    botaoClicadoEl.innerHTML = `Botão Clique em mim! foi clicado ${contaCliques} vezes`;
}
let botaoDecrementarEl = document.querySelector ('#botao-decrementar');
botaoDecrementarEl.addEventListener ('click', decrementarCliques);

localStorage.setItem ('botao', botaoClicadoEl);
localStorage.getItem ('botao');

// ----------------------------------------------------------------------------------------------------

// mostra o horário e a data atual
let horarioAtualEl = document.querySelector ('#data-e-hora-atual');
horarioAtualEl.value = new Date();

//--------------------------------------------------------------------------------------------------------------

//realiza operações com coeficientes 'a', 'b' e 'c' da equação do segundo grau digitados pelo usuário

function calculaDelta (a, b, c) {
    return b * b - 4 * a * c;
}

function calculaRaizPositiva (b, delta, a) {
    return ((- b + Math.sqrt (delta)) / (2 * a));
}

function calculaRaizNegativa (b, delta, a) {
    return ((- b - Math.sqrt (delta)) / (2 * a));
}

function calculaVerticeX (b, a) {
    return ((- b) / (2 * a));
}

function calculaVerticeY (delta, a) {
    return ((- delta) / (4 * a));
}

let aEl = document.querySelector('#coeficiente-a');
let bEl = document.querySelector('#coeficiente-b');
let cEl = document.querySelector('#coeficiente-c');
let opcaoOperacoesEl = document.querySelector('#opcao-equacoes');

function resolvendoEquacoes() {

    let a = aEl.value;
    let b = bEl.value;
    let c = cEl.value;

    let delta = calculaDelta (a, b, c);
    let raizPositiva = calculaRaizPositiva (b, delta, a);
    let raizNegativa = calculaRaizNegativa (b, delta, a);

    let verticeX = calculaVerticeX (b, a);
    let verticeY = calculaVerticeY (delta, a);

    let resultadoEl = document.querySelector('#resultado-equacoes');
    let opcaoOperacoes = opcaoOperacoesEl.value;

    if (a != 0) {
        switch (parseInt(opcaoOperacoes)) {
            case 1: // opção 1: calcular o delta
                resultadoEl.value = (delta < 0) ? `Delta = ${delta}. A equação não possui raízes reais.` :
                    (delta == 0) ? `Delta = ${delta}. A equação possui uma única raiz real.` :
                        `Delta = ${delta}. A equação possui duas raízes reais.`;
                break;
            case 2: // opção 2: calcular as raízes
                resultadoEl.value = (delta < 0) ? `A equação não possui raízes reais.` :
                    `As raízes são ${raizPositiva} e ${raizNegativa}`;
                break;
            case 3: // opção 3: calcular o vértice da parábola
                resultadoEl.value = `Vértice (Xv, Yv): (${verticeX}, ${verticeY})`;
                break;
            default:
                alert('Opção inválida');
                return;
        }
    }
    else {
        alert('O coeficiente "a" não pode ser igual a zero.');
        return;
    }

    opcaoOperacoesEl.focus();
}
let botaoResolverEquacaoEl = document.querySelector('#resolver-equacao');
botaoResolverEquacaoEl.addEventListener('click', resolvendoEquacoes);

function botaoEnterClicadoEquacoes (e) {
    if (e.key === 'Enter') {
        resolvendoEquacoes ();
    }
}
opcaoOperacoesEl.addEventListener ('keyup', botaoEnterClicadoEquacoes);
aEl.addEventListener ('keyup', botaoEnterClicadoEquacoes);
bEl.addEventListener ('keyup', botaoEnterClicadoEquacoes);
cEl.addEventListener ('keyup', botaoEnterClicadoEquacoes);