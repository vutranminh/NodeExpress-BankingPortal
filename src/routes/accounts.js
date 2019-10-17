const db = require('../database/mongo');
const Account = new require('../accounts/accounts')({db});
const express = require('express');

const router = express.Router();

router.get('/savings', async (req, res) => {
    const accounts = await Account.loadAll();
    res.render('account', {account: accounts.savings});

});
router.get('/checking', async (req, res) => {
    const accounts = await Account.loadAll();
    res.render('account', {account: accounts.checking});
});
router.get('/credit', async (req, res) => {
    const accounts = await Account.loadAll();
    res.render('account', {account: accounts.credit});
});

module.exports = router;