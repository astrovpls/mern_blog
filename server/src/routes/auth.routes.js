const { Router } = require('express')
const router = Router()
const { loginUser, /*registerUser*/ } = require('../controllers/auth.controller')


router.post('/api/user/login', loginUser)
// router.post('/api/user/register', registerUser)

// {
// 	"username": "astrov",
// 	"email": "astrov.pls@gmail.com",
// 	"isAdmin": true,
// 	"password": "astrov1"
// }


module.exports = router
