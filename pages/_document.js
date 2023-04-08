import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      lang="en"
      className="uk-background-white dark:uk-background-gray-100 dark:uk-text-gray-20"
    >
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link rel="favicon" href="/favicon.ico" />
        <title>SmartDeploy || Ready. Set. SmartDeploy.</title>
      </Head>
      <body className="uni-body">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
