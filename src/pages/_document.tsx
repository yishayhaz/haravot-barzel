import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="app">
      <Head>
        <link rel="icon" href="icon.png" />
      </Head>
      <body data-theme="light">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
