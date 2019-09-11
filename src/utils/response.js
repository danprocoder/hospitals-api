export default (res) => ({

  created (data) {
    res.status(201).send(data)
  },

  badRequest (data) {
    res.status(400).send(data)
  }

})
