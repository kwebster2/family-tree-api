module.exports = function(app, db) {
  app.post('/people', (req, res) => {
        debugger;
    const person = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      instagram: req.body.instagram
    }
    db.collection('people').insert(person, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(result.ops);
      }
      });
  });
};
