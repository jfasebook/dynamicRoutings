const END = -3
const SEP = '/'


function Reader () {
    return {
        read (url) {
            let path         = url.pathname
            let params       = path.split(SEP)
            let [op, x, y]   = params.slice(END)
            return {
                op, x, y
            }
        }
    }
}

export default Reader()