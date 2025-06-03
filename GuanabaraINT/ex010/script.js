function calcular() {
    var data = new Date()
    var anoAt = data.getFullYear()
    var nasc = document.getElementById('iano')
    var res = document.getElementById('res')
    if (nasc.value == 0 || nasc.value > anoAt) {
        window.alert(' [ERROR] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = anoAt - Number(nasc.value)
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
        }else if (fsex[1].checked) {
            genero = 'Mulher'
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }
}