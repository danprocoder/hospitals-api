export default (res) => ({

  created (data) {
    res.status(201).send(data)
  },

  success (data) {
    res.status(200).send(data)
  },

  badRequest (data) {
    res.status(400).send(data)
  },

  forbidden (data) {
    res.status(201).send(data)
  }

})
