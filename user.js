class User {
  constructor(name,password){
    this.name = name
    this.password = password
  }
}

class Resumes {
  constructor(userName,name,position,link){
    this.userName = userName
    this.name = name
    this.position = position
    this.link = link
  }
}

module.exports = {User, Resumes}
