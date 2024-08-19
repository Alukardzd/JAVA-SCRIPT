function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto') 
    var date = new Date()
    var hora = date.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora > 0 && hora < 12) {
        document.body.style.backgroundColor = '#585361'
        img.src = 'ft-manha.png'
    } else if (hora > 12 && hora < 18){
        document.body.style.backgroundColor = '#DC8B00'
        img.src = 'ft-noite.png'
    } else {
        document.body.style.backgroundColor = '#8D5E38'
        img.src = 'ft-tarde.png'
    }
}