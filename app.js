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
app.get("/newUser/:name/:password/:firstName/:lastName", (req,resp)=>{
  var name = req.params.name;
  var password = req.params.password;
  var firstName = req.params.firstName;
  var lastName = req.params.lastName;

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
    var selectQuery = `INSERT INTO Users(userName,password,firstName,lastName) VALUES("${name}","${password}","${firstName}","${lastName}")`
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
    var selectQuery = `SELECT COUNT(userName) AS amount FROM Users WHERE userName = '${name}' AND password = '${password}'`
    //var selectQuery = `SELECT userName, CASE WHEN userName = "${name}" && password = "${password}" THEN "true" ELSE "false" END FROM Users`
    //var selectQuery = `SELECT IF(userName = "${name}" && password = "${password}", " true", "false") FROM Users`

    connection.query(selectQuery, (error, result)=>{
      if(error) {
        console.log(error);
        return
      }
      console.log(result[0].amount)
      if(result[0].amount == 1){
        resp.send(["Login successful! Woot Woot!"])
        return
      }if(result[0].amount == 0){
        resp.send(["Login unsuccessful, userName or password is wrong."])
        return
      }
      console.log(result);
      resp.send(result);
      return
    });
  });

});
app.get("/seeReplies/:userName", (req,resp)=>{
  var userName = req.params.userName;
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
    var selectQuery = `SELECT * FROM Replies WHERE userName = '${userName}'`
    connection.query(selectQuery, (error, result)=>{
      if(error) {
        console.log(error);
        return
      }
      console.log(result);
      if(result == ""){
        resp.send("No Replies Yet.")
        return
      }
      resp.send(result);
      return
    });
  });

});
app.get("/sendResume/userName/link", (req,resp)=>{
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
app.get("/sendReply/:userReplyingTo/:reply", (req,resp)=>{
  var userReplyingTo = req.params.userReplyingTo;
  var reply = req.params.reply;

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
    var selectQuery = `INSERT INTO Replies(userName,reply) VALUES("${userReplyingTo}","${reply}")`
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
app.listen(5159)
console.log("Listening on port 5159");
