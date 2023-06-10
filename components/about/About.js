import Link from "next/link";
const About = () => {
  return (
    <div
      id="about"
      className="uni-about uk-section uk-section-xlarge@m uk-panel"
    >
      <div className="uk-container">
        <div className="uk-panel">
          <div
            className="uk-grid uk-grid-medium uk-grid-2xlarge@m uk-child-width-1-2@m uk-flex-middle"
            data-uk-grid=""
          >
            <div>
              <div className="uk-panel uk-radius-large uk-overflow-hidden">
                <canvas width="560" height="860"></canvas>
                <img
                  className="uk-position-right uk-opacity-10"
                  width="300"
                  src="images/blob-dashed.svg"
                  alt="Blog dashed"
                  style={{
                    maxWidth: "300px",
                    maxHeight: "300px",
                    left: "10%",
                    top: "40%",
                    fill: "transparent",
                  }}
                />
                <svg
                  className="uk-position-right uk-opacity-30"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    top: "25%",
                    left: "0%",
                    maxWidth: "600px",
                    maxHeight: "600px",
                  }}
                >
                  <path
                    fill="#F796FF"
                    d="M47.5,-67.2C55.9,-59.3,53.2,-37.9,56.7,-20.1C60.2,-2.3,69.9,11.8,70.8,27.3C71.7,42.9,63.8,59.9,50.6,64.4C37.3,68.9,18.6,60.8,-0.3,61.2C-19.3,61.6,-38.6,70.7,-53.5,66.7C-68.4,62.8,-78.9,45.9,-78.8,29.5C-78.7,13.2,-67.9,-2.7,-59.8,-16.8C-51.6,-31,-46,-43.3,-36.5,-50.9C-27,-58.4,-13.5,-61.1,3,-65.2C19.6,-69.4,39.1,-75.1,47.5,-67.2Z"
                    transform="translate(100 100) rotate(-120)"
                  ></path>
                </svg>
                <img
                  src="images/astro.webp"
                  alt="Artwork"
                  className="uk-cover"
                  style={{ maxWidth: "66%", maxHeight: "66%" }}
                  data-uk-cover
                />
              </div>
            </div>
            <div>
              <div className="uk-panel">
                <h3 className="uk-h3 uk-h2@s uk-heading-d2@m">
                  ABOUT <span className="uk-text-gradient">SmartDeploy</span>
                </h3>
                <p className="uk-text-large">
                  SmartDeploy is a contract management DAO that streamlines
                  smart contract deployment on Soroban by providing a
                  user-friendly and secure platform.
                </p>
                <p className="uk-text-large">
                  Our goal is to empower developers with the tools they need to
                  deploy contracts quickly and securely, ultimately unlocking
                  the full potential of Soroban.
                </p>
                <div className="uk-panel uk-margin-large-top">
                  <div className="uk-flex-center" data-uk-grid="">
                    <div
                      className="uk-panel"
                      data-anime="targets: > *; opacity:[0, 1]; translateY:[24, 0]; delay: anime.stagger(100);"
                    >
                      <div className="uk-width-1-1">
                        <Link href="https://launch.smartdeploy.dev/" className="uk-button uk-button-large uk-button-gradient uk-margin-small-top uk-margin-large-top@m">
                            Get Started
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
