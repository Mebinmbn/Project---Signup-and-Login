const username = document.getElementById('username')
const password = document.getElementById('password')
const submitBtn = document.getElementById('submit-btn')
const form = document.getElementById("login-form")


// * submit lister
form.addEventListener('submit', (e) => {
  e.preventDefault()
  checkEmail()
  checkPassword()

  const data = {
    username: username.value.trim(),
    password: password.value.trim()
  }
  fetch("/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then((data) => {
      console.log(data)
      if (data?.username) {
        const username = data.username
        localStorage.setItem("username", username)
        return window.location.href = '/'
      } else {
        alert(data.message)
      }
    })
    .catch((err) => {
      console.log(err.message)
    })
})