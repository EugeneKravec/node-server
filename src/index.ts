import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const a = 4;
    if (a > 5) {
        res.send('OK')
    } else {
        res.send('Hello world!')
    }
})
app.get('/menu', (req, res) => {
    res.send('Create your own menu!')
})
app.post('/menu', (req, res) => {
    res.send('You have created a menu')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})