import React  from "react";

type Props = {
    questions :  string;
    answers : string[];
    callback: any;
    userAnswer : any;
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
    <div>
        <p className="number">
            Question : {questionNum} / {totalQuestion}
        </p>
        <p  dangerouslySetInnerHTML={ {__html : questions} }/>
        <div>
            {answers.map(answer => (
                <div>
                    <button disabled={userAnswer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html: answer}} />
                    </button>
                </div>
            ))}
        </div>
    </div>

);   
export default QuestionCard