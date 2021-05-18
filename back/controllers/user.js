const db = require('../db.js');

/* exports.userdata = (req, res, next) => {
    const email = req.body.email;
    const note = req.body.note;
    db.query(`INSERT INTO users VALUES (?, ?)`, [email, note], function (err, result) {
        if (err) { 
                console.log(err);
                return res.status(400).json(err)
        } else {
            console.log("Email and note are inserted");
        }
    });
}; */

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