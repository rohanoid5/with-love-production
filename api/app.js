const express = require('express');
const bodyParser = require('body-parser');
const helper = require('./helper/helper.js');
const mongoose = require('mongoose');
const seedDb = require('./helper/seed');
const passport = require('passport');
const localStrategy = require('passport-local');
const jwt = require('jsonwebtoken');
const user = require('./models/user');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');
const letterMinimalRoutes = require('./routes/letter_minimal');
const receiverRoutes = require('./routes/receiver');
const cors = require('cors');
const fileUpload = require('express-fileupload');

//seedDb();

mongoose.connect('mongodb://localhost/with-love');
mongoose.Promise = require('bluebird');

const app = express();

// app.use(require('express-session')({
// 	secret: 'I am a psychopath!!',
// 	resave: false,
// 	saveUninitialized: false
// }));
app.use(cors())
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

require('./config/passport')(passport);

// passport.use(new localStrategy(user.authenticate()));
// passport.serializeUser(user.serializeUser());
// passport.deserializeUser(user.deserializeUser());

app.use(authRoutes);
app.use('/user', userRoutes);
app.use('/admin', adminRoutes);
app.use('/letter_minimal', letterMinimalRoutes);
app.use('/receiver', receiverRoutes);

app.get('/', (req, res) => {
    res.setHeader('content-type', 'application/json');
    res.json({ status: "ok", message: "You are in the root route" });
});

let port = helper.normalizePort(process.env.PORT || '8000');

app.listen(process.env.PORT || 8000, () => {
    console.log("Application has been started!");
});
