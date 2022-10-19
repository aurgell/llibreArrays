"use strict";

import {Autor} from "./Autor.js";

export class Llibre{

    #_titol;
    #_autor = Autor;
    #_numPag;

    constructor(titol,autor) {
        this.#_titol = this.#nullIfUndefined(titol);
        this.#_autor = this.#nullIfUndefined(autor);
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

    get titol() {
        return this.#_titol;
    }

    get autor() {
        return this.#_autor;
    }

    get numPag(){
        return this.#_numPag;
    }

    set numPag(value){
        if(!Number.isInteger(value) || value < 0 || !value){
            this.#_numPag = 0;
        }else{
            this.#_numPag = value;
        }
    }

    toString() {
        return `${this.#emptyIfNull(this.#_titol)}#${this.#emptyIfNull(this.#_numPag)}#${this.#emptyIfNull(this.#_autor.toString())}`
    }
}




