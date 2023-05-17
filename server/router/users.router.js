const { Router } = require("express")
const { authRegister, authLogin } = require("../controller/users.controller")

const authRouter = Router()


// authRouter.get("/list",  getUsers)

authRouter.post("/register", authRegister)
authRouter.post("/login", authLogin)

// authRouter.route("/:id")
//       .get(getUser)
//       .delete(deleteUser)
//       .put(updateUser)


module.exports = authRouter