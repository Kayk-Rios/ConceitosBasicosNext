import { ContadorProvider } from "@/components/data/context/ContadorContext";
import NavBar from "@/components/NavBar/NavBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContadorProvider>
        <NavBar/>
            <Component {...pageProps} />
  </ContadorProvider>
  )
  
  
}
