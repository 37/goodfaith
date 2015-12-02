var User = require('../models/User');

exports.index = function(req, res) {
    // If user IS logged in
    if (req.user) {
        // console.log(user._id);
        res.render('home', {
            title: 'Home',
            user: req.user
        });
    } else { // If user is NOT logged in
        res.render('index', {
            title: 'Index',
        });
    }

};
