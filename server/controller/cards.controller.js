const { Cards } = require("../model")
const jwt = require("jsonwebtoken")

Cards.sync({ force: false })

const addCard = async (req, res) => {
  const { title, fullname, profession, date, time, network, view, phoneNumber } = req.body
  // const file = req.body.filename;
  // console.log(file);

  await Cards.create({ title, fullname, profession, date, time, network, view, phoneNumber })

  return res.send("added card!")

}

const getCards = async (_, res) => {
  const getData = await Cards.findAll()
  res.send(getData)
}

const updateAnnouncement = async (req, res) => {
  const { id, isApply} = req.body

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
  const { id, isActive} = req.body

  const updatedUser = await Cards.update({ isActive }, {
    returning: true,
    plain: false,
    where: {
      id
    }
  })

  return res.send(updatedUser.filter(e => e))

}

module.exports = {
  addCard,
  getCards,
  updateAnnouncement,
  updateActive
}