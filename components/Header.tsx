import style from './Header.module.scss';
import  Search  from './Search';
export default function Header(){
   console.log(style);
    return (
        <div className={style.header_section}>
           <div className={style.header_section__container}>
              <h1 className={style.header_section__container__title}>Search For a Specific Word</h1>
              <Search />
           </div>
        </div>
      )
};
