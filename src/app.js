const fs = require('fs');
const path = require('path');
const {loadUsers, loadAccounts, writeJSON} = require('./data');
const express = require('express');
const app = express();
const accountRoutes = require('./routes/accounts');
const servicesRoutes = require('./routes/services');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));

app.get('/', async (req, res) => {
    const accounts = await loadAccounts();
    res.render('index', {'title': 'Account Summary', accounts});
});

app.use('/account', accountRoutes);
app.use('/services', servicesRoutes);

app.get('/profile', async (req, res) => {
    const users = await loadUsers();
    res.render('profile', {user: users[0]});
});

app.listen(3000, () => console.log('PS Project Running on port 3000!'));