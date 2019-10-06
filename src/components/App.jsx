import React from 'react';
import Questions from './Questions';
import QuestionTemplate from './QuestionTemplate';
import AddNewQuestionBtn from './AddNewQuestionBtn';

const App = () => {
    return (
        <div className="container-fluid">
            <div className="col-md-6 offset-md-3">
                <QuestionTemplate />
                <AddNewQuestionBtn />
                <Questions />
            </div>
        </div>
    );
};

export default App;
