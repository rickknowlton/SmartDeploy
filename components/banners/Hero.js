const Hero = () => {
  return (
    <>
      <div
        id="hero"
        className="uni-hero uk-section uk-section-xlarge uk-padding-remove-bottom uk-panel"
      >
        <div
          className="uk-position-top uk-position-z-index-negative uk-overflow-hidden uk-blend-overlay"
          data-uk-height-viewport=""
        >
          <img
            className="uk-position-top-left uk-position-fixed uk-blur-large object-x"
            style={{ left: "-4%", top: "-4%" }}
            width="500"
            src="images/gradient-circle.svg"
            alt="Circle"
          />
          <img
            className="uk-position-bottom-right uk-position-fixed uk-blur-large object-x"
            style={{ right: "-4%", bottom: "-4%" }}
            width="500"
            src="images/gradient-circle.svg"
            alt="Circle"
          />
        </div>
        <div
          className="uk-position-top uk-position-z-index-negative"
          data-uk-height-viewport=""
        >
          <div
            className="uk-position-cover uk-background-cover uk-opacity-10 dark:uk-hidden"
            style={{ backgroundImage: 'url("images/gradient-01.png")' }}
            data-uk-img
          ></div>
          <div
            className="uk-position-cover uk-background-cover uk-opacity-20 uk-hidden dark:uk-visible"
            style={{ backgroundImage: 'url("images/gradient-01.png")' }}
            data-uk-img
          ></div>
        </div>
        <div className="uk-panel uk-position-z-index">
          <div className="uk-container">
            <div className="uk-panel">
              <div
                className="uk-grid uk-grid-2xlarge uk-flex-middle uk-flex-between"
                data-uk-grid
                data-uk-height-viewport="offset-top: true; offset-bottom: 20;"
              >
                <div className="uk-width-5-12@m">
                  <div
                    className="uk-panel uk-position-z-index uk-text-center uk-text-left@m"
                    data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
                  >
                    <img
                      className="uk-position-top-left object-x"
                      width="14"
                      src="images/objects/violet-ball-blur.png"
                      alt="object"
                      style={{ top: "-20%", left: "50%" }}
                      data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"
                    />
                    <img
                      className="uk-position-left object-x"
                      width="16"
                      src="images/objects/circle-01.png"
                      alt="object"
                      style={{ top: "16%", left: "-16%" }}
                      data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 420;"
                    />
                    <img
                      className="uk-position-bottom-left object-x"
                      width="24"
                      src="images/objects/violet-ball-blur.png"
                      alt="object"
                      style={{ bottom: "-26%", left: "16%" }}
                      data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 440;"
                    />
                    <div className="brand-item">
                      <svg
                        id="a"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1271.97 232.87"
                        className="uk-width-xsmall uk-svg brand-svg"
                      >
                        <path
                          class="b"
                          d="m1164.0938,179.124v-22.7422c3.0186.8047,7.6475,1.6094,12.6787,1.6094,10.0635,0,14.6924-4.8301,19.7246-18.5156h-6.6416l-41.2598-99.4248h35.0205l25.5605,68.4297h.4023l23.1455-68.4297h29.3838l-36.0264,101.8398c-10.0625,28.5791-22.3398,39.8496-42.8691,39.8496-10.0625,0-16.5029-1.6094-19.1191-2.6162Z"
                        />
                        <path
                          class="b"
                          d="m.4023,93.9902h29.3848c0,14.2891,5.8364,23.5479,27.9756,23.5479,22.3403,0,27.3716-8.0508,27.3716-16.5039,0-5.6357-2.415-9.2578-7.6479-11.0693-5.8364-2.0127-19.5225-4.0254-30.5918-5.6357-13.082-2.0127-26.3657-4.6289-34.0137-9.6602C4.4277,69.2344,0,59.9766,0,47.2969,0,22.3398,19.5225,5.0317,57.7627,5.0317c42.064,0,55.75,17.5093,55.75,47.2964h-29.1831c0-15.0947-7.8496-23.3467-25.9634-23.3467-17.9121,0-25.5601,6.6416-25.5601,15.498,0,6.4404,1.811,10.0625,6.4404,12.0752,5.0312,2.2139,18.9185,4.4277,30.1895,6.2393,14.8936,2.415,26.1641,4.8301,34.0132,9.0566,9.4595,5.0322,14.4912,14.4912,14.4912,26.9697,0,22.541-12.6797,42.668-59.9766,42.668C12.4785,141.4883.4023,118.3428.4023,93.9902Z"
                        />
                        <path
                          class="b"
                          d="m132.0312,40.0508h30.5923l-1.0063,25.7617h.2012c4.6289-17.1074,15.8999-27.3711,34.0137-27.3711,19.1196,0,31.397,9.8613,33.6108,25.9629h.2012c4.0254-16.1016,14.8936-25.9629,34.0137-25.9629,21.7363,0,34.0132,13.6855,34.0132,37.0322v64.002h-30.5918v-56.958c0-11.6729-6.0381-18.7168-16.5034-18.7168-12.0762,0-20.5293,9.2578-20.5293,27.5723v48.1025h-30.5918v-56.958c0-11.6729-6.0381-18.7168-16.5034-18.7168-11.875,0-20.3276,9.459-20.3276,28.1768v47.498h-30.5923V40.0508Z"
                        />
                        <path
                          class="b"
                          d="m310.7583,110.8955c0-16.3018,11.6733-28.1768,38.0386-28.1768h32.4038v-6.6416c0-12.0752-6.8433-16.9062-20.9316-16.9062-11.4722,0-18.1138,4.8311-18.1138,12.8809,0,.6045,0,2.2139.2012,4.2266h-28.1768c-.2012-1.6094-.4023-3.8232-.4023-5.8359,0-20.127,17.7109-32.001,47.9004-32.001,31.5986,0,50.1147,14.0879,50.1147,40.6553v60.3789h-30.5918c.6035-5.0322,1.4087-14.0889,1.4087-20.127h-.2012c-3.019,14.0889-14.29,21.7373-32.4033,21.7373-23.1455,0-39.2466-10.0635-39.2466-30.1904Zm70.4424-9.6602v-2.0127h-29.5859c-8.252,0-13.2832,3.8242-13.2832,9.459,0,7.6484,6.6416,11.6738,17.7109,11.6738,15.8999,0,25.1582-7.0439,25.1582-19.1201Z"
                        />
                        <path
                          class="b"
                          d="m426.083,40.0508h30.5923l-1.2075,28.3789h.4023c4.2266-18.9189,14.8936-29.9883,34.416-29.9883,20.3276,0,32.2021,13.082,32.2021,38.8438,0,5.6348-.604,14.4912-1.0063,19.7236h-27.7744c.4028-4.8301.604-9.8623.604-12.8809,0-14.4912-5.8369-20.3271-15.4976-20.3271-13.082,0-22.1387,10.666-22.1387,32.8057v42.8691h-30.5923V40.0508Z"
                        />
                        <path
                          class="b"
                          d="m544.0249,105.2607v-41.46h-14.6924v-23.75h11.8745c4.6294,0,6.2393-2.6162,6.8433-8.6543l1.4087-13.8867h25.1582v22.541h31.7998v23.75h-31.7998v39.8496c0,10.2646,4.8301,13.4844,16.9062,13.4844,4.2266,0,10.4658-.6035,13.8867-1.4082v23.1445c-2.6162.6045-11.0693,2.2148-19.3213,2.2148-30.9946,0-42.064-13.6865-42.064-35.8252Z"
                        />
                        <path
                          class="b"
                          d="m620.7061,7.0444h53.335c42.2656,0,68.4297,22.5415,68.4297,66.0142,0,43.6738-24.7559,66.417-64.2031,66.417h-57.5615V7.0444Zm57.1592,106.4683c18.3145,0,31.7998-12.4785,31.7998-40.4541,0-28.3779-14.29-40.0518-33.8125-40.0518h-22.1387v80.5059h24.1514Z"
                        />
                        <path
                          class="b"
                          d="m855.7842,95.5996h-70.6436c1.4092,16.3027,9.6611,23.3467,23.3467,23.3467,11.874,0,19.5225-4.2266,20.3271-13.8867h26.9697c-.6035,22.7422-19.5225,36.0264-47.9004,36.0264-33.0078,0-53.5361-18.7178-53.5361-50.3164,0-32.8057,20.5283-52.3281,54.1396-52.3281,27.7744,0,47.2969,15.8994,47.2969,48.5039v8.6543Zm-26.9697-17.9121c0-11.2705-7.6475-17.1074-20.3271-17.1074-12.8809,0-20.126,5.6357-22.542,18.7178h42.8691v-1.6104Z"
                        />
                        <path
                          class="b"
                          d="m869.6748,40.0508h30.5918l-.6035,20.3281h.2012c3.8242-13.6855,16.5039-21.9375,33.6104-21.9375,27.7744,0,45.8887,19.7236,45.8887,49.1084,0,32.2021-18.1143,53.5361-46.0898,53.5361-18.1133,0-29.3838-7.4473-33.8115-19.5234h-.2012c.4023,6.6426,1.0059,16.5039,1.0059,20.127v37.6357h-30.5918V40.0508Zm79.2979,48.7061c0-16.1006-9.2588-26.9688-23.1455-26.9688-15.2959,0-25.5605,11.0693-25.5605,27.7744v4.4277c0,14.2891,10.2646,23.749,25.7617,23.749,13.6855,0,22.9443-11.6738,22.9443-28.9824Z"
                        />
                        <path
                          class="b"
                          d="m993.2539,0h30.5918v139.4756h-30.5918V0Z"
                        />
                        <path
                          class="b"
                          d="m1134.4345,36.2192c-3.7358,13.557-10.9358,29.4002-21.1602,45.3216-16.0884,25.0575-35.5421,43.8877-51.0324,51.0123,3.4344,2.0766,7.1314,3.7589,11.013,5.0127,17.5138-5.334,39.2102-30.2033,53.5991-63.5377,1.8438-4.2708,3.4843-8.5127,4.9467-12.7001-2.2204,11.0424-6.028,23.218-11.4061,35.6789-7.3918,17.1246-16.5508,32.0022-25.8667,43.0019,3.6236-.2926,7.2821-.9384,10.9275-1.9734,28.277-8.0283,45.1009-36.0226,37.5748-62.5307-1.905-6.7097-5.1935-12.6769-9.4932-17.7225.8011-7.2967,1.3701-15.479.8974-21.5629Z"
                        />
                        <path
                          class="b"
                          d="m1078.2036,42.0502c-28.277,8.0283-45.0994,36.0235-37.5743,62.5279.2226.7839.4683,1.5561.7281,2.319,1.3936,2.2408,3.1975,4.0181,5.4285,5.2551,16.239,9.0046,48.7539-13.8381,72.6271-51.0166,2.2844-3.5579,4.3848-7.1119,6.3401-10.6469-12.7599-9.6397-30.2835-13.3406-47.5495-8.4385Zm66.971-20.1523c-8.6433,4.8007-9.7756,4.6432-16.2046-2.2426,4.7813,8.0219,4.5787,9.0988-2.9207,15.4218,8.6432-4.8007,9.7739-4.644,16.2029,2.2419-4.781-8.0208-4.5759-9.0984,2.9224-15.421Z"
                        />
                      </svg>
                    </div>
                    <p className="uk-text-xlarge uk-width-xlarge@m uk-text-muted">
                      Easily manage smart contracts on Soroban with our
                      all-in-one platform for publishing, deploying, invoking,
                      and upgrading contracts.
                    </p>
                    <a
                      href="https://launch.smartdeploy.dev/"
                      className="uk-button uk-button-medium@m uk-button-gradient uk-margin-small-top"
                    >
                      <span>Deploy Now</span>
                      <i className="uk-icon-small unicon-arrow-right uk-text-bold"></i>
                    </a>
                  </div>
                </div>
                <div className="uk-width-6-12@m uk-flex-center">
                  <div
                    className="uk-panel"
                    data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;"
                  >
                    <img
                      className="uk-position-left uk-text-primary"
                      width="44"
                      src="images/objects/orange-ball-blur.png"
                      alt="object"
                      style={{ top: "75%", left: "-20%" }}
                      data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 460;"
                    />
                    <img
                      className="uk-position-right"
                      width="28"
                      src="images/objects/x.png"
                      alt="object"
                      style={{ top: "-4%", right: "16%" }}
                      data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 480;"
                    />
                    <img
                      className="uk-position-right uk-opacity-10"
                      width="300"
                      src="images/blob-dashed.svg"
                      alt="Blog dashed"
                      style={{ top: "-10%", right: "16%", fill: "transparent" }}
                    />
                    <svg
                      style={{ top: "-20%" }}
                      className="uk-position-right uk-opacity-30"
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#F796FF"
                        d="M47.5,-67.2C55.9,-59.3,53.2,-37.9,56.7,-20.1C60.2,-2.3,69.9,11.8,70.8,27.3C71.7,42.9,63.8,59.9,50.6,64.4C37.3,68.9,18.6,60.8,-0.3,61.2C-19.3,61.6,-38.6,70.7,-53.5,66.7C-68.4,62.8,-78.9,45.9,-78.8,29.5C-78.7,13.2,-67.9,-2.7,-59.8,-16.8C-51.6,-31,-46,-43.3,-36.5,-50.9C-27,-58.4,-13.5,-61.1,3,-65.2C19.6,-69.4,39.1,-75.1,47.5,-67.2Z"
                        transform="translate(100 100)"
                      ></path>
                    </svg>
                    <div
                      className="uk-grid uk-grid-xsmall uk-child-width"
                      data-uk-grid="masonry: false;"
                    >
                      <div>
                        <div className="uni-item uk-card uk-overflow-hidden uk-radius uk-radius-large@m uk-visible-toggle uk-transition-toggle">
                          <div className="uni-item-featured-image uk-panel uk-flex-middle uk-flex-center">
                            <div className="uk-panel uk-image-middle">
                              <img
                                src="images/sd-rocket.webp"
                                alt="Artwork"
                                className="uk-radius-small uk-radius-large@m"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a
                      className="uni-circle-text uk-background-white dark:uk-background-gray-80 uk-box-shadow-large uk-visible@m"
                      href="https://launch.smartdeploy.dev/"
                    >
                      <svg
                        className="uni-circle-text-path uk-text-secondary uni-animation-spin"
                        viewBox="0 0 100 100"
                        width="120"
                        height="120"
                      >
                        <defs>
                          <path
                            id="circle"
                            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                          ></path>
                        </defs>
                        <text style={{ fontSize: "10px" }}>
                          <textPath xlinkHref="#circle">
                            ready • set • deploy • ready • set • deploy •
                          </textPath>
                        </text>
                      </svg>
                      <i className="uk-position-center uk-text-secondary uk-icon-medium@m unicon-arrow-up-right uk-text-bold"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
