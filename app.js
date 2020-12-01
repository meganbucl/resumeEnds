var express = require("express");
var app = express();
var mysql = require("mysql");
var {User} = require("./user.js");
var allUsers = [];
var user = new User("Megan","gumbo")


app.get("/", (req,resp)=>{
  resp.send("Send resume or reply to one.");
});
app.get("/testing", (req,resp)=>{
  allUsers.push(user)
  resp.send(allUsers)
});
app.get("/newUser/:name/:password", (req,resp)=>{
  var name = req.params.name;
  var password = req.params.password;

  var connection = mysql.createConnection({
    host:"localhost",
    user:"Web",
    password: "password",
    database: "ResumeSystem"
  })
  connection.connect((error)=>{
    if(error){
      console.log("There was an error");
      console.log(error);
      resp.send(`Error ${error}`);
      return
    }
    console.log("There was success. We have the data!");
    var selectQuery = `INSERT INTO Users(userName,password) VALUES("${name}","${password}")`
    connection.query(selectQuery, (error, result)=>{
      if(error) {
        console.log(error);
        return
      }
      console.log(result);
      resp.send("Did it, you are a official user now.");
      return
    });
  });

});
app.get("/login/:name/:password", (req,resp)=>{
  var name = req.params.name;
  var password = req.params.password;

});
app.get("/seeReplies", (req,resp)=>{
  var connection = mysql.createConnection({
    host:"localhost",
    user:"Web",
    password: "password",
    database: "ResumeSystem"
  })
  connection.connect((error)=>{
    if(error){
      console.log("There was an error");
      console.log(error);
      resp.send(`Error ${error}`);
      return
    }
    console.log("There was success. We have the data!");
    var selectQuery = "SELECT * FROM Replies"
    connection.query(selectQuery, (error, result)=>{
      if(error) {
        console.log(error);
        return
      }
      console.log(result);
      resp.send(result);
      return
    });
  });

});
app.post("/sendResume/userName/link", (req,resp)=>{
  var userName = req.params.userName;
  var link = req.params.link;
  var connection = mysql.createConnection({
    host:"localhost",
    user:"Web",
    password: "password",
    database: "ResumeSystem"
  })
  connection.connect((error)=>{
    if(error){
      console.log("There was an error");
      console.log(error);
      resp.send(`Error ${error}`);
      return
    }
    console.log("There was success. We have the data!");
    var selectQuery = `INSERT INTO Resumes(userName,resumeLink) VALUES("${userName}","${link}")`
    connection.query(selectQuery, (error, result)=>{
      if(error) {
        console.log(error);
        return
      }
      console.log(result);
      resp.send(result);
      return
    });
  });

});
app.get("/sendReply", (req,resp)=>{


});
app.listen(5159)
console.log("Listening on port 5159");
