const express = require('express')
const compression = require('compression')
const https = require('https')
const fs = require('fs')

// 创建 web 服务器
const app = express()

const options = {
    cert: fs.readFileSync('./full_chain.pem'),
    key: fs.readFileSync('./private.key')
}

// 一定要把这一行代码，写到静态资源托管之前
app.use(compression())
// 托管静态资源
app.use(express.static('./dist'))

// 启动 web 服务器
app.listen(90, () => {
    console.log('web server running at http://127.0.0.1')
})

// https.createServer(options, app).listen(443)
// console.log('https server already start port 443')
