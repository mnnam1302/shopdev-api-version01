const express = require('express');
const router = express.Router();

router.get('/checkstatus', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'api ok'
    })
})

router.get('/users', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: [
            {
                name: 'John Doe',
                age: 40
            },
            {
                name: 'Jane Doe',
                age: 30
            },
            {
                name: 'Doe Doe',
                age: 20
            }
        ]
    })
})

module.exports = router;