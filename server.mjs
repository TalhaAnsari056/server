import express from 'express';
const app = express();
const PORT = 3500;

app.get('/', (req, res) => {
    console.log('request IP' + req.ip)
    res.send("Hello ! This is Express server!")
})

app.listen(PORT, () => {
    console.log(`my server is running on this port:${PORT}`)
})