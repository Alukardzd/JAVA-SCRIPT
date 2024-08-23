function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0) {
        window.alert('||ERROR|| digite um número')
        
    } else {
        let N = Number(num.value)
        tab.innerHTML = ''
        for(c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${N} X ${c} = ${N*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}


/*
let c = 1
        tab.innerHTML = ''
        while(c <= 10) {
            let item = document.createElement('option')
            item.text = `${N} X ${c} = ${N * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
*/