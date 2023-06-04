let primeiroNumeroEl = document.querySelector('#primeiro-numero');
let segundoNumeroEl = document.querySelector('#segundo-numero');
let resultadoEl = document.querySelector('#resultado');
let opcaoEl = document.querySelector('#opcao-operacoes');

// função que realiza uma operação de acordo com a opção escolhida pelo usuário

let somaNumeros = (a, b) => parseFloat(a) + parseFloat(b);
let multiplicaDoisNumeros = (a, b) => a * b;
let divideDoisNumeros = (a, b) => a / b;
let subtraiNumeros = (a, b) => a - b;
let restoDivisao = (a, b) => a % b;

let botaoResolverEl = document.querySelector('#botao-resolver');
botaoResolverEl.addEventListener('click', realizandoOperacao);
function realizandoOperacao() {

    if (!primeiroNumeroEl.value || !segundoNumeroEl.value) {
        alert ('Preencha corretamente todos os campos de entrada');
        return;
    }

    let soma = somaNumeros(primeiroNumeroEl.value, segundoNumeroEl.value);
    let subtracao = subtraiNumeros (primeiroNumero, segundoNumero);
    let produto = multiplicaDoisNumeros (primeiroNumero, segundoNumero);
    let divisao = divideDoisNumeros (primeiroNumero, segundoNumero);
    let resto = restoDivisao (primeiroNumero, segundoNumero);

    switch (opcaoEl.value) {
        case '+': 
            resultadoEl.value = `Soma = ${soma}`; // realiza a soma se opção digitada for "+".
            break;
        case '-': 
            resultadoEl.value = `Resultado da subtração = ${subtracao}`;
            break;
        case '*': 
            resultadoEl.value = `Produto = ${produto}`; // realiza a multiplicação se opção digitada for "*".
            break;
        case '/': 
            resultadoEl.value = `Quociente = ${divisao}`; // realiza a divisão se opção digitada for "-".
            break;
        case '%': 
            resultadoEl.value = `Resto da divisão = ${resto}`; // realiza a soma se opção digitada for "+".
            break;
        default: 
            alert ('Opção inválida'); // se a opção digitada for diferente das mencionadas acima, imprime mensagem de alerta avisando que a opção é inválida.
            return;
    }
    primeiroNumeroEl.focus();
}

primeiroNumeroEl.addEventListener ('keyup', botaoEnterClicado);
segundoNumeroEl.addEventListener ('keyup', botaoEnterClicado);
opcaoEl.addEventListener ('keyup', botaoEnterClicado);
function botaoEnterClicado (e) {
    if (e.key === 'Enter') {
        realizandoOperacao ();
    }
}

// ----------------------------------------------------------------------------------------------------------------

// função que conta o número de vezes que o botão "Clique em mim!" foi clicado
let contaCliques = 0; // inicializa o numero de cliques

let botaoCliqueEmMimEl = document.querySelector ('#botao-clique-em-mim');
botaoCliqueEmMimEl.addEventListener ('click',  (e) => { 
    contaCliques++; // conta quantas vezes o botão foi clicado
    e.currentTarget.innerHTML = `Botão Clique em mim! foi clicado ${contaCliques} vezes`; // recupera o botão clicado e altera o seu conteúdo
});

let botaoClicadoEl = document.querySelector ('#botao-clique-em-mim'); //seleciona o botão "Clique em Mim!"
// função que zera o número de cliques do botão "Clique em mim!"
let botaoZerarCliquesEl = document.querySelector ('#botao-zerar-cliques');
botaoZerarCliquesEl.addEventListener ('click', () => {
    contaCliques = 0; // zera o número de cliques
    botaoClicadoEl.innerHTML = `Botão Clique em mim! foi clicado ${contaCliques} vezes`;
});

// função que decrementa o número de cliques
let botaoDecrementarEl = document.querySelector ('#botao-decrementar');
botaoDecrementarEl.addEventListener ('click', () => {
    contaCliques--; // decrementa o número de cliques
    botaoClicadoEl.innerHTML = `Botão Clique em mim! foi clicado ${contaCliques} vezes`;
});

// ----------------------------------------------------------------------------------------------------

// mostra o horário e a data atual
let horarioAtualEl = document.querySelector ('#data-e-hora-atual');
horarioAtualEl.value = new Date();

//--------------------------------------------------------------------------------------------------------------

//realiza operações com coeficientes 'a', 'b' e 'c' da equação do segundo grau digitados pelo usuário

let calculaDelta = (a, b, c) => b * b - 4 * a * c;
let calculaRaizPositiva = (b, delta, a) => ((- b + Math.sqrt (delta)) / (2 * a));
let calculaRaizNegativa = (b, delta, a) => ((- b - Math.sqrt (delta)) / (2 * a));
let calculaVerticeX = (b, a) => ((- b) / (2 * a));
let calculaVerticeY = (delta, a) => ((- delta) / (4 * a));

let aEl = document.querySelector('#coeficiente-a');
let bEl = document.querySelector('#coeficiente-b');
let cEl = document.querySelector('#coeficiente-c');
let opcaoOperacoesEl = document.querySelector('#opcao-equacoes');
let botaoResolverEquacaoEl = document.querySelector('#resolver-equacao');
botaoResolverEquacaoEl.addEventListener('click', resolvendoEquacoes);
function resolvendoEquacoes() {

    let a = aEl.value;
    let b = bEl.value;
    let c = cEl.value;

    let delta = calculaDelta (a, b, c);
    let raizPositiva = calculaRaizPositiva (b, delta, a);
    let raizNegativa = calculaRaizNegativa (b, delta, a);

    let verticeX = calculaVerticeX (b, a);
    let verticeY = calculaVerticeY (delta, a);

    let resultadoEquacoesEl = document.querySelector('#resultado-equacoes');
    let opcaoOperacoes = opcaoOperacoesEl.value;

    if (!a || !b || !c || !opcaoOperacoes) {
        alert ('Preencha todos os campos de entrada');
    }

    else if (a != 0) {
        switch (parseInt(opcaoOperacoes)) {
            case 1: // opção 1: calcular o delta
                resultadoEquacoesEl.value = (delta < 0) ? `Delta = ${delta}. A equação não possui raízes reais.` :
                    (delta == 0) ? `Delta = ${delta}. A equação possui uma única raiz real.` :
                        `Delta = ${delta}. A equação possui duas raízes reais.`;
                break;
            case 2: // opção 2: calcular as raízes
                resultadoEquacoesEl.value = (delta < 0) ? `A equação não possui raízes reais.` :
                    `As raízes são ${raizPositiva} e ${raizNegativa}`;
                break;
            case 3: // opção 3: calcular o vértice da parábola
                resultadoEquacoesEl.value = `Vértice (Xv, Yv): (${verticeX}, ${verticeY})`;
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

let botaoLimparCoeficientesEl = document.querySelector ('#limpar-input');
botaoLimparCoeficientesEl.addEventListener ('click', () => {
    aEl.value = '';
    bEl.value = '';
    cEl.value = '';
    opcaoOperacoesEl.focus ();
});

function botaoEnterClicadoEquacoes (e) {
    if (e.key === 'Enter') {
        resolvendoEquacoes ();
    }
}
opcaoOperacoesEl.addEventListener ('keyup', botaoEnterClicadoEquacoes);
aEl.addEventListener ('keyup', botaoEnterClicadoEquacoes);
bEl.addEventListener ('keyup', botaoEnterClicadoEquacoes);
cEl.addEventListener ('keyup', botaoEnterClicadoEquacoes);