import Header from "../components/Header";
import Main from "../components/Main";
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
export default function Page() {
    return <div>
      <Header/>
      <Main/>
    </div>
  }