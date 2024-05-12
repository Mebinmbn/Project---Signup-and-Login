const logoutController = async (req, res) => {
    console.log(req.session.user)
    req.session.authorized = false;
    try {
      req.session.destroy() //destrotying the session
      console.log("logout success")
      res.redirect("/login") //to the login page
    } catch (err) {
      console.log("logout failed")
      console.log(err)
      res.sendStatus(500)
    }
  }

  module.exports ={logoutController};