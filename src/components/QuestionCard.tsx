import React  from "react";

//types
import { AnswerObject } from "../App";


import {Wrapper, ButtonWrapper} from './QuestionCard.styles'

type Props = {
    questions :  string;
    answers : string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer : AnswerObject | undefined;
    questionNum : number;
    totalQuestion: number;
}

const QuestionCard: React.FC<Props> = ({
    questions,
    answers,
    callback,
    userAnswer,
    questionNum,
    totalQuestion,
}) => (
    <Wrapper>
        <p className="number">
            Question : {questionNum} / {totalQuestion}
        </p>
        <p  dangerouslySetInnerHTML={ {__html : questions} }/>
        <div>
            {answers.map(answer => (
                <ButtonWrapper
                key={answer}
                correct={userAnswer?.correctAnswer === answer}
                userClicked={userAnswer?.answer === answer}
              >
                    <button disabled={!!userAnswer } value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html: answer}} />
                    </button>
                </ButtonWrapper>
            ))}
        </div>
    </Wrapper>

);   
export default QuestionCard