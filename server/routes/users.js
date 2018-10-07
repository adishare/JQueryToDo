const router = require("express").Router()
const userController = require('../controllers/userController.js')

// /api/users
router
.post("/signup", userController.create)
.post("/login", userController.login)
.post("/verifytoken", userController.verifyToken)

router
.get('/', userController.getOneById) //user dashboard
.delete('/', userController.deleteById) //delete user's own account
.patch('/', userController.updatebyId); //update changes


module.exports = router;
