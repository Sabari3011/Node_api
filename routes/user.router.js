const {Router} = require('express')
const router = Router()
const User =require('../models/user.model')
const {getUsers , getuser, postUser, putUser, deleteUser} = require('../controllers/user.controller')

router.get('/', getUsers)

router.get('/:id',getuser)


router.post('/', postUser)




router.put('/:id',putUser)


router.delete('/:id',deleteUser)


module.exports = router ;