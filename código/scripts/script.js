function corentrar(param) { 
    if (param == 'but1' || param == 'but2') {
        let area = document.getElementById(`${param}`)
        area.style.background= 'rgba(48, 48, 233, 0.726)'
    } else {
        let area = document.getElementById(`${param}`)
        area.style.background= 'rgba(0, 0, 0, 0.726)'
    }
}

function corsair(param) {
    if (param == 'but1' || param == 'but2') {
        let area = document.getElementById(`${param}`)
        area.style.background= 'rgba(30, 61, 199, 0.397)'
    } else if (param == 'butone') {
        let area = document.getElementById(`${param}`)
        area.style.background= 'rgb(216, 51, 51)'
    } else {
        let area = document.getElementById(`${param}`)
        area.style.background= 'white'
    }
}

function reiniciar() {
    document.location.reload()
}

function iniciar() {
    var contador = 0
    var acertos = 0
    var contador_resposta = 0
    var pergunta_lista = ['Qual é o tipo de célula que não apresenta núcleo?', 'De onde é a invenção do chuveiro elétrico?', 'Quantas casas decimais tem o número pi?', 'Atualmente, quantos elementos químicos a tabela periódica possui?', 'O que a palavra legend significa em português?', 'Qual a religião monoteísta que conta com o maior número de adeptos no mundo?', 'As pessoas de qual tipo sanguíneo são consideradas doadores universais?', 'Como se chamam os vasos que transportam sangue do coração para a periferia do corpo?', 'Qual o metal cujo símbolo químico é o Au?', 'Quem viveu, segundo a bíblia, 969 anos?']
    var resposta_lista = ['Eucarionte', 'Procarionte', 'Brasil', 'Inglaterra', 'Infinitas', 'Duas', '113', '118', 'Legenda', 'Lenda', 'Judaísmo', 'Cristianismo', 'Tipo O', 'Tipo ABO', 'Artérias', 'Veias', 'Mercúrio', 'Ouro', 'Matusalém', 'Noé']

    function acertar() {
        alert('Você acertou!')
        acertos++
        contagem() 
    }

    function contagem() {
        contador++
        if (contador < 10) {
            let índice_trocar = document.getElementById(`índice${contador+1}`)
            índice_trocar.style.backgroundColor = 'rgba(48, 48, 233, 0.726)'
            item_pergunta.innerHTML = pergunta_lista[contador]
            contador_resposta += 2
            but1.innerHTML = `${resposta_lista[contador_resposta]}`
            but2.innerHTML = `${resposta_lista[contador_resposta+1]}`
        } else {
            índice.innerHTML = ''
            item_pergunta.innerHTML = `Parabéns você finalizou o quiz com ${acertos} acertos! &#x1F609`
            resposta.innerHTML = ''
            var recarregar = document.getElementById('recarregar')
            let item_recarregar = document.createElement('button')
            item_recarregar.setAttribute('id', `butone`)
            item_recarregar.setAttribute('onmouseenter', `corentrar('butone')`)  
            item_recarregar.setAttribute('onmouseout', `corsair('butone')`)
            item_recarregar.innerHTML = 'Reiniciar'
            item_recarregar.style.backgroundColor = 'rgb(216, 51, 51)'
            item_recarregar.style.width = '130px'
            item_recarregar.style.height = '30px'
            item_recarregar.style.color = 'white'
            item_recarregar.style.cursor = 'pointer'
            item_recarregar.style.borderRadius = '50px'
            item_recarregar.style.borderWidth = '0'
            item_recarregar.style.fontWeight = 'bold'
            item_recarregar.style.outline = '0'
            item_recarregar.style.margin = 'auto'
            recarregar.appendChild(item_recarregar)
            document.getElementById('butone').addEventListener('click', reiniciar)

            
        }
        switch (contador) {
            case 1:
                but1.removeEventListener('click', errar)
                but2.removeEventListener('click', acertar)
                but1.addEventListener('click', acertar)
                but2.addEventListener('click', errar)
                break
            case 3:
                but1.removeEventListener('click', acertar)
                but2.removeEventListener('click', errar)
                but1.addEventListener('click', errar)
                but2.addEventListener('click', acertar)
                break
            case 6:
                but1.removeEventListener('click', errar)
                but2.removeEventListener('click', acertar)
                but1.addEventListener('click', acertar)
                but2.addEventListener('click', errar)
                break
            case 8:
                but1.removeEventListener('click', acertar)
                but2.removeEventListener('click', errar)
                but1.addEventListener('click', errar)
                but2.addEventListener('click', acertar)
                break
            case 9:
                but1.removeEventListener('click', errar)
                but2.removeEventListener('click', acertar)
                but1.addEventListener('click', acertar)
                but2.addEventListener('click', errar)
                break
        }
    }
    
    function errar() {
        alert('Você errou!')
        contagem()
    }
    document.getElementById('start').remove()
    var corpo = document.getElementById('corpo')
    corpo.style.background = 'white'
    corpo.style.width = '600px'
    corpo.style.height = '550px'
    corpo.style.borderRadius = '20px'
    corpo.style.margin = 'auto'
    corpo.style.boxShadow = '3px 3px 5px rgba(0, 0, 0, 0.432)'
    corpo.style.fontSize = '30px'
    let índice = document.getElementById('índice')
    for(cont = 1; cont <= 10; cont++) {
        var item_índice = document.createElement("button")
        item_índice.setAttribute('id', `índice${cont}`)
        if (cont == 1) {
            item_índice.style.backgroundColor = 'rgba(48, 48, 233, 0.726)'
        } else {
            item_índice.style.backgroundColor = 'rgba(30, 61, 199, 0.397)'
        }
        item_índice.innerHTML = `${cont}`
        item_índice.style.width = '30px'
        item_índice.style.height = '30px'
        item_índice.style.color = 'white'
        item_índice.style.cursor = 'pointer'
        item_índice.style.borderRadius = '50px'
        item_índice.style.borderWidth = '0'
        item_índice.style.fontWeight = 'bold'
        item_índice.style.margin = '15px'
        item_índice.style.outline = '0'
        índice.appendChild(item_índice)
    }
    var pergunta = document.getElementById('pergunta')
    var item_pergunta = document.createElement('h1')
    item_pergunta.innerHTML = `${pergunta_lista[contador]}`
    item_pergunta.style.fontSize = '20px'
    item_pergunta.style.textAlign = 'center'
    pergunta.appendChild(item_pergunta)
    pergunta.style.padding = '20px'
    var resposta = document.getElementById('resposta')
    for(cont = 1; cont <= 2; cont++) {
        let item = document.createElement('button')
        item.setAttribute('id', `but${cont}`)   
        item.setAttribute('onmouseenter', `corentrar('but${cont}')`)  
        item.setAttribute('onmouseout', `corsair('but${cont}')`)
        item.style.backgroundColor = 'rgba(30, 61, 199, 0.397)'
        item.style.width = '130px'
        item.style.height = '30px'
        item.style.color = 'white'
        item.style.cursor = 'pointer'
        item.style.borderRadius = '50px'
        item.style.borderWidth = '0'
        item.style.fontWeight = 'bold'
        item.style.outline = '0'
        item.style.margin = '15px'
        resposta.appendChild(item)

    }
    resposta.style.padding = '50px'
    resposta.style.textAlign = 'center'
    var but1 = document.getElementById('but1')
    var but2 = document.getElementById('but2')
    but1.innerHTML = `${resposta_lista[contador_resposta]}`
    but2.innerHTML = `${resposta_lista[contador_resposta+1]}`
    but1.addEventListener('click', errar)
    but2.addEventListener('click', acertar)
}