import React, {useState} from 'react';
import { fetchQuizQuestions } from './API';

//components
import QuestionCard from './components/QuestionCard';

//types
import { QuestionState ,Difficulty } from './API';

//styles
import { GlobalStyle, Wrapper } from './App.styles';

export type AnswerObject = {
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
    if(!gameOver ) {
      //get user answers
      const answer = e.currentTarget.value;

      //check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      
      //add score if answer is correct
      if(correct) setScore(prev => prev + 1);

      //save answers in ther array for user answers
      const answerObject = {
        question : questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers(prev => [...prev, answerObject]);
    }
  }

  //triggers when user clicks on next question
  const nextQuestion = () =>{
    //move on to the last question if not the last question
    const nextQuestion = number +1;

    if(nextQuestion === TOTAL_QUESTIONS){
      setGameOver(true)
    }else{
      setNumber(nextQuestion)
    }
  }

  return (
    <>
    <GlobalStyle />
    <Wrapper>
      <h1>REACT QUIZ</h1>
      {/* short circuit  */}
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button className='start' onClick={startQuiz}>Start</button>
      ): null}

       {!gameOver ?  <p className='score'>Score: {score}</p> : null}
       {loading && <p className='score'>Loading Questions...</p> } <br></br>
       { !loading && !gameOver && (
          <QuestionCard 
          questionNum={number + 1}
          totalQuestion={TOTAL_QUESTIONS}
          questions={questions[number].question}
          answers={questions[number].answers}
          userAnswer = {userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswers}
        />
       )}
      {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
              <button className='next' onClick={nextQuestion}>Next Question</button>
      ): null}
    </Wrapper>
    </>
  );
}

export default App;
