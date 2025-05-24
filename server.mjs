import express from 'express';
const app = express();
const PORT = 3500;

app.get('/', (req, res) => {
    console.log('request IP' + req.ip)
    res.send("Hello ! This is Express server!")
})
app.post('/', (req, res) => {
    console.log("post request !");
    res.send('post Api');
})

app.put('/', (req, res) => {
    console.log("put request !");
    res.send('put Api');
})

app.delete('/', (req, res) => {
    console.log("delete request !");
    res.send('delete Api');
})

app.get('/users', (req, res) => {
    console.log("user route request !");
    res.send([
        {
            name: 'abc',
            age: 20,
        },
        {
            name: 'xyz',
            age: 30,
        },
    ]);
})

app.listen(PORT, () => {
    console.log(`my server is running on this port:${PORT}`)
})