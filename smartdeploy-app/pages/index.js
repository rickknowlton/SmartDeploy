import { useEffect, useState } from "react";
import { getPublicKey, isConnected } from "@stellar/freighter-api";
import Layout from "../components/layouts/Layout";

export default function HomePage() {
  const [publicKey, setPublicKey] = useState("");

  useEffect(() => {
    (async () => {
      if (await isConnected()) {
        const key = await getPublicKey();
        setPublicKey(key);
      }
    })();
  }, []);

  return (
    <>
      <Layout>
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
                      <div className="uk-flex uk-flex-center uk-flex-middle uk-height-viewport">
                        <div className="uk-card uk-card-default uk-card-body uk-border-rounded uk-box-shadow-large uk-width-1-2@s uk-width-1-4@l">
                          <h1>Welcome to SmartDeploy</h1>
                          {publicKey ? (
                            <div>
                              <p>Your Public Key: {publicKey}</p>
                              <a
                                href="/account"
                                className="uk-button uk-button-primary"
                              >
                                Go to Wallet Page
                              </a>
                            </div>
                          ) : (
                            <button
                              className="uk-button uk-button-primary"
                              onClick={connectWallet}
                            >
                              Login with Freighter Wallet
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );

  async function connectWallet() {
    if (await isConnected()) {
      const key = await getPublicKey;
      setPublicKey(key);
    }
  }
}
