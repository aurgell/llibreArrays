"use strict";

import {Autor} from "./class/Autor.js";
import {Llibre} from "./class/Llibre.js";
import {Utils} from "./class/Utils.js";


let authors=[
    ["Joanne","Rowling"],
    ["Rick","Riordan"],
    ["Jules", "Verne"],
    [undefined,"Thibodeau"]
];

let books = [
    [3,"Viatge al centre de la terra",304],
    [1,"Harry Potter i la pedra filosofal",304],
    [1,"Harry Potter i la cambra secreta",338] ,
    [2,"El lladre del llampec",384] ,
    [1,"Harry Potter i el pres d'Azkaban",416] ,
    [3,"Viatge al centre de la terra",264] ,
    [3,"Cinc setmanes en globus",320] ,
    [4,"Anatomía y fisiología",764] ,
    [2,"El mar dels monstres",282] ,
    [3,"Vint mil llegües de viatge submarí",224] ,
    [1,"Harry Potter i la cambra secreta",338]
];

// 1- Array d'objectes classe Autor
authors.forEach((element,index,array)=>{
    let author = new Autor(index+1,element[0],element[1]);
    array[index] = author;
})

// 2- Array NOU d'objectes de classe Llibre amb autors(obj)
let newBooks = books.map(function(element,index,array){
    let author = authors.find(x=>x.idAutor === element[0]);
    let book = new Llibre(element[1],author);
    book.numPag = element[2];
    return element[index] = book;
});


//3- Funció per retornar els llibres donat un id d'autor
function getBooksByAuthor(id){
    return newBooks.filter(x=>x.autor.idAutor === id);
}

//4- Mètode d'array ordenar per títol
Array.prototype.ordenarPerTitol = function(){
    this.sort(function (a,b) {
        if (a.titol === b.titol){
            return a.numPag-b.numPag;
        }else{
            return Utils.stringCompareSort(a.titol,b.titol);
        }
    });
    return this.reverse();
}

//5- Mètode d'array ordenar per pàgines
Array.prototype.ordenarPerPagines = function(){
    return this.sort(function (a,b) {
        if (a.numPag === b.numPag){
            return Utils.stringCompareSort(a.titol,b.titol);
        }else{
            return b.numPag - a.numPag;
        }
    });
}

//6- Mètode d'array ordenar per autor
Array.prototype.ordenarPerAutor = function(){
    return this.sort(function (a,b) {
        if (a.autor === b.autor){
            return Utils.stringCompareSort(a.titol,b.titol);
        }else{
            return Utils.stringCompareSort(a.autor.toString,b.autor.toString);
        }
    });
}

