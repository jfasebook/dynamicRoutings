const labels = {
    add: '+',
    sub: '-',
    mul: '*',
    div: '/',
}



function Renderer() {
    return {
        render({op, x, y, result}) {
            let out = document.getElementById('outlet')
            let text = `${x} ${labels[op]} ${y} = ${result}`
            out.innerHTML = text
            document.title = text
        }
    }
}

export default Renderer()