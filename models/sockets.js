const UserList = require("./user-list")
const PreguntaList = require("./pregunta-list")

class Sockets {

    constructor( io ) {
        this.io = io;
        this.userList = new UserList();
        this.preguntaList = new PreguntaList();
        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            console.log('Cliente conectado');

            socket.emit('current-users', this.userList.getUser());
            socket.emit('current-preguntas', this.preguntaList.getPregunta());
            socket.on('add-user', ({name}) => {
                this.userList.addUser(name)
                this.io.emit('current-users', this.userList.getUser());
                this.io.emit('current-preguntas', this.preguntaList.getPregunta());
            })
            socket.on('remove-user', (name) => {
                this.userList.removeUser(name);
                this.io.emit('current-users', this.userList.getUser());
            })
            socket.on('iniciar', (play) => {
                this.io.emit('show', play);
                this.io.emit('current-question', this.preguntaList.buscarPorId(1));
            })
            socket.on('respuesta-correcta', (name) => {
                this.userList.increaseScore(name);
                this.io.emit('current-users', this.userList.getUser());
            })
            socket.on('aumentar-pregunta', (name) =>{
                this.userList.increaseQuestion(name);
                this.io.emit('current-users', this.userList.getUser());
            })
            socket.on('send-user', (name) => {
                socket.emit('current-pregunta', this.userList.getQuestion(name));
            })
        });
    }


}


module.exports = Sockets;