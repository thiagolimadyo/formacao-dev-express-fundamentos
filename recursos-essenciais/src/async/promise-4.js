// fetch por padrão retorna GET
fetch('https://www.youtube.com/watch?v=WRlfwBof66s', { method: "GET", })
    .then(resp => resp.text())
    .then(data => data.split('<title>')[1])
    .then(data => data.split('</title>')[0])
    .then(console.log)