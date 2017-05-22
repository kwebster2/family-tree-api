module.exports = function(app, db) {
  app.post('/people', (req, res) => {
    console.log(req.body)
    res.send("Hello")
  })
};
