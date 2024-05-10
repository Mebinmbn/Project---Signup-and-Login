const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data) { this.users = data }
}
const fsPromises = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
    const { user,email, pwd } = req.body;
    if (!user || !pwd || !email) return res.render('signup',{class: 'alert alert-danger', message: 'Username, email and password are required'});
    // check for duplicate usernames in the db
    const duplicate = usersDB.users.find(person => person.username === user);
    if (duplicate) return res.sendStatus(409); //Conflict 
    try {
        //encrypt the password
        const hashedPwd = await bcrypt.hash(pwd, 10);
        //store the new user
        const newUser = { "username": user, "email":email, "password": hashedPwd };
        usersDB.setUsers([...usersDB.users, newUser]);
        await fsPromises.writeFile(
            path.join(__dirname, '..', 'model', 'users.json'),
            JSON.stringify(usersDB.users)
        );
        console.log(usersDB.users);
        res.render('signup',{class: 'alert alert-success', message: 'Account created succesfully. Click here to', login:'login' });
        // status(201).json({ 'success': `New user ${user} created!` });
    } catch (err) {
        res.render('signup',{class: 'alert alert-danger', message: 'Signup failed' });
    }
}

module.exports = { handleNewUser };