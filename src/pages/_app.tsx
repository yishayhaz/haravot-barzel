import "@/styles/root.scss";
import type { AppProps } from "next/app";
import { Open_Sans } from "next/font/google";
import Head from "next/head";

const OpenSans = Open_Sans({
  subsets: [],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>פרויקט הנצחה - חרבות ברזל</title>
      </Head>
      <main className={OpenSans.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
