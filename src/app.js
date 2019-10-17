const fs = require('fs');
const path = require('path');

const db = require('./database/mongo');
const Account = new require('./accounts/accounts')({db});
const User = require('./users/users')({db});

const express = require('express');
const app = express();
const accountRoutes = require('./routes/accounts');
const servicesRoutes = require('./routes/services');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));

app.get('/', async (req, res) => {
    const accounts = await Account.loadAll();
    res.render('index', {'title': 'Account Summary', accounts});
});

app.use('/account', accountRoutes);
app.use('/services', servicesRoutes);

app.get('/profile', async (req, res) => {
    const users = await User.loadAll();
    res.render('profile', {user: users[0]});
});

app.listen(3000, () => console.log('PS Project Running on port 3000!'));