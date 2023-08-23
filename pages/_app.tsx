import type { AppProps } from 'next/app' ;
import './../styles/global.scss'; 
import { Roboto } from 'next/font/google';
 
const roboto = Roboto({
  subsets: ['latin'],
  weight: '500'
})

 
export default function App({ Component, pageProps }: AppProps) {
  return(
  <>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        } 
      `}</style>
      <Component {...pageProps} />
    </>
  )
}