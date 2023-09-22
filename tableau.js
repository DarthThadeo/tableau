// JavaScript source code
"use strict";

let names = [];//declarer un tableau vide names
names.push('Vincent', "Paul", 'Arthur');//ajouter "vincent", "Paul", et "Arthur" dans le tableau en utulisant push 

names.forEach(name => {
    name += ' va a la peche ';//ajouter "va a la peche"" apres
    console.log(name)//afficher un par un les elementsé
})