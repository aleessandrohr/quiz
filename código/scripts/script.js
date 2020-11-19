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
    } else {
        let area = document.getElementById(`${param}`)
        area.style.background= 'white'
    }
}

function iniciar() {
    document.getElementById('start').remove()
    let corpo = document.getElementById('corpo')
    corpo.style.background = 'white'
    corpo.style.width = '600px'
    corpo.style.height = '550px'
    corpo.style.borderRadius = '20px'
    corpo.style.margin = 'auto'
    corpo.style.boxShadow = '3px 3px 5px rgba(0, 0, 0, 0.432)'
    corpo.style.fontSize = '30px'
    let índice = document.getElementById('índice')
    for(cont = 1; cont <= 10; cont++) {
        let item = document.createElement("button")
        if (cont == 1) {
            item.style.backgroundColor = 'rgba(48, 48, 233, 0.726)'
        } else {
            item.style.backgroundColor = 'rgba(30, 61, 199, 0.397)'
        }
        item.innerHTML = `${cont}`
        item.style.width = '30px'
        item.style.height = '30px'
        item.style.color = 'white'
        item.style.cursor = 'pointer'
        item.style.borderRadius = '50px'
        item.style.borderWidth = '0'
        item.style.fontWeight = 'bold'
        item.style.margin = '15px'
        item.style.outline = '0'
        índice.appendChild(item)
    }
    let pergunta = document.getElementById('pergunta')
    let item = document.createElement('h1')
    item.innerHTML = 'Qual é o tipo de célula que não apresenta núcleo?'
    item.style.fontSize = '20px'
    item.style.textAlign = 'center'
    pergunta.appendChild(item)
    pergunta.style.padding = '20px'
    let resposta = document.getElementById('resposta')
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
    document.getElementById('but1').innerHTML = "Eucarionte"
    document.getElementById('but2').innerHTML = "Procarionte"

}