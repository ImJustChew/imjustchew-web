import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@mui/material'
import DialogProvider from '../hooks/useDialog'

function MyApp({ Component, pageProps }: AppProps) {
  
  const theme = createTheme({
    typography:{  
      fontFamily: "'Inter', sans-serif",
    }
  })

  return <ThemeProvider theme={theme}>
    <DialogProvider>
      <Component {...pageProps} />
    </DialogProvider>
  </ThemeProvider>
}

export default MyApp
