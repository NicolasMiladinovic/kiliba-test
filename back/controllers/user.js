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
            console.log(result);
            res.status(201).json(result);
        }
    });
};

// Get average of the notes
exports.getaverage = (req, res, next) => {
    db.all(`SELECT AVG(note) AS avg FROM users`, function (err, result) {
        if (err) {
            console.log(err);
            return res.status(400).json('error');
        } else {
            if (result[0].avg === null) {
                result[0].avg === '';
            }else{
                res.status(201).json(result);
            }
            
        }
    });
};

// Get median (not clean) no result when the number of notes is even
exports.getmedian = (req, res, next) => {
    db.all(`SELECT AVG(note) AS avg FROM (SELECT note FROM users ORDER BY note LIMIT 2 - (SELECT COUNT(*) FROM users) % 2 OFFSET (SELECT (COUNT(*) - 1) / 2 FROM users))`, function (err, result) {
        if (err) {
            console.log(err);
            return res.status(400).json('error');
        } else {
            let noteresult = result[0].avg;
            db.all(`SELECT * FROM users WHERE note = ?`, [noteresult], function (err2, result2) {
                if (err2) {
                    console.log(err2);
                    return res.status(400).json({ err2: 'No user found' });
                } else {
                    res.status(201).json(result2);
                    console.log(result2);
                }
            })
        }
    });
};