const { Cards } = require("../model")

Cards.sync({ force: false })

const addCard = async (req, res) => {
  const { img, title, fullname, profession, date, time, network, view } = req.body

  await Cards.create({ img, title, fullname, profession, date, time, network, view })

  return res.send("added card!")

}

const getCards = async (_, res) => {
  const getData = await Cards.findAll()
  res.send(getData)
}

module.exports = {
  addCard,
  getCards
}