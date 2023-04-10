import { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "../lib/gtag";

export default function Document() {
  return (
    <Html
      lang="en"
      className="uk-background-white dark:uk-background-gray-100 dark:uk-text-gray-20"
    >
      <Head>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
          }}
        />
        {/* CookieYes Banner */}        
        <script
          id="cookieyes"
          type="text/javascript"
          src="https://cdn-cookieyes.com/client_data/fa7b2cd4294b8224aa7a3226/script.js"
          strategy="beforeInteractive"
        ></script>
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
