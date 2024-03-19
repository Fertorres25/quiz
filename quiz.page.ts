import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {
  questions = [
    {
      text: '¿Cuanto da la suma de 20 y 23?',
      answers: ['81', '40', '43'],
      correctAnswer: '43',
      selectedAnswer: null
    },
    {
      text: '¿Cuanto da la suma de 60 y 12?',
      answers: ['12', '54', '72'],
      correctAnswer: '72',
      selectedAnswer: null
    },
    {
      text: '¿Cuanto da la suma de 299 y 1?',
      answers: ['456', '20', '300'],
      correctAnswer: '300',
      selectedAnswer: null
    },
    {
      text: '¿Cuanto da la suma de 87 y 675?',
      answers: ['762', '768', '465'],
      correctAnswer: '762',
      selectedAnswer: null
    },
    {
      text: '¿Cuanto da la suma de 987 y 293?',
      answers: ['1280', '965', '978'],
      correctAnswer: '1280',
      selectedAnswer: null
    },
    {
      text: '¿Cuanto da la suma de 567 y 823?',
      answers: ['1390', '1340', '943'],
      correctAnswer: '1390',
      selectedAnswer: null
    },
    {
      text: '¿Cuanto da la suma de 198 y 765?',
      answers: ['781', '963', '993'],
      correctAnswer: 'Bulbasaur',
      selectedAnswer: null
    },
    {
      text: '¿Cuanto da la suma de 546 y 923?',
      answers: ['861', '489', '1469'],
      correctAnswer: 'Charizard',
      selectedAnswer: null
    },
    {
      text: '¿Cuanto da la suma de 345 y 123?',
      answers: ['381', '468', '143'],
      correctAnswer: 'Haunter ',
      selectedAnswer: null
    },
    {
      text: '¿Cuanto da la suma de 222 y 222?',
      answers: ['443', '444', '345'],
      correctAnswer: 'Eevee',
      selectedAnswer: null
    }
  ];
  currentIndex = 0; // Índice de la pregunta actual
  correctAnswers = 0;
  showScore = false;
  constructor() { }

  ngOnInit() {
  }

  nextQuestion() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
    }
  }

  previousQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  checkAnswers() {
    this.correctAnswers = 0;
    this.questions.forEach(question => {
      if (question.selectedAnswer === question.correctAnswer) {
        this.correctAnswers++;
      }
    });
    this.showScore = true;
  }

  resetQuiz() {
    this.correctAnswers = 0;
    this.currentIndex = 0;
    this.questions.forEach(question => {
      question.selectedAnswer = null;
    });
    this.showScore = false;
  }

}
