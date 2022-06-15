const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const bodyparser = require('body-parser')
const cors = require('cors')
const router = express.Router();

app.use(router);
app.use(cors())
app.use(bodyparser.json())

app.get('/', (req, res) => {
    res.send('Hello World! by kimmy and auto')
})

app.get('/kim', (req, res) => {

    let data = [
        {
            id: 1,
            name: "auto",
            age: 50
        },
        {
            id: 2,
            name: "kim",
            age: 40
        },
        {
            id: 3,
            name: "nut",
            age: 30
        },
    ]

    // res.send(arr)
    res.json({
        status: 200,
        data: data
    })
})

app.get('/auto', (req, res) => {
    res.status(200).json({
        status: 500,
        data: 'fuck you dude eiei :)'
    })
})

app.post('/xxx', (req, res) => {

    let { name } = req.body

    let data = [
        {
            id: 1,
            name: "auto m",
            age: 50
        },
        {
            id: 2,
            name: "kim",
            age: 40
        },
        {
            id: 3,
            name: "nut",
            age: 30
        },
    ]

    let filter = data.filter(x => {
        return x.name.toLocaleLowerCase().match(name)
    })

    if (filter.length > 0) {

        res.json({
            status: 200,
            items: filter
        })

    } else {

        res.json(
            {
                status: 404,
                items: []
            }
        )

    }

})

const Auto = require('./router/auto')

app.use('/autofuckyoudude', Auto)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))