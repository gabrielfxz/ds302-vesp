// primeiro programa em node js
// criando meu primeiro servidor
// DS302 may 10th 2022

let dt = require('./export1')
let url = require('url')
let http = require('http')
console.log('Oi tudo bem?')

http.createServer(function (req,res){
    let sendUrl = url.parse(req.url, true).query
    res.writeHead(200,
        {'Content-Type':'text/html; charset = UTF-8'}
        )    
    res.end(`
        <h1>Alo turma</h1>
        <h1>oi amigos</h1>
        ${dt.obterData()}
        <br> <h2>Data Local</h2>
        url enviada = ${sendUrl.ano}
        `)
}).listen(80)


