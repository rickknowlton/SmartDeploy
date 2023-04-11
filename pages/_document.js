import { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "../lib/gtag";

export default function Document() {
  return (
    <Html
      lang="en"
      className="uk-background-white dark:uk-background-gray-100 dark:uk-text-gray-20"
    >
      <Head>
        {/* Basic meta tags for SEO */}
        <title>SmartDeploy || Ready. Set SmartDeploy.</title>
        <meta name="description" content="Easily manage smart contracts on Soroban with our all-in-one platform for publishing, deploying, invoking, and upgrading contracts." />
        <meta name="keywords" content="smartdeploy, smart deploy, TENK, TENK DAO, stellar, stellar soroban, stellar xlm, xlm, smart contract management, soroban, smart contract deployment, user-friendly, secure platform, contract deployment, developers, tools, smart contracts, contract management, blockchain technology, DAO, decentralized finance, ethereum, cryptocurrency, NFT, tokenization, solidity, Ethereum development, smart contract security, blockchain solutions, DeFi solutions, decentralized applications, Web3, crypto assets, digital tokens, governance tokens" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

        {/* Open Graph meta tags */}
        <meta property="og:title" content="SmartDeploy || Ready. Set SmartDeploy." />
        <meta
          property="og:description"
          content="Easily manage smart contracts on Soroban with our all-in-one platform for publishing, deploying, invoking, and upgrading contracts."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smartdeploy.dev" />
        <meta
          property="og:image"
          content="https://smartdeploy.dev/images/demo.png"
        />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SmartDeploy || Ready. Set SmartDeploy." />
        <meta
          name="twitter:description"
          content="Easily manage smart contracts on Soroban with our all-in-one platform for publishing, deploying, invoking, and upgrading contracts."
        />
        <meta
          name="twitter:image"
          content="https://smartdeploy.dev/images/demo.png"
        />
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
