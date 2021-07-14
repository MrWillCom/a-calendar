module.exports = (path, atTerminal) => {
    if (path.search('@/') == 0) {
        return path.replace('@/', atTerminal ? './' : '../')
    }
    return path
}

module.exports = (depth) => {
    const parse = (path, atTerminal) => {
        if (path.search('@/') == 0) {
            return path.replace('@/', atTerminal ? './' : (() => {
                if (depth == 0) {
                    return './'
                } else if (depth > 0) {
                    var relativePathPrefix = ''
                    for (let i = 0; i < depth; i++) {
                        relativePathPrefix = relativePathPrefix + '../'
                    }
                    return relativePathPrefix
                }
            })())
        }
        return path
    }
    return parse
}
