
const sequelize = require('./config/database');
const User = require('./models/User');
const Event = require('./models/Event');
const Registration = require('./models/Registration');

sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
}).catch(error => console.log(error));

