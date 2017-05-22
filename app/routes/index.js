const peopleRoutes = require('./people_routes');
module.exports = function(app, db) {
  peopleRoutes(app, db);
  // Other route groups could go here, in the future
};
