import Footer from '../components/layouts/Footer';
import HeaderInner from '../components/layouts/HeaderInner';
export default function SmartDeployTemplate() {
  return (
    
        <>		
        <HeaderInner/>
			 <article className="uni-privacy uk-section uk-section-large@m uk-panel uk-overflow-hidden uk-border-top">
                <div className="uk-container uk-container-xsmall">
                    <header>
                        <div className="uk-panel uk-text-center">
                            <h1 className="uk-h4 uk-h1@m">Privacy Policy</h1>
                        </div>
                    </header>
                    <div className="uk-panel uk-text-medium uk-text-xlarge@m uk-margin uk-margin-xlarge-top@m">
                        <p>At SmartDeploy, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and disclose data when you use our website.</p>
                        <h3 className="uk-h4 uk-h3@m uk-margin-large-top">What information do we collect?</h3>
                        <p>We may collect personal information such as your name and email address when you voluntarily submit it to us. We also use cookies and similar technologies to collect anonymous browsing data.</p>
                        <h3 className="uk-h4 uk-h3@m uk-margin-large-top">How do we use your information?</h3>
                        <p>We may use your personal information to communicate with you. We also use cookies and analytics to understand how our users navigate through our website and in turn improve overall experience.</p>
                        <h3 className="uk-h4 uk-h3@m uk-margin-large-top">How do we protect your information?</h3>
                        <p>We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. We use a variety of security technologies and procedures to help protect your personal information.</p>
                        <h3 className="uk-h4 uk-h3@m uk-margin-large-top">You have a choice! Always.</h3>
                        <p className="uk-margin-large-bottom">You can choose to disable cookies in your browser settings or opt-out of analytics tracking. However, please note that some features of our website may not function properly without cookies. You can also contact us to update or delete your personal information.</p>                                                
                        <hr></hr>
                        <p className="uk-text-muted uk-margin-large-small">If you have any questions or concerns about our Privacy Policy or <a href="/terms">Terms and Conditions</a>, please <a href="mailto:go@smartdeploy.dev">contact us</a>.</p>                        
                        <p className="uk-text-meta uk-margin-large-top@m">Last updated: Apr 1, 2023</p>
                    </div>
                </div>
            </article>
        <Footer/>
        </>
        
  	);
}
