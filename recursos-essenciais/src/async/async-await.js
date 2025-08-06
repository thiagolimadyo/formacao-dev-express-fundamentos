// const URL = 'https://www.youtube.com/watch?v=WRlfwBof66s'

async function obterTituloPagina(url) {
    const resp = await fetch(url, { method: "GET" })
    const html = (await resp.text())
    const titulo = html.split('<title>')[1].split('</title>')[0]
    return titulo
}

async function principal() {
    const url = 'https://www.youtube.com/watch?v=WRlfwBof66s'
    const titulo = await obterTituloPagina(url)
    console.log(titulo)
}

principal()
