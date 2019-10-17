const fs = require('fs');
const path = require('path');
const db = require('./mongo');

const loadAccounts = async () => {
    return new Promise((resolve, reject) => {
        db.accounts.findOne({}, (err, doc) => {
            if (err)
                return reject(err);
            resolve(doc);
        });
    });
}
const loadUsers = async () => {
    return new Promise((resolve, reject) => {
        db.users.find({}, (err, doc) => {
            if (err)
                return reject(err);
            resolve(doc);
        });
    });
}

const writeJSON = (accounts) => {
    return new Promise((resolve, reject) => {
        db.accounts.save(accounts);
    });
};
module.exports = {loadAccounts, loadUsers, writeJSON};