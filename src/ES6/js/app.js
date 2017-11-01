function Animal () {
    this.nombre = "Misigno";
}
Animal.prototype.maullar = function () {

}
let gato = new Animal;

//ES6
class SerVivo {
    constructor () {
        this.nacer = true;
    }
    morir () {
        console.log ("Me muero")
    }
}

class Animal2 extends SerVivo {
    constructor (nombre) {
        super ();
        this.nombre = nombre
    }
    maullar () {
        console.log ("Miauuu~!")
    }
}
let gato2 = new Animal2 ("Misigno");