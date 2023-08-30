import styles from './Search.module.scss';
import { FaSearch } from "react-icons/fa";
import { DictionaryProvider, useDictionaryContext } from './DictionaryContext';
import { useState } from 'react';
export default function Search(){
    const { fetchDefinitions } = useDictionaryContext();
    const [searchWord, setSearchWord] = useState('');
  
    const handleSearch = () => {
      if (searchWord) {
        fetchDefinitions(searchWord);
      }
    };
    return (
    
        <form action="#" className={styles.search_form}>
            <input type="text" placeholder="Type a Word" className={styles.search_form__input} onChange={(e) => setSearchWord(e.target.value)}/>
            <button className={styles.search_form__button} onClick={handleSearch}><FaSearch/></button>
        </form> 
    );
}