const readFile = require("./modules/readFile");
const writeFile = require("./modules/writeFile");
const copyFile = require("./modules/copyFile");
const scanDirectory = require("./modules/scanDirectory");
const build = require("./modules/build");
const _p = require('./modules/parsePath')(1);

const buildTasks = require("./data");

const buildAll = async () => {
    for (const task of buildTasks) {
        var code = await readFile(_p('@/lib/' + task.from + 'index.html', true), 'utf8')
        const buildOptions = require(_p('@/lib/') + task.from + 'index.data.js')
        const getData = buildOptions.getData
        const data = getData ? getData(task.data) : {}
        const options = buildOptions.options
        code = await build(code, data, options ?? {})
        await writeFile(_p('@/output/', true) + task.to + 'index.html', code)

        console.log(`Built  ${'@' + task.to + 'index.html'}`)
    }
    return
}

const copyPublicDir = () => {
    scanDirectory(_p('@/public/', true)).then(async (fileList) => {
        for (const file of fileList) {
            await copyFile(file, file.replace(_p('@/public/', true), _p('@/output/', true)))

            console.log(`Copied ${'@' + file.replace(_p('@/public', true), '')}`)
        }
    })
}

buildAll()
copyPublicDir()
