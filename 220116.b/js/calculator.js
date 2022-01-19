function Calculator () {
    return {
        add: function(x, y) { return +x + +y },
        sub: function(x, y) { return +x - +y },
        mul: function(x, y) { return +x * +y },
        div: function(x, y) { return +x / +y },
    }
}

export default Calculator()