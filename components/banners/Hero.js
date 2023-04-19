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
                        <text
                          transform="translate(1151.61 166.85)"
                          font-family="RocGrotesk-Bold, 'Roc Grotesk'"
                          font-size="201.27"
                          font-weight="700"
                        >
                          <tspan x="0" y="0">
                            y
                          </tspan>
                        </text>
                        <text
                          transform="translate(0 166.85)"
                          font-family="RocGrotesk-Bold, 'Roc Grotesk'"
                          font-size="201.27"
                          font-weight="700"
                        >
                          <tspan x="0" y="0">
                            SmartDepl
                          </tspan>
                        </text>
                        <path d="m1140.87,63.6c-3.74,13.56-10.94,29.4-21.16,45.32-16.09,25.06-35.54,43.89-51.03,51.01,3.43,2.08,7.13,3.76,11.01,5.01,17.51-5.33,39.21-30.2,53.6-63.54,1.84-4.27,3.48-8.51,4.95-12.7-2.22,11.04-6.03,23.22-11.41,35.68-7.39,17.12-16.55,32-25.87,43,3.62-.29,7.28-.94,10.93-1.97,28.28-8.03,45.1-36.02,37.57-62.53-1.91-6.71-5.19-12.68-9.49-17.72.8-7.3,1.37-15.48.9-21.56Z" />
                        <path d="m1084.64,69.43c-28.28,8.03-45.1,36.02-37.57,62.53.22.78.47,1.56.73,2.32,1.39,2.24,3.2,4.02,5.43,5.26,16.24,9,48.75-13.84,72.63-51.02,2.28-3.56,4.38-7.11,6.34-10.65-12.76-9.64-30.28-13.34-47.55-8.44Zm66.97-20.15c-8.64,4.8-9.78,4.64-16.2-2.24,4.78,8.02,4.58,9.1-2.92,15.42,8.64-4.8,9.77-4.64,16.2,2.24-4.78-8.02-4.58-9.1,2.92-15.42Z" />
                      </svg>
                    </div>
                    <p className="uk-text-xlarge uk-width-xlarge@m uk-text-muted">
                      Easily manage smart contracts on Soroban with our
                      all-in-one platform for publishing, deploying, invoking,
                      and upgrading contracts.
                    </p>
                    <a
                      href="https://github.com/TENK-DAO/smart-deploy"
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
                                src="images/sd-rocket.png"
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
                      href="https://github.com/TENK-DAO/smart-deploy"
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
