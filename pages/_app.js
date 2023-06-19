import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import createEmotionCache from '@/utility/createEmotionCache';
import Theme from '@/styles/theme/Theme';
import '@/styles/globals.css';
import { Roboto } from 'next/font/google'
const clientSideEmotionCache = createEmotionCache();

const roboto = Roboto({
  weight: '500',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function App({ Component, emotionCache = clientSideEmotionCache, pageProps }) {
  return (
    <main className={roboto.className}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={Theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </main>
  )
}
