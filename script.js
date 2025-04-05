let lista = document.querySelectorAll('.item')
let seg = document.getElementById('seg')
let ant = document.getElementById('ant')

let count = lista.length
let ativo = 0

seg.onclick = () => {
    let ativoOld = document.querySelector('.ativo')
    ativoOld.classList.remove('ativo')

    ativo = ativo >= count -1 ? 0 : ativo + 1
    lista[ativo].classList.add('ativo')
}

ant.onclick = () => {
    let ativoOld = document.querySelector('.ativo')
    ativoOld.classList.remove('ativo')

    ativo = ativo <= 0 ? count -1 : ativo - 1
    lista[ativo].classList.add('ativo')
}