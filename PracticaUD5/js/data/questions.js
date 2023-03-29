//En este archivo importo la clase Question y la clase data
import { Question } from "../clases/Question.js";
import { data } from './data.js'

//Creo un mapa que me va a servir para asignar a la clase Question los datos del objeto data
export const preguntas= data.map(question => new Question(question.question,question.answers, question.correct))