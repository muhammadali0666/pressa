const { Cards } = require("../model")
const jwt = require("jsonwebtoken")
const { Op } = require("sequelize")

Cards.sync({ force: false })

const addCard = async (req, res) => {
  const { title, fullname, profession, date, time, network, view, phoneNumber, img } = req.body

  await Cards.create({ title, fullname, profession, date, time, network, view, phoneNumber, img })

  return res.send("added card!")

}

const getCards = async (_, res) => {
  const getData = await Cards.findAll()
  res.send(getData)
}

const updateAnnouncement = async (req, res) => {
  const { id, isApply } = req.body

  const updatedUser = await Cards.update({ isApply }, {
    returning: true,
    plain: false,
    where: {
      id
    }
  })

  return res.send(updatedUser.filter(e => e))

}

const updateActive = async (req, res) => {
  const { id, isActive } = req.body

  const updatedUser = await Cards.update({ isActive }, {
    returning: true,
    plain: false,
    where: {
      id
    }
  })

  return res.send(updatedUser.filter(e => e))
}

const Search = async (req, res) => {
  const { date } = req.body;

  const result = await Cards.findAll({
    where: {
      [Op.or]: [
        // { fullname },
        { date }
      ]
    }
  })
    .catch(err => console.log(err))
  return res.send(result)
}

module.exports = {
  addCard,
  getCards,
  updateAnnouncement,
  updateActive,
  Search
}