export class UI {
    constructor(){}

    /**
     * 
     * @param {String} text 
     */
    showQuestion(text){
        const pregunta= document.getElementById('pregunta');
        pregunta.innerHTML=text;
    }

    /**
     * 
     * @param {String[]} choices 
     */
    showChoices(choices, callback){
        const respuestas= document.getElementById('respuesta')
        respuestas.innerHTML='';
        for(let i=0;i<choices.length;i++){
            const botones=document.createElement('button');
            botones.innerHTML=choices[i];
            botones.addEventListener('click', () => {
                callback(choices[i])
            })
            
            respuestas.appendChild(botones);

        }
    }

    /**
     * 
     * @param {Number} puntos 
     */
    pantallaFinal(puntos){
        const finalPicture=`<h1>Puntos<h1><h2> ${puntos}<h2>`;
        const elemenQuiz= document.getElementById('pricipal');
        elemenQuiz.innerHTML=finalPicture;
    }

    /**
     * 
     * @param {number} preguntaActual 
     * @param {number} total 
     */
    showProgress(preguntaActual, total){
        const progreso= document.getElementById('progreso');
        progreso.innerHTML=`${preguntaActual} de ${total}`;
    }
}