import WordDetails from './Word-details';
import './../styles/main-section.scss';
export default function Main(){
    return (
        <main className="main-section">
            <div className="main-section__content">
            <WordDetails></WordDetails>
            </div>
            <div className="main-section__sidebar">

            </div>
        </main>
    )
}