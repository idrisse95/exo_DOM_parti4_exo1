// # Exercice :
// >*En utilisant l'attribut style*

// >*Cherche des methodes pour résoudre les énoncés suivants :*


// ### 1. Récupère le h1 dans une variable 

// let exo1 = document.querySelector('h1')
// console.log(exo1);

// ### 2. Créer un programme qui met le texte du h1 en bleu


// let exo2 = document.querySelector('h1').style=('color:blue;')





// ### 3. Met ce programme dans une function
//methode 1 
 
 
function exo3() {
    document.querySelector('h1').style=('color:blue;')
}



 

// ### 4. Appelle cette function pour qu'elle soit executé 
exo3()

// ### 5. Met un écouteur d'événement sur le h1, qui au clique lance la function


document.querySelector('h1').addEventListener('click',()=>{
    //instructions
   exo3()
})