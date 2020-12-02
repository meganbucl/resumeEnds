var submit = document.getElementById('SubMit');
var firstName = document.getElementById('firstName');
var username = document.getElementById('username');
var position = document.getElementById('position');
var resume = document.getElementById('reume');

submit.addEventListener("click", ()=>{
  let res = `http://megan.local:5159/sendResume/${username.value}/${firstName.value}/${position.value}/${resume.value}`
  fetch(res)
      .then(response => response.json())
      .then(data => {
        window.location.assign("SubmitPage.html");
        console.log(res);
      });
});
