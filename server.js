let express = require('express')
let app = express(),
	port = 8080


app.get('/', (req,res) => {
	res.sendFile(__dirname + '/public/html/index.html')
})

app.get('/three.min.js', (req,res) => {
	res.sendFile(__dirname + '/node_modules/three/build/three.min.js')
})

app.get('/quad.obj', (req,res) => {
	res.sendFile(__dirname + '/models/quad.obj')
})

app.listen(port, () => {
	console.log('listening on port', port)
})
