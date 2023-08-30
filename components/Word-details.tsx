import style from "./Word-details.module.scss";
import { FaVolumeUp } from "react-icons/fa";
import { DictionaryProvider, useDictionaryContext } from './DictionaryContext';


export default function WordDetails() {
  const { definitions, loading } = useDictionaryContext();
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {definitions.map((entry, index) => (

        <div className={style.word_section} key={index}>
          <div className={style.word_section__title}>
            <span>{entry.word}</span>
            <div className={style.word_section__title__phonetic}>

              <pre>
                <code>{entry.phonetic} </code>
              </pre>
            </div>
            <div className={style.word_section__title__play}>
              <FaVolumeUp />
            </div>
          </div>

           
          <div className={style.word_section__meanings}>
            <p>meanings</p>
        {entry.meanings.map((meaning) => (
              <div className={style.word_section__meanings__item}>
                <span className={style.word_section__meanings__item__title}>
                  <strong>partOfSpeech:</strong> {meaning.partOfSpeech}
                </span>
                <div className={style.word_section__meanings__item__definitions}>
                  <span>
                    <strong>definition:</strong> {meaning.definitions[0].definition}
                  </span>
                  <span>
                    <strong>example:</strong> {meaning.definitions[0].example}
                  </span>
                  <span>
                    <strong>synonyms:</strong> {meaning.synonyms}
                  </span>
                  <span>
                    <strong>antonyms:</strong> {meaning.antonyms}
                  </span>
                </div>
              </div>
        ))}
          </div>
        </div>
      ))}
    </div>
  );
}
