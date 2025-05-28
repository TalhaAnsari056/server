import express from 'express';
let route = express.Router();
let products = [
    {
        name: 'shoes',
    },
    {
        name: 'shirts',
    },
    {
        name: 'pant',
    },

]
route.get('/', (req, res) => {
    console.log('products route request received');
    res.status(200).json({
        error: false,
        message: 'products data  sucessfully fetched!',
        data: products
    })
})

route.get('/:id', (req, res) => {
    console.log('products route params request received!')
    console.log(req.params.id);
    let filter = users.filter((user) => user.id == req.params.id);
    if (filter.length > 1) return res.status(404).send('user not found!')
    res.status(200).json({
        error: false,
        message: 'user found!',
        data: filter
    })


})
export default route;