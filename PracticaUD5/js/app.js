import { preguntas } from "./data/questions.js";
import { Quiz } from "./clases/Quiz.js";
import { UI } from "./clases/UI.js";



function main(){
    console.log("Funciona")
    const quiz= new Quiz(preguntas);
    const ui= new UI();
    saltarPreg(quiz,ui);
    
}

/**
 * 
 * @param {Quiz} quiz 
 * @param {UI} UI 
 */
function saltarPreg(quiz, UI){
    if(!quiz.isEnded()){
        UI.showQuestion(quiz.getQuestion().text);
        UI.showChoices(quiz.getQuestion().choices, (choice) =>{ 
            quiz.comprobarRespuesta(choice)
            saltarPreg(quiz,UI);
        });

        UI.showProgress(quiz.indice+1,preguntas.length)
    }else{
        UI.pantallaFinal(quiz.puntos);
    }
    
}

main();
