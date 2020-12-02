var createuser = document.getElementById('User');
var firstname = document.getElementById('firstname');
var lastname = document.getElementById('lastname');
var username = document.getElementById('username');
var password = document.getElementById('password');

createuser.addEventListener("click", ()=>{
  let user = `http://megan.local:5159/newUser/${username.value}/${password.value}/${firstname.value}/${lastname.value}`
  console.log(user)
  fetch(user)
      .then(response => response.json())
      .then(data => {
        window.location.assign("index.html");
        console.log(user);
      });
});
