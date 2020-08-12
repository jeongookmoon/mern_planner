const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.set("port", port);

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const plansRouter = require('./routes/plans');
const usersRouter = require('./routes/users');

app.use('/plans', plansRouter);
app.use('/users', usersRouter);


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));


  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
  });
}

app.listen(app.get('port'), () => {
  console.log(`Server is running at ${app.get('port')}`);
});
