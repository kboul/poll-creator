import React from 'react';
import Questions from './Questions';
import QuestionTemplate from './QuestionTemplate';
import AddNewQuestionBtn from './AddNewQuestionBtn';

const App = () => {
    return (
        <div className="container-fluid">
            <div className="col-md-8 offset-md-2">
                <QuestionTemplate />
                <AddNewQuestionBtn />
                <Questions />
            </div>
        </div>
    );
};

export default App;
