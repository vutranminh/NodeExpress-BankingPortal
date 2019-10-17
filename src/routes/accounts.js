const {loadAccounts} = require('../data');
const express = require('express');

const router = express.Router();

router.get('/savings', async (req, res) => {
    const accounts = await loadAccounts();
    res.render('account', {account: accounts.savings});

});
router.get('/checking', async (req, res) => {
    const accounts = await loadAccounts();
    res.render('account', {account: accounts.checking});
});
router.get('/credit', async (req, res) => {
    const accounts = await loadAccounts();
    res.render('account', {account: accounts.credit});
});

module.exports = router;