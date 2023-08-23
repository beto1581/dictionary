import './../styles/Header.scss';
import  Search  from './Search';
export default function Header(){
    return (
        <div className='header-section'>
           <div className='header-section__container'>
              <h1 className='header-section__container__title'>Search For a Specific Word</h1>
              <Search />
           </div>
        </div>
      )
};
