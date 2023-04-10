import { preguntas } from "./data/questions.js";
import { Quiz } from "./clases/Quiz.js";
import { UI } from "./clases/UI.js";

const idTemp=document.getElementById('temp');
const comenzar=document.getElementById('comenzar');
const reglas= document.getElementById('reglas');
const quizID=document.getElementById('quiz');
const progreso=document.getElementById('progreso');
var intevalTiempo;
function main(){
    console.log("Funciona")
    const quiz= new Quiz(preguntas);
    const ui= new UI();
    idTemp.style="display: block;";
    quizID.style="display: block;";
    progreso.style="display: block;";
    saltarPreg(quiz,ui);
   
    
}

/**
 * 
 * @param {Quiz} quiz 
 * @param {UI} UI 
 */
function saltarPreg(quiz, UI){
    let tiemp=21;
    var tiempoRest=tiemp;
    intevalTiempo=setInterval(()=>{
        tiempoRest--;
        idTemp.innerHTML=tiempoRest+"s";
        console.log(tiempoRest)
        if(!quiz.isEnded()){
            UI.showQuestion(quiz.getQuestion().text);
            UI.showChoices(quiz.getQuestion().choices, (choice) =>{ 
                quiz.comprobarRespuesta(choice)
                reiniciarTemp(quiz,UI)
            });
    
            UI.showProgress(quiz.indice+1,preguntas.length)
        }else{
            detenerTemporizador();
            UI.pantallaFinal(quiz.puntos);
        }

        if(tiempoRest==0){
            quiz.aumentarIndice();
            if(!quiz.isEnded()){
                reiniciarTemp(quiz,UI)
            }else{
                detenerTemporizador();
                UI.pantallaFinal(quiz.puntos);
            }
        }
    },1000)
}
function detenerTemporizador() {
    clearInterval(intevalTiempo);
}

function reiniciarTemp(quiz,UI){
    detenerTemporizador();
    saltarPreg(quiz,UI);
}

comenzar.addEventListener('click', ()=>{
    reglas.style="display: none;";
    main();
})

