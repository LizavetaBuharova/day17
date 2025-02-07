export function sum(butt, a, b, result) {
    
    const setResult = (a, b) => {
        let c = +a + +b;
        result.innerHTML = c;
    }
    butt.addEventListener('click', () => {
        let first = parseFloat(a.value);
        let second = parseFloat(b.value);
        setResult(first, second)})
    setResult(0, 0)   
}

