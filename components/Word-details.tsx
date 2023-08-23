import style from './Word-details.module.scss'
export default function WordDetails() {
    return (
        <div className={style.word_section}>
            <div className={style.word_section__title}>Hello</div>
            <div className={style.word_section__phonetic}>
                <pre><code>həˈləʊ</code></pre>
            </div>
            <div className={style.word_section__origin}>
                <p>origin</p>
                <span>early 19th century: variant of earlier hollo ; related to holla.</span>
            </div>
            <div className={style.word_section__meanings}>
                <p>meanings</p>
                <div className={style.word_section__meaning__item}>
                <span>partOfSpeech: exclamation</span>
                <div className={style.word_section__meaning__item__definitions}>
                    <span>definition: '-- --- --'</span>
                    <span>example: '--'</span>
                    <span>synonyms: '--'</span>
                    <span>antonyms: '--'</span>
                </div>
                </div>
            </div>
        </div>
    );
}