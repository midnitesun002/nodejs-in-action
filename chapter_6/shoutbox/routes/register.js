const User = require('../models/user');

exports.form = (req, res) => {
    res.render('register', { title: 'Register' });
}

exports.submit = (req, res, next) => {
    const data = req.body.user;

    User.getByName(data.name, (err, user) => {
        if (err) return next(err);
        console.log('here is user: ', user, user.id)
        if (user.id) {
            res.error('Username');
            res.redirect('back');
        } else {
            user = new User({
                name: data.name,
                pass: data.pass
            });
            user.save((err) => {
                if (err) return next(err);
                req.session.uid = user.id;
                res.redirect('/');
            });
        }
    });
};