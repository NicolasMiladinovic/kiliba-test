const db = require('../db.js');

// Post email and note from front
exports.userdata = (req, res, next) => {
    const email = req.body.email;
    const note = req.body.note;
    db.run(`INSERT INTO users VALUES (?, ?)`, [email, note], function (err, result) {
        if (err) {
            console.log(err);
            return res.status(400).json("error");
        } else {
            console.log("Email and note are inserted");
            res.status(201).json(result);
        }
    });
};

// Get all info from database
exports.getdata = (req, res, next) => {
    db.all(`SELECT * FROM users`, function (err, result) {
        if (err) {
            console.log(err);
            return res.status(400).json("error");
        } else {
            console.log("All data selected");
            res.status(201).json(result);
            let allEmails = result.map(obj => obj.email);
            console.log(result);
            console.log(allEmails);
            /* res.status(201).json(allEmails) */
        }
    });
};

// Get average of the notes
exports.getaverage = (req, res, next) => {
    db.all(`SELECT AVG(note) FROM users`, function (err, result) {
        if (err) {
            console.log(err);
            return res.status(400).json('error');
        } else {
            console.log(('Average'));
            res.status(201).json(result);
            console.log(result);
        }
    });
};

exports.getmedian = (req, res, next) => {
    db.all(`SELECT AVG(note) FROM (SELECT note FROM users ORDER BY note LIMIT 2 - (SELECT COUNT(*) FROM users) % 2 OFFSET (SELECT (COUNT(*) - 1) / 2 FROM users))`, function (err, result) {
        if (err) {
            console.log(err);
            return res.status(400).json('error');
        } else {
            console.log(('Average'));
            res.status(201).json(result);
            console.log(result);
        }
    });
};