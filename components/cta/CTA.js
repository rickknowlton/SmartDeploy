import Link from 'next/link';
import styles from './CTA.module.css';

const CTA = () => {
  return (
    <div id="uni-cta" className="uni-cta uk-section uk-panel uk-overflow-hidden">
      <div className="uk-container">
        <div className="uk-card uk-flex-center uk-text-center">
          <div className="uk-panel uk-width-2xlarge@m uk-position-z-index">
            <img className={`${styles.star} ${styles.starTopLeft} uni-animation-bounce uk-text-primary`} width="24" src="images/objects/star-01.svg" alt="star" />
            <img className={`${styles.star} ${styles.starBottomRight} uni-animation-bounce uk-text-primary`} width="24" src="images/objects/star-01.svg" alt="star" />
            <img className={`${styles.star} ${styles.starTopRight} uni-animation-bounce-2 uk-text-secondary`} width="40" src="images/objects/star-01.svg" alt="star" />
            <img className={`${styles.star} ${styles.starBottomLeft} uni-animation-bounce-2 uk-text-secondary`} width="48" src="images/objects/star-01.svg" alt="star" />
            <h2 className="uk-h3 uk-heading-d1@m uk-text-uppercase">
              Join us on <br />
              <span className="uk-text-gradient">DISCORD</span>
            </h2>
            <p className="uk-text-xlarge@m">Read. Set. SmartDeploy!</p>
            <Link href="#" className="uk-button uk-button-small uk-button-large@m uk-button-gradient uk-margin-small-top uk-margin-large-top@m">Join the Discord</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
