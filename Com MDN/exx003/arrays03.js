let items = ''
const history = ['pedro', 'joao', 'maria', 'gabriel', 'marcos'];
const max_history = 5;


function historicROT(){
    if(history !== ''){
        history.unshift(items)
    }else {
        history.pop()
    }
}
console.log (historicROT())