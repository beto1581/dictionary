export default function WordDetails() {
    return (
        <div className="word">
            <div className="word__title">Hello</div>
            <div className="word__phonetic">
                <pre><code>həˈləʊ</code></pre>
            </div>
            <div className="word__origin">
                <p>origin</p>
                <span>early 19th century: variant of earlier hollo ; related to holla.</span>
            </div>
            <div className="word__meanings">
                <p>meanings</p>
                <div className="word__meaning__item">
                <span>partOfSpeech: exclamation</span>
                <div className="word__meaning__item__definitions">
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