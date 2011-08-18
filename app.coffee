express = require "express"
app = express.createServer()
io = require("socket.io").listen app

app.listen 8000

app.use express.static __dirname + "/public"

app.get "/", (req, res) ->
    res.sendfile __dirname + "/public/index.html"

