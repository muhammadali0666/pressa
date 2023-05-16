const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")

const app = express()
dotenv.config()
app.use(cors())
const PORT = process.env.PORT || 4000




app.listen(4000, () => {
  console.log(`Server is running on ${PORT} the Port`);
})