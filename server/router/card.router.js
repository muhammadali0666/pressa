const { Router } = require("express")
const { addCard, getCards } = require("../controller/cards.controller")

const cardRouter = Router()


cardRouter.post("/card", addCard)
cardRouter.get("/get_card", getCards)


module.exports = cardRouter