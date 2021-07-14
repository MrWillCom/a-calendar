const readFile = require('./readFile');
const replaceAll = require('./replaceAll')
const _p = require('./parsePath')(2)
const YAML = require('js-yaml')

const build = async (code, data, options) => {
    for (const key in data) {
        const item = data[key];
        const placeholder = `<% ${key} %>`;
        code = replaceAll(code, placeholder, item)
    }

    if (options.hasComponents) {
        for (const element in options.components) {
            const tag = {
                start: `<${element}>`,
                end: `</${element}>`,
            }

            if (code.search(tag.start) != -1 && code.search(tag.end) != -1) {
                const tagCol = {
                    start: code.search(tag.start),
                    end: code.search(tag.end),
                }
                const source = options.components[element];
                const sourceCode = await readFile(_p(source, true) + '.html', 'utf8')
                const buildOptions = require(_p(source) + '.data.js')
                const props = buildOptions.getData(YAML.load(code.slice(
                    tagCol.start + tag.start.length,
                    tagCol.end
                )))

                const compiledCode = await build(sourceCode, props, buildOptions.options)

                code = code.slice(0, tagCol.start) + compiledCode + code.slice(tagCol.end + tag.end.length, code.length - 1)
            }
        }
    }

    return code
}

module.exports = build
