export default (res) => ({

  created (data) {
    res.status(201).send(data)
  }

})
