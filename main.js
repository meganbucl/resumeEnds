var login = document.getElementById('Resume');
var user = document.getElementById('username');
var password = document.getElementById('password');

var submit = document.getElementById('SubMit');
var firstName = document.getElementById('firstName');
var username = document.getElementById('username');
var position = document.getElementById('position');
var resume = document.getElementById('reume');

login.addEventListener("click", ()=>{
  let url = `http://megan.local:5159/login/${user.value}/${password.value}`
  fetch(url)
      .then(response => response.json())
      .then(data => {
        window.location.assign("resume.html")
        console.log(url);
      });
});

submit.addEventListener("click", ()=>{
  let resume = `http://megan.local:5159/sendResume/${username.value}/${firstName.value}/${position.value}/${resume.value}`
  fetch(resume)
      .then(response => response.json())
      .then(data => {
        window.location.assign("SubmitPage.html")
        console.log(resume);
      });
});
