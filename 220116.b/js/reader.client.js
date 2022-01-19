const END       = -3
const SEP       = '/'
const EMPTY     = ''
const HASH      = '#'


function Reader () {
    return {
        read (url) {
            let hash         = url.hash.replace(HASH, EMPTY)
            let params       = hash.split(SEP)
            let [op, x, y]   = params.slice(END)
            return {
                op, x, y
            }
        }
    }
}

export default Reader()