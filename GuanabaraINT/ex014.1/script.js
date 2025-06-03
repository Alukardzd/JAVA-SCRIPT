function caunt() {
    var num = document.getElementById('num')
    var end = document.querySelector('#end')
    var step = document.querySelector('#step')
    var  result = document.getElementById('result')
    if(num.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
        alert('ERROR')
    } else {
        result.innerHTML = 'contando'
        var iNum = Number(num.value)
        var eEnd = Number(end.value)
        var sStep = Number(step.value)

        for(c = iNum; c <= eEnd; c += sStep) {
            result.innerHTML += ' ' + c + ' '
        }
    }

}