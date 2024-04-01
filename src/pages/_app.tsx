import "@/styles/globals.css";
import "@/styles/styles.css";
import type { AppProps } from "next/app";
import { PagesProgressBar as ProgressBar } from "next-nprogress-bar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />;
      <ProgressBar
        height="4px"
        color="#e1e0e0"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
}
