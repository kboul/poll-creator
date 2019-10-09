import React from 'react';
import Questions from './Questions';
import AddNewQuestionButton from './AddNewQuestionButton';

const App = () => {
    return (
        <div className="container-fluid mt-4">
            <div className="col-md-9 mx-auto">
                <AddNewQuestionButton />
                <Questions />
            </div>
        </div>
    );
};

export default App;
