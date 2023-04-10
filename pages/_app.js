import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Script from 'next/script';

import "../assets/js/app-head.js";
import "../assets/js/uikit-components.js";
import "../assets/js/data-attr-helper.js";
import "../assets/js/anime-helper.js";
import "../assets/js/swiper-helper.js";
import "../assets/js/typed-helper.js";
import * as gtag from "../lib/gtag";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../assets/css/uikit.min.css";
import "../assets/css/theme/main.css";

function App({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);
  const [firstRender, setFirstRender] = React.useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  });

  React.useEffect(() => {
    setFirstRender(true);
  });

  if (!firstRender) {
    return <></>;
  }
  return (
    <>
      <React.Fragment>
        <Component {...pageProps} />
      </React.Fragment>
    </>
  );
}
export default App;
