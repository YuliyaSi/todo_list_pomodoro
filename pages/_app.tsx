import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from "styled-components";
import {theme} from "../styles/theme";
import {useEffect, useState} from "react";

function MyApp({ Component, pageProps }: AppProps) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), [])
    if (!mounted) return null
  return (
      <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      </ThemeProvider>
  )
}

export default MyApp
