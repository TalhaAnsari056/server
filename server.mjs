import express from 'express';
import morgan from 'morgan';
import userRoutes from './routes/users.js';
import productRoutes from './routes/products.js';
import 'dotenv/config';
console.log('process.env!',process.env);
const app = express();
const PORT = process.env.PORT || 3500;
//application_level_middleware
let middileware = (req, res, next) => {
    console.log("middileware executed !");
    next();
}
//router_level_middleware
let post_middleware = (req,res,next) => {
console.log('post middleware triggered !');
next();
}
app.use(express.json());
app.use(morgan('common'));
app.use('/users',userRoutes);
app.use('/products',productRoutes)

app.get('/', (req, res) => {
    console.log('request IP' + req.ip)
    console.log('get request received');
    res.send("Hello ! This is Express server!");
})
app.post('/',post_middleware, (req, res) => {
    console.log("post request received !");
    console.log(req.body);
    res.send('post Api');
})

app.put('/', (req, res) => {
    console.log("put request received!");
    res.send('put Api');
})

app.delete('/', (req, res) => {
    console.log("delete request received !");
    res.send('delete Api');
})

// app.get('/users', (req, res) => {
//     console.log("user route request !");
//     res.send([
//         {
//             name: 'abc',
//             age: 20,
//         },
//         {
//             name: 'xyz',
//             age: 30,
//         },
//     ]);
// })
// run when /user route is not running !

app.listen(PORT, () => {
    console.log(`my server is running on this port http://localhost:${PORT}`);
})