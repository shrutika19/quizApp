import React, {useState} from 'react';
import { fetchQuizQuestions } from './API';

//components
import QuestionCard from './components/QuestionCard';

//types
import { QuestionState ,Difficulty } from './API';

type AnswerObject = {
  question: string;
  answer: string;
  correct : boolean;
  correctAnswer : string;
}

const TOTAL_QUESTIONS = 10;

const App = () =>  {

  const [loading, setLoading] = useState(false);
  const [questions, setQueestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(questions);
  

  //calls when qui start
  const startQuiz =  async () => {
      setLoading(true);
      setGameOver(false);

      const newQuestions = await fetchQuizQuestions(
        TOTAL_QUESTIONS,
        Difficulty.EASY
      )

      setQueestions(newQuestions);
      setScore(0);
      setUserAnswers([]);
      setNumber(0);
      setLoading(false);
  }

  //triggers when user selects an answwer 
  //send to the questionCard as a prop
  const checkAnswers = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  //triggers when user clicks on next question
  const nextQuestion = () =>{

  }

  return (
    <div className="App">
      <h1>REACT QUIZ</h1>
      <button className='start' onClick={startQuiz}>Start</button>
      <p className='score'>Score:</p>
      <p>Loading Questions...</p>
      {/* <QuestionCard 
        questionNum={number + 1}
        totalQuestion={TOTAL_QUESTIONS}
        questions={questions[number].questions}
        answers={questions[number].answers}
        userAnswer = {userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswers}
      /> */}
      <button className='next' onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
