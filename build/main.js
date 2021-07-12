const readFile = require("./modules/readFile");
const writeFile = require("./modules/writeFile");
const copyFile = require("./modules/copyFile");
const scanDirectory = require("./modules/scanDirectory");

const buildTasks = require("./data");

const parsePath = (shortcut, prefix, suffix) => {
    if (!suffix) { suffix = "index.html" }
    shortcut = prefix + shortcut;
    shortcut = shortcut + suffix;
    return shortcut;
}

const build = async (task) => {
    var sourceCode = await readFile(parsePath(task.from, './lib'), 'utf8')
    const getData = require(parsePath(task.from, '../lib', 'index.data.js'))
    const data = getData(task.data)
    for (const key in data) {
        const element = data[key];
        const placeholder = `<% ${key} %>`;
        while (sourceCode.search(placeholder) != -1) {
            sourceCode = sourceCode.replace(`<% ${key} %>`, element);
        }
    }
    await writeFile(parsePath(task.to, './output'), sourceCode)

    console.log(`Built  ${parsePath(task.to, '')}`)
    return;
}

const copyPublicDir = () => {
    scanDirectory('./public/').then(async (fileList) => {
        for (const file of fileList) {
            await copyFile(file, file.replace('./public/', './output/'))

            console.log(`Copied ${file.replace('./public', '')}`)
        }
    })
}

for (const task of buildTasks) {
    build(task)
}

copyPublicDir()
