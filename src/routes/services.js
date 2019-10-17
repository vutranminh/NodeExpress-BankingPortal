const db = require('../database/mongo');
const Account = new require('../accounts/accounts')({db});
const User = new require('../users/users')({db});
const express = require('express');
const router = express.Router();

router.get('/transfer', (req, res) => {
    res.render('transfer');
});
router.post('/transfer', async (req, res) => {
    const accounts = await Account.loadAll();
    accounts[req.body.from].balance = accounts[req.body.from].balance - req.body.amount;
    accounts[req.body.to].balance = parseInt(accounts[req.body.to].balance) + parseInt(req.body.amount, 10);
    await Account.save(accounts);
    res.render('transfer', {message: 'Transfer Completed'});
});

router.get('/payment', async (req, res) => {
    const accounts = await Account.loadAll();
    res.render('payment', {account: accounts.credit})
});

router.post('/payment', async (req, res) => {
    const accounts = await Account.loadAll();
    accounts.credit.balance -= req.body.amount;
    accounts.credit.available += parseInt(req.body.amount, 10);
    await Account.save(accounts);
    res.render('payment', {message: 'Payment Successful', account: accounts.credit});
});

module.exports = router;