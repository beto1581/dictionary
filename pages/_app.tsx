import type { AppProps } from 'next/app' ;
import './../styles/global.scss'; 
import { Roboto, Libre_Baskerville } from 'next/font/google';
 
const roboto = Roboto({
  subsets: ['latin'],
  weight: '500'
})

const libre_baskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: '700'
})

 
export default function App({ Component, pageProps }: AppProps) {
  return(
  <>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        } 
        :root{
          --font-title: ${libre_baskerville.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}