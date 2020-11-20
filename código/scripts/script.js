var pergunta_lista = ['Qual é o tipo de célula que não apresenta núcleo?', 'De onde é a invenção do chuveiro elétrico?', 'Quantas casas decimais tem o número pi?', 'Atualmente, quantos elementos químicos a tabela periódica possui?', 'O que a palavra legend significa em português?', 'Qual a religião monoteísta que conta com o maior número de adeptos no mundo?', 'As pessoas de qual tipo sanguíneo são consideradas doadores universais?', 'Como se chamam os vasos que transportam sangue do coração para a periferia do corpo?', 'Qual o metal cujo símbolo químico é o Au?', 'Quem viveu, segundo a bíblia, 969 anos?']
var resposta_lista = ['Eucarionte', 'Procarionte', 'Brasil', 'Inglaterra', 'Infinitas', 'Duas', '113', '118', 'Legenda', 'Lenda', 'Judaísmo', 'Cristianismo', 'Tipo O', 'Tipo ABO', 'Artérias', 'Veias', 'Mercúrio', 'Ouro', 'Matusalém', 'Noé']
var contador = 0
var contador_resposta = -2
var acertos = 0

function corentrar(param) { 
    let area = document.getElementById(`${param}`)
    area.style.background= 'rgba(0, 0, 0, 0.726)'
}

function corsair(param) {
    if (param == 'but1' || param == 'but2' || param == 'butone') {
        let area = document.getElementById(`${param}`)
        area.style.background= '#151219'
    } else {
        let area = document.getElementById(`${param}`)
        area.style.background = '#e7e3e0'
        area.style.color= 'black'
    }
}

function reiniciar() {
    document.location.reload()
}

function criar_corpo() {
    document.getElementById('header').remove()
    var corpo = document.getElementById('corpo')
    corpo.style.background = '#e7e3e0'
    corpo.style.color = 'white'
    corpo.style.width = '600px'
    corpo.style.height = '420px'
    corpo.style.borderRadius = '20px'
    corpo.style.margin = 'auto'
    corpo.style.boxShadow = '3px 3px 5px rgba(0, 0, 0, 0.432)'
    criar_índice()
    criar_pergunta()
    criar_resposta()
    iniciar()
}

function criar_índice() {
    var índice = document.getElementById('índice')
    for(cont = 1; cont <= 10; cont++) {
        var item_índice = document.createElement("button")
        item_índice.innerHTML = `${cont}`
        item_índice.setAttribute('id', `índice${cont}`)
        item_índice.style.backgroundColor = '#151219'
        item_índice.style.width = '30px'
        item_índice.style.height = '30px'
        item_índice.style.color = 'white'
        item_índice.style.cursor = 'pointer'
        item_índice.style.borderRadius = '30px'
        item_índice.style.borderWidth = '0'
        item_índice.style.fontWeight = 'bold'
        item_índice.style.margin = '15px'
        item_índice.style.outline = '0'
        índice.appendChild(item_índice)
    }
}

function criar_pergunta() {
    var pergunta = document.getElementById('pergunta')
    var item_pergunta = document.createElement('p')
    item_pergunta.setAttribute('id', 'item_pergunta')
    item_pergunta.style.fontSize = '20px'
    item_pergunta.style.textAlign = 'center'
    item_pergunta.style.color = 'black'
    pergunta.style.padding = '50px'
    pergunta.appendChild(item_pergunta)
}

function criar_resposta() {
    var resposta = document.getElementById('resposta')
    for(cont = 1; cont <= 2; cont++) {
        var item_resposta = document.createElement('button')
        item_resposta.setAttribute('id', `but${cont}`)   
        item_resposta.setAttribute('onmouseenter', `corentrar('but${cont}')`)  
        item_resposta.setAttribute('onmouseout', `corsair('but${cont}')`)
        item_resposta.style.backgroundColor = '#151219'
        item_resposta.style.width = '130px'
        item_resposta.style.height = '30px'
        item_resposta.style.color = 'white'
        item_resposta.style.cursor = 'pointer'
        item_resposta.style.borderRadius = '50px'
        item_resposta.style.borderWidth = '0'
        item_resposta.style.fontWeight = 'bold'
        item_resposta.style.outline = '0'
        item_resposta.style.margin = '15px'
        resposta.style.padding = '50px'
        resposta.style.textAlign = 'center'
        resposta.appendChild(item_resposta)

    }
}

function iniciar() {
    function acertar() {
        acertos++
        contagem() 
    }
    
    function errar() {
        contagem()
    }
    
    function contagem() {
        var índice_trocar = document.getElementById(`índice${contador+1}`)
        var item_pergunta = document.getElementById('item_pergunta')
        var but1 = document.getElementById('but1')
        var but2 = document.getElementById('but2')
        if (contador < 10) {
            índice_trocar.style.backgroundColor = '#d5d5d5'
            índice_trocar.style.color = 'black'
            contador_resposta += 2
            item_pergunta.innerHTML = pergunta_lista[contador]
            but1.innerHTML = `${resposta_lista[contador_resposta]}`
            but2.innerHTML = `${resposta_lista[contador_resposta+1]}`
            switch (contador+1) {
                case 1:
                    but1.addEventListener('click', errar)
                    but2.addEventListener('click', acertar)
                    break
                case 2:
                    but1.removeEventListener('click', errar)
                    but2.removeEventListener('click', acertar)
                    but1.addEventListener('click', acertar)
                    but2.addEventListener('click', errar)
                    break
                case 4:
                    but1.removeEventListener('click', acertar)
                    but2.removeEventListener('click', errar)
                    but1.addEventListener('click', errar)
                    but2.addEventListener('click', acertar)
                    break
                case 7:
                    but1.removeEventListener('click', errar)
                    but2.removeEventListener('click', acertar)
                    but1.addEventListener('click', acertar)
                    but2.addEventListener('click', errar)
                    break
                case 9:
                    but1.removeEventListener('click', acertar)
                    but2.removeEventListener('click', errar)
                    but1.addEventListener('click', errar)
                    but2.addEventListener('click', acertar)
                    break
                case 10:
                    but1.removeEventListener('click', errar)
                    but2.removeEventListener('click', acertar)
                    but1.addEventListener('click', acertar)
                    but2.addEventListener('click', errar)
                    break
            }
        } else {
            índice.innerHTML = ''
            item_pergunta.innerHTML = `Parabéns você finalizou o quiz com ${acertos} acertos! &#x1F609`
            resposta.innerHTML = ''
            var recarregar = document.getElementById('recarregar')
            var item_recarregar = document.createElement('button')
            item_recarregar.setAttribute('id', `butone`)
            item_recarregar.setAttribute('onmouseenter', `corentrar('butone')`)  
            item_recarregar.setAttribute('onmouseout', `corsair('butone')`)
            item_recarregar.innerHTML = 'Reiniciar'
            item_recarregar.style.backgroundColor = '#151219'
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
        contador++
    }
    contagem()
}
