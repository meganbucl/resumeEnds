var replies = document.getElementById('replies');
var name = document.getElementById('Name');
var answers = document.getElementById('Anwers');

answers.addEventListener("click", ()=>{
  let rep = `http://megan.local:5159/seeReplies/${name.value}`
  console.log(rep)
  fetch(rep)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        replies.innerHTML = data;
      });
})
