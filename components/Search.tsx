import styles from './Search.module.scss';
import { FaSearch } from "react-icons/fa";
export default function Search(){
    return (
    
        <form action="#" className={styles.search_form}>
            <input type="text" placeholder="Type a Word" className={styles.search_form__input}/>
            <button className={styles.search_form__button}><FaSearch/></button>
        </form> 
    );
}