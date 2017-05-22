module.exports = function(app, db) {
  app.post('/people', (req, res) => {
    const person = { name: req.body.name}
    db.collection('people').insert(person, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(result.ops[0]);
      }
      });
  });
};
