import Header from "../components/Header";
import Main from "../components/Main";
import { Roboto } from 'next/font/google';
import { DictionaryProvider, useDictionaryContext } from './../components/DictionaryContext';
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
export default function Page() {
    return <div>
      <DictionaryProvider>
        <Header/> 
        <Main/> 
      </DictionaryProvider>
    </div>
  }