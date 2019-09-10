const express = require('express')

const app = express()

const PORT = 80

app.get('/', (req, res) => {
	console.log(req)
	res.send('Hello world!!')
})

app.listen(PORT, () => console.log('Listening on port ' + PORT))
