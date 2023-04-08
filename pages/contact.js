import Footer from "../components/layouts/Footer";
import HeaderInner from "../components/layouts/HeaderInner";
export default function SmartDeployTemplate() {
  return (
    <>
      <HeaderInner />
      <div className="uni-contact uk-section uk-section-large@m uk-panel uk-overflow-hidden uk-border-top">
        <header className="uni-page-header">
          <div className="uk-container">
            <h1 className="heading uk-h3 uk-h1@m uk-text-center">Contact</h1>
          </div>
        </header>
        <div className="uk-margin-top uk-margin-large-top@m">
          <div className="uk-container uk-container-xsmall">
            <div className="uk-grid uk-child-width-1-1" data-uk-grid>
              <div>
                <div className="uk-card uk-card-small uk-card-large@m uk-card-default uk-card-border uk-radius-medium uk-radius-large@m dark:uk-background-white-5">
                  <form
                    action="?"
                    className="uk-grid uk-grid-xsmall uk-child-width-1-1"
                    data-uk-grid
                  >
                    <div className="uk-width-1-2@m">
                      <div className="uk-form-controls">
                        <input
                          className="uk-input uk-form-medium uk-text-bold"
                          type="text"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div className="uk-width-1-2@m">
                      <div className="uk-form-controls">
                        <input
                          className="uk-input uk-form-medium uk-text-bold"
                          type="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="uk-form-controls">
                      <input
                        className="uk-input uk-form-medium uk-text-bold"
                        type="text"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="uk-form-controls">
                      <textarea
                        className="uk-textarea uk-padding uk-height-xsmall uk-radius-large uk-text-bold"
                        rows="5"
                        placeholder="Type your message"
                      ></textarea>
                    </div>
                    <div className="uk-form-controls uk-flex-center">
                      <button
                        type="submit"
                        className="uk-button uk-button-primary uk-width-small@m uk-margin-auto"
                      >
                        Send message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div>
                <div className="uk-card uk-card-small uk-card-large@m">
                  <div className="uk-grid uk-child-width-1-2@m" data-uk-grid="">
                    <div className="uk-panel">
                      <h2 className="uk-h5 uk-h4@m">Drop a Line</h2>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Repellat perferendis eveniet mollitia omnis iste
                        voluptatibus impedit quaerat modi facere est?
                      </p>
                    </div>
                    <div className="uk-panel">
                      <ul className="uk-list">
                        <li>
                          <a
                            href="mailto:go@smartdeploy.dev"
                            className="uk-link-reset"
                          >
                            go@smartdeploy.dev
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
