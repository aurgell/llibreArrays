"use strict";

export class Autor {
    _idAutor;
    #_name;
    #_surname;
    constructor(id, name, surname) {
        this._idAutor = this.#positiveNumber(id);
        this.#_name = this.#nullIfUndefined(name);
        this.#_surname = this.#nullIfUndefined(surname);
    }
    #nullIfUndefined(value) {
        if (!value) {
            value = null;
        }
        return value;
    }

    #emptyIfNull(value) {
        if (!value) {
            value = "";
        }
        return value;
    }

    #positiveNumber(value){
        if(value < 0){
            throw "Error!";
        }
        return value;
    }

    get idAutor() {
        return this._idAutor;
    }

    toString() {
        return `${this.#emptyIfNull(this.#_surname)}, ${this.#emptyIfNull(this.#_name)}`;
    }
}