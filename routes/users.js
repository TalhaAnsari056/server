import express from 'express';
let route = express.Router();
let users = [
    {
        username: 'asad',
        email: 'asad@xyz.com',
        age: 20,
        depart: 'science',
        id: 1,
    },
    {
        username: 'bilal',
        email: 'bilal@xyz.com',
        age: 30,
        depart: 'urdu',
        id: 2,
    },
    {
        username: 'umar',
        email: 'umar@xyz.com',
        age: 25,
        depart: 'urdu',
        id: 3,
    },
    {
        username: 'zakir',
        email: 'zakir@xyz.com',
        age: 20,
        depart: 'medical',
        id: 4,
    },
]
route.get('/', (req, res) => {
    console.log('users route get request received !');
    let { age, depart } = req.query;
    let filterData = users;
    if (age) {
        console.log('age query');
        let filter = filterData.filter(user => user.age == age);
        filterData = filter;
    }
    if (depart) {
        console.log('depart query');
        let filter = filterData.filter(user => user.depart == depart)
        filterData = filter;
    }

    res.status(200).json({
        error: false,
        message: 'users data fetched successfully !',
        data: filterData,
    })
})

route.get('/:id', (req, res) => {
    //    let { id } = req.params.id ;
    console.log('user route get(params) request received!');
    console.log(req.params.id);
    let filter = users.filter(user => user.id == req.params.id);
    if (filter.length < 1) return res.status(404).send('user not found');
    res.status(200).json({
        error: false,
        message: 'user found!',
        data: filter,
    })

})

route.post('/', (req, res) => {
    console.log('user route post request received!')
    let data = req.body;
    console.log(data);
    users.push(data);
    res.status(200).json({
        error: false,
        message: 'successfully posted!',
        data: users,

    })
})

route.put('/editUser/:id', (req, res) => {
    console.log('user route put request received !');
    let { id } = req.params;
    let data = req.body;
    console.log(id, data);
    if (!users.find((user) => user.id == id)) {
        res.status(404).send('user not found !')
    }
    let updated_data = users.map((user) => {
        if (user.id == id) return  {...user, ...data}
        return user
    })

    users = updated_data;
    console.log(' updated_data ', updated_data);

    res.status(200).json({
        error: false,
        message: 'successfully updated!',
        data: users,
    })
}

)

route.delete('/:id', (req, res) => {
    console.log('user route delete request received!');
    let { id } = req.params;
    let filter = users.filter(user => user.id != id);
    if (filter.length < users.length) {
        res.status(200).json({
            error: false,
            message: 'successfully deleted !',
            data: filter,
        })
    }
    res.status(404).json({
        error: false,
        message: 'no user with such id !',
    })
})

export default route;