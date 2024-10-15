let items = 'jose'
const history = ['pedro', 'joao', 'maria', 'gabriel', 'marcos'];
const max_history = 5;


if(history.length <= 5) {
    history.unshift(items)
}
if (history.length > 5) {
    history.pop()
}
console.log (history)