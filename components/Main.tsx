import WordDetails from './Word-details';
import style from './Main.module.scss'; 
export default function Main() {
    return (
        <main className={style.main_section}>
            <div className={style.main_section__content}> 
                    <WordDetails></WordDetails> 
            </div>
            <div className={style.main_section__sidebar}>

            </div>
        </main>
    )
}