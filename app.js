const express = require('express')
const app = express()

app.get('*', (req, res) => {
  res.send('Express.')
})

const PORT = 3000 || process.env.port
app.listen(PORT, function(){
  console.log(`[APP][Listening][${PORT}]`) // !DEBUG
})