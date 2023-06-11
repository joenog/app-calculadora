function calcular(tipoEntrada, valor) {
    //CONDICIONAL CASO CLICK EM SIMBOLOS (acao)
    const resultInput = document.querySelector("#result");
    if(tipoEntrada === 'acao') {
        // SE ACAO FOR == C
        if(valor === 'c') {
            resultInput.value = '';
        }
        // SE ACAO FOR OPERADORES  / * - + .
        if(valor === '/' || valor === '*' || valor === '-' || valor === '+') {
            //SE OPERADORES FOR REPETIDOS
            const lastChar = resultInput.value.slice(-1);
            if (lastChar !== '/' && lastChar !== '*' && lastChar !== '-' && lastChar !== '+') {
                resultInput.value += valor;
            }
        }
        // VERIFICA SE JA HÁ PONTOS
        if(valor === '.') {
            const expression = resultInput.value;
            if(!expression.includes('.')) {
                resultInput.value += valor;
            }
        }
        //FAZER CALCULO INSERIDO
        if(valor === '=') {
            resultInput.value = eval(resultInput.value);
        }  
    }

    //CONDICIONAL CASO CLICK EM NUMEROS (valor)
    else if(tipoEntrada === 'valor') {
        resultInput.value += valor;  
    }
}