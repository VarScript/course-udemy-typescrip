import express from 'express';
// const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.status(401).json({
        ok: false,
        msg: 'There not token in the petition'
    })
    res.json({
        ok: true,
        msg: 'All came good!'
    })
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})