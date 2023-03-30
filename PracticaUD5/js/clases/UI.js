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
            botones.className="boton"
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
        if(puntos>0){
            const finalPicture=`
            <div class="intento">
                <a href="index.html">Inicio</a>
            </div>
            <div id="titulo"><h1>RESULTADO FINAL</h1></div>
            <div id="puntos"><h2>PUNTOS: ${puntos}</h2></div>
            <div class="intento">
                <a href="quiz.html">Reiniciar</a>
            </div>`;
            const elemenQuiz= document.getElementById('pricipal');
            elemenQuiz.innerHTML=finalPicture;
        }else{
            const finalPicture=`
            <div class="intento">
                <a href="index.html">Inicio</a>
            </div>
            <div id="titulo"><h1>RESULTADO FINAL</h1></div>
            <div id="puntos"><h2>LA PROXIMA VEZ IRA MEJOR =)</h2></div>
            <div class="intento">
                <a href="quiz.html">Reiniciar</a>
            </div>`;
            const elemenQuiz= document.getElementById('pricipal');
            elemenQuiz.innerHTML=finalPicture;
        }
        
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