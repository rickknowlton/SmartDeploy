import { useState, useRef, useEffect } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import Footer from "../components/layouts/Footer";
import HeaderInner from "../components/layouts/HeaderInner";

export default function SmartDeployTemplate() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [alertKey, setAlertKey] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);

  const recaptchaRef = useRef();
  const alertRef = useRef(null);

  const closeAlertAfterDuration = () => {
    if (alertRef.current) {
      setTimeout(() => {
        UIkit.alert(alertRef.current).close();
      }, 3000);
    }
  };

  useEffect(() => {
    if (showAlert) {
      const timeoutFadeOut = setTimeout(() => {
        setFadeOut(true);
      }, 1500);

      const timeoutHide = setTimeout(() => {
        setShowAlert(false);
        setFadeOut(false);
      }, 2500);

      return () => {
        clearTimeout(timeoutFadeOut);
        clearTimeout(timeoutHide);
      };
    }
  }, [showAlert]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaValue) {
      setAlertType("danger");
      setAlertKey(alertKey + 1);
      setShowAlert(true);
      console.error("Error submitting the form: reCaptcha Failed");
      return;
    }

    try {
      const response = await axios.post("/api/contact", {
        name,
        email,
        subject,
        message,
        captcha: captchaValue,
      });
      if (response.status === 200) {
        setAlertType("success");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setCaptchaValue(null);
        recaptchaRef.current.reset();
        setIsFormValid(false);
        setAlertKey(alertKey + 1);
        setShowAlert(true);
        console.log(response.data.message);
      }
    } catch (error) {
      setAlertType("danger");
      setAlertKey(alertKey + 1);
      closeAlertAfterDuration();
      console.error("Error submitting the form:", error);
    }
  };
  const checkFormValidity = () => {
    if (
      name.trim() !== "" &&
      email.trim() !== "" &&
      subject.trim() !== "" &&
      message.trim() !== ""
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };
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
                    onSubmit={handleSubmit}
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
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                            checkFormValidity();
                          }}
                        />
                      </div>
                    </div>
                    <div className="uk-width-1-2@m">
                      <div className="uk-form-controls">
                        <input
                          className="uk-input uk-form-medium uk-text-bold"
                          type="email"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            checkFormValidity();
                          }}
                        />
                      </div>
                    </div>
                    <div className="uk-form-controls">
                      <input
                        className="uk-input uk-form-medium uk-text-bold"
                        type="text"
                        placeholder="Subject"
                        value={subject}
                        onChange={(e) => {
                          setSubject(e.target.value);
                          checkFormValidity();
                        }}
                      />
                    </div>
                    <div className="uk-form-controls">
                      <textarea
                        className="uk-textarea uk-padding uk-height-xsmall uk-radius-large uk-text-bold"
                        rows="5"
                        placeholder="Type your message"
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                          checkFormValidity();
                        }}
                      ></textarea>
                    </div>
                    <div className="uk-form-controls uk-flex-center">
                      <button
                        type="submit"
                        disabled={!isFormValid}
                        className="uk-button uk-button-primary uk-width-small@m uk-margin-auto"
                      >
                        Send Message
                      </button>
                    </div>
                    <div className="uk-form-controls uk-flex-center">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                        onChange={(value) => {
                          setCaptchaValue(value);
                          checkFormValidity();
                        }}
                      />
                    </div>
                  </form>
                </div>
                {showAlert && alertType === "success" && (
                  <div
                    ref={alertRef}
                    key={alertKey}
                    className={`uk-alert-success${fadeOut ? " fade-out" : ""}`}
                    uk-alert
                  >
                    <a className="uk-alert-close" uk-close></a>
                    <p>Your message has been sent successfully!</p>
                  </div>
                )}
                {showAlert && alertType === "danger" && (
                  <div
                    ref={alertRef}
                    key={alertKey}
                    className={`uk-alert-danger${fadeOut ? " fade-out" : ""}`}
                    uk-alert
                  >
                    <a className="uk-alert-close" uk-close></a>
                    {!captchaValue ? (
                      <p>Please fill out reCaptcha and try again.</p>
                    ) : (
                      <p>Error sending your message. Please try again.</p>
                    )}
                  </div>
                )}
              </div>
              <div>
                <div className="uk-card uk-card-small uk-card-large@m">
                  <div className="uk-grid uk-child-width-1-2@m" data-uk-grid="">
                    <div className="uk-panel">
                      <h2 className="uk-h5 uk-h4@m">Drop a Line</h2>
                      <p>
                        Questions, comments, concerns or just want to learn a
                        little more about using SmartDeploy? Feel free to hit us
                        up!
                      </p>
                      <h2 className="uk-h6 uk-h6@m uk-margin-large-top">Connect</h2>
                      <ul className="uk-list">
                        <li>
                          <a
                            href="mailto:go@smartdeploy.dev"
                            className="uk-link-reset"
                          >
                            <i className="uk-icon-small unicon-email uk-margin-xsmall-right"></i>
                            go@smartdeploy.dev
                          </a>
                        </li>
                        {/* <li>
                          <a
                            href="#"
                            className="uk-link-reset"
                          >
                            <i className="uk-icon unicon-logo-discord uk-margin-xsmall-right"></i>
                            Discord
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="uk-link-reset"
                          >
                            <i className="uk-icon unicon-logo-twitter uk-margin-xsmall-right"></i>
                            Twitter
                          </a>
                        </li> */}
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
