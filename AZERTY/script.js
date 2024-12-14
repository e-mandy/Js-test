/*let nomtab=["cacholat","Petunia","Serviette"]
let score=0
let phrase=["Pas de panique","Pas dangoisse","Pas dee"]
let mots="mots"

let choix=prompt("choisir entre phrase ou mots")
while(choix!==mots && choix!=="phrase"){
    choix=prompt("choisir entre phrase ou mots") 
    
}
for(let i=0;i<3;i++){
    if(choix==mots){
        let motutilisateur=prompt("veuillez entrerer:" +nomtab[i])
        if(motutilisateur==nomtab[i]){
            score++
        }

    }else{
        let phraseutilisateur=prompt("veuillez entrerer:" +phrase[i])
        if(phraseutilisateur==phrase[i]){
            score++
        }
    }
   
    
   
}

console.log(score)
let inst=prompt("Veuillez entrer:"+ nomtab[0])

if(inst==nomtab[0]){
    score++
    
}

 inst=prompt("Veuillez entrer:"+ nomtab[1])

if(inst==nomtab[1]){
    score++
    
}

inst=prompt("Veuillez entrer:"+ nomtab[2])

if(inst==nomtab[2]){
    score++
    
}
console.log(score);

switch(inst){
    case nomtab[0]:
        score++
        break
        case nomtab[1]:
        score++
        break
        default:
        score=0
}
console.log(score)

let i=0
while(i<3){
    
    console.log(i)
    
}*/

let listemots=["cachalot","petunia","serviette","trchi","ola","maga","ogni"]
let listephrases=["Pas de panique","Prends du recul","J'aime bien cette couleur","Un peu de patience","Ca ira","Fais d'effort"]

function afficherscore(score,i){
    let spanscore=document.getElementById("score")
    let affichagescore= `Votre score est : ${score} / ${i}`
    spanscore.innerText=affichagescore 
}
function afficherproposition(proposition){
    let propositione=document.querySelector(".containerr h2")
    propositione.innerText=proposition
}

function lancerjeu(){
    
    let score=0
    let i=0
    let listeproposition=listemots
    let valider=document.getElementById("but")
    let ecrit=document.getElementById("type-text")
    afficherproposition(listeproposition[i])
    valider.addEventListener("click", ()=>{
        console.log(ecrit.value)
        if(ecrit.value==listeproposition[i]){
          score++  
        }
        i++
        afficherscore(score,i) 
        ecrit.value=''
        if (listeproposition[i]===undefined){
            afficherproposition("Le jeu est fini")
            valider.disabled=true
        }else{
            afficherproposition(listeproposition[i]) 

        }
    })
    let radio=document.querySelectorAll(".ama input")
    for(let j=0;j<radio.length;j++){
        radio[j].addEventListener("change",(Event)=>{
       console.log(Event.target.value)
       if (Event.target.value==="1"){
        listeproposition=listemots
       }else{
        listeproposition=listephrases
       }
       afficherproposition(listeproposition[i])
       
        })
    }
    
    
    
   afficherscore(score,i) 
  


}
lancerjeu()
    
