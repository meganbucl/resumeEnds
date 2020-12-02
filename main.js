var login = document.getElementById('Resume');
var user = document.getElementById('username');
var password = document.getElementById('password');

login.addEventListener("click", ()=>{
  let url = `http://megan.local:5159/login/${user.value}/${password.value}`
  fetch(url)
      .then(response => response.json())
      .then(data => {
        window.location.assign("resume.html")
        console.log(url);
      });
});
