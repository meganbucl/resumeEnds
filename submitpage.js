

var replies = document.getElementById('replies');
var sname = document.getElementById('Name');
var answers = document.getElementById('Anwers');

answers.addEventListener("click", ()=>{
  document.querySelector(".Reply").classList.remove("hidden")
  console.log(sname.value)
  let rep = `http://megan.local:5159/seeReplies/${sname.value}`
  console.log(rep)
  fetch(rep)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        replies.innerHTML = "";
        data.forEach((item, i) =>{
          replies.innerHTML += `${item.reply}`;
      });

      });
});
