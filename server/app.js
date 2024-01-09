const express = require('express')
const axios = require('axios')
const cors = require('cors')
// const url = 'https://jsonplaceholder.typicode.com/posts'

const app = express()
const PORT = 3000

app.use(cors())

app.get('/api/data', async(req, res)=> {
    try {
        const response = await axios('https://jsonplaceholder.typicode.com/posts')
        const data = response.data
        res.status(200).json(data)
    } catch (error) {
        console.log(error);
        res.status(404).json({ success: false, msg: 'Failed to Fetch' })
    }
})

app.listen(PORT, ()=> {
    console.log(`Server is running on port:- ${PORT}`);
})