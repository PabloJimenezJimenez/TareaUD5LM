import { Question } from "./Question.js";
export class Quiz{
    indice=0;
    puntos=0;
    /**
     * 
     * @param {Question[]} questions 
     */
    constructor(questions){
        this.questions=questions;
    }

    /**
     * 
     * @returns {Question}
     */
    getQuestion(){
        return this.questions[this.indice];
    }

    isEnded(){
        return this.questions.length==this.indice;
    }
    comprobarRespuesta(answer){
        if(this.getQuestion().comprobarRespuesta(answer)==true){
            this.puntos+=20;
        }else{
            this.puntos-=10;
        }
        this.indice++;
    }

    aumentarIndice(){
        this.indice++;
        this.puntos-=10;
    }

}