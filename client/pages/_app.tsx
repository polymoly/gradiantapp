import { AppProps } from "next/app";
import "../globalStyles";

function Main({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default Main;
