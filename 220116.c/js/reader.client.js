const END       = -3
const SEP       = '/'
let isString = s => typeof(s) === 'string'

function Reader () {
    return {
        read (url) {
            if(isString(url)) { 
                let href = location.href
                let Url = new URL(href)
                Url.pathname = url
                return this.read(Url)
            }
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