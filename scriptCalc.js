function calcular(tipo, valor) { // funcao para realizar calculo

    // CONDICIONAL CASO CLICK EM SIMBOLOS
    if(tipo === 'acao') {
        //valor da acao for C - limpar conteudo
        if(valor === 'c') {
            document.querySelector('#result').value = '';
        }
        //botoes de operacao
        if (valor === '/' || valor === '*' || valor === '-' || valor === '+' || valor === '.') {
            document.querySelector('#result').value += valor;
        }
        //botao para resultado
        if(valor === '=') {
            const calc = (eval(document.querySelector('#result').value));
            document.querySelector('#result').value = calc;
        }
    
    }
    //CONDICIONAL CASO CLICK EM NUEMROS
    else if(tipo === 'valor') {
        document.querySelector('#result').value += valor;
        //se o valor for numerico
        if(valor === '0') {
            document.querySelector('#result').value = '';
        }
    }
}
