const fs = require('fs');
const path = require('path');

const Account = (args) => {
    const db = args.db;
    const account = {};
    account.loadAll = async () => {
        return new Promise((resolve, reject) => {
            db.accounts.findOne({}, (err, doc) => {
                if (err)
                    return reject(err);
                resolve(doc);
            });
        });
    };
    account.save = async (accounts) => {
        return new Promise((resolve, reject) => {
            db.accounts.save(accounts, (err, doc) => {
                if (err)
                    return reject(err);
                resolve(doc);
            });
        });
    };
    return account;
};
module.exports = Account;

