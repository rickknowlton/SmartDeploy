import Link from "next/link";

const FAQ = () => {
  return (
    <>
      <div
        id="faq"
        className="uni-faq uk-section uk-section-large@m uk-panel uk-overflow-hidden uk-padding-2xlarge-bottom@m"
      >
        <div className="uk-container">
          <header
            className="uk-grid-xsmall uk-flex-center uk-flex-middle uk-text-center uk-child-width-auto@m uk-grid"
            data-uk-grid
            data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
          >
            <div className="uk-panel">
              <h2 className="uk-h3 uk-h1@m">FAQ</h2>
            </div>
          </header>
          <div className="uk-panel uk-margin-medium-top uk-margin-2xlarge-top@m">
            <ul
              className="uk-card uk-card-small uk-card-large@m uk-radius uk-radius-large@m uk-width-2xlarge@m uk-margin-auto uk-box-shadow-xsmall dark:uk-background-white-5"
              data-uk-accordion="collapsible: true"
              data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
            >
              <li>
                <Link className="uk-accordion-title uk-h5@m" href="#">
                  What is Smart Deploy?
                </Link>
                <div className="uk-accordion-content uk-padding-small-bottom">
                  <p className="uk-text-small uk-text-large@m uk-text-muted">
                    Smart Deploy is a contract management DAO that streamlines
                    smart contract deployment on Soroban by providing a
                    user-friendly and secure platform.
                  </p>
                </div>
              </li>
              <li>
                <Link className="uk-accordion-title uk-h5@m" href="#">
                  How much does it cost to use Smart Deploy?
                </Link>
                <div className="uk-accordion-content uk-padding-small-bottom">
                  <p className="uk-text-small uk-text-large@m uk-text-muted">
                    Smart Deploy operates on a commission-based revenue model,
                    meaning we take a small commission when developers deploy
                    and use contracts on our platform.
                  </p>
                </div>
              </li>
              <li>
                <Link className="uk-accordion-title uk-h5@m" href="#">
                  Is Smart Deploy secure?
                </Link>
                <div className="uk-accordion-content uk-padding-small-bottom">
                  <p className="uk-text-small uk-text-large@m uk-text-muted">
                    {" "}
                    Smart Deploy follows best practices for smart contract
                    security and leverages the security features of the Stellar
                    network, including multi-sig capabilities and asset
                    freezing.
                  </p>
                </div>
              </li>
              <li>
                <Link className="uk-accordion-title uk-h5@m" href="#">
                  How does Smart Deploy handle contract upgrades that are not
                  backward compatible?
                </Link>
                <div className="uk-accordion-content uk-padding-small-bottom">
                  <p className="uk-text-small uk-text-large@m uk-text-muted">
                    {" "}
                    Smart Deploy uses semantic versioning to help developers
                    identify backward compatibility issues. In the event of a
                    non-backward compatible upgrade, developers can choose to
                    migrate to the new contract version or continue using the
                    old version.
                  </p>
                </div>
              </li>
              <li>
                <Link className="uk-accordion-title uk-h5@m" href="#">
                  Can I access the source code and metadata for contracts
                  deployed on Smart Deploy?
                </Link>
                <div className="uk-accordion-content uk-padding-small-bottom">
                  <p className="uk-text-small uk-text-large@m uk-text-muted">
                    Yes, Smart Deploy provides access to the source code and
                    metadata for all contracts deployed on the platform.
                  </p>
                </div>
              </li>
              <li>
                <Link className="uk-accordion-title uk-h5@m" href="#">
                  Can I only deploy to the Stellar blockchain?
                </Link>
                <div className="uk-accordion-content uk-padding-small-bottom">
                  <p className="uk-text-small uk-text-large@m uk-text-muted">
                    SmartDeploy is designed to work seamlessly with Soroban,
                    which can also integrate with Stellar. However, SmartDeploy
                    does not rely on or require Stellar to function.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
