//Creo una clase Question
export class Question{

    /**
     * DOCUMENTACION tipos de dato constructor
     * @param {string} text 
     * @param {string[]} choices 
     * @param {string} answer 
     */
    constructor(text,choices,answer){
        this.text=text;
        this.choices=choices;
        this.answer=answer;
    }

    /**
     * 
     * @param {String} choice -Es la respuesta que ha elegido el usuario 
     * @returns {boolean}
     */
    comprobarRespuesta(choice){
        return this.answer==choice;
    }
}