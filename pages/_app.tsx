import { RecoilRoot, RecoilEnv } from 'recoil'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;
  return (  
    <RecoilRoot>  
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp