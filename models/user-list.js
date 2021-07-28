const User = require("./user")

class UserList{
    fin = false;
    constructor() {
        this.users = [];
    }
    addUser(name){
        const user = new User(name);
        this.users.push(user);
        return this.users;
    }
    increaseScore(name){
        this.users = this.users.map( user => {
            if (user.name === name){
                user.score += 10;
            }
            return user;
        });
    }
    increaseQuestion(name){
        this.users = this.users.map(user => {
            if(user.name === name){
                user.question += 1;
            }
            return user;
        })
    }

    getQuestion(name){
        const pregunta = this.users.find(element => element.name === name);
        return pregunta.question;
    }

    removeUser(name){
        this.users = this.users.filter(user => user.name !== name);
    }

    getUser(){
        return this.users;
    }
}

module.exports = UserList