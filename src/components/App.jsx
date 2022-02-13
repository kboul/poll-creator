import Questions from './Questions';
import AddNewQuestionButton from './AddNewQuestionButton';

export default function App() {
    return (
        <div className="container-fluid mt-4">
            <div className="col-md-9 mx-auto">
                <Questions />
                <AddNewQuestionButton />
            </div>
        </div>
    );
}
