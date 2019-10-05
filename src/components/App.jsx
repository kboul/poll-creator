import React from 'react';
import Questions from './Questions';
import QuestionTemplate from './QuestionTemplate';

const App = () => {
    return (
        <div className="container-fluid mt-4">
            <div className="col-md-6 offset-md-3">
                <QuestionTemplate />
                <Questions />
            </div>
        </div>
    );
};

export default App;
