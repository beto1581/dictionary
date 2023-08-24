import style from "./Word-details.module.scss";
export default function WordDetails() {
  return (
    <div className={style.word_section}>
      <div className={style.word_section__title}>Hello</div>
      <div className={style.word_section__phonetic}>
        <pre>
          <code>həˈləʊ</code>
        </pre>
      </div>
      <div className={style.word_section__origin}>
        <p>origin</p>
        <span>
          early 19th century: variant of earlier hollo ; related to holla.
        </span>
      </div>
      <div className={style.word_section__meanings}>
        <p>meanings</p>
        <div className={style.word_section__meanings__item}>
          <span className={style.word_section__meanings__item__title}>
            <strong>partOfSpeech:</strong> exclamation
          </span>
          <div className={style.word_section__meanings__item__definitions}>
            <span>
              <strong>definition:</strong> '-- --- --'
            </span>
            <span>
              <strong>example:</strong> '--'
            </span>
            <span>
              <strong>synonyms:</strong> '--'
            </span>
            <span>
              <strong>antonyms:</strong> '--'
            </span>
          </div>
        </div>
        <div className={style.word_section__meanings__item}>
          <span className={style.word_section__meanings__item__title}>
            <strong>partOfSpeech:</strong> exclamation
          </span>
          <div className={style.word_section__meanings__item__definitions}>
            <span>
              <strong>definition:</strong> '-- --- --'
            </span>
            <span>
              <strong>example:</strong> '--'
            </span>
            <span>
              <strong>synonyms:</strong> '--'
            </span>
            <span>
              <strong>antonyms:</strong> '--'
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
