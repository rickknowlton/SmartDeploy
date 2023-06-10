import "../styles/globals.css";
import "uikit/dist/css/uikit.min.css";
import "../assets/js/app-head.js";
// import "../assets/js/uikit-components.js";
import "../assets/js/data-attr-helper.js";
import "../assets/js/anime-helper.js";
import "../assets/js/swiper-helper.js";
import "../assets/js/typed-helper.js";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../assets/css/uikit.min.css";
import "../assets/css/theme/main.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
