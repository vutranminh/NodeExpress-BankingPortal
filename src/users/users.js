const fs = require('fs');
const path = require('path');

const User = (args) => {
    const db = args.db;
    const user = {};
    user.loadAll = async () => {
        return new Promise((resolve, reject) => {
            db.users.findOne({}, (err, doc) => {
                if (err)
                    return reject(err);
                resolve(doc);
            });
        });
    };
    user.save = async (users) => {
        return new Promise((resolve, reject) => {
            db.users.save(users);
        });
    };
    return user;
};
module.exports = User;

