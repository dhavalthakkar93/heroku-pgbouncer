const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => res.send(process.env.DATABASE_URL))

app.listen(port, () => console.log('Pgbouncer proxy is running on port ${port}'))
