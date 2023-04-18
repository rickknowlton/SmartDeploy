import Footer from '../components/layouts/Footer';
import HeaderInner from '../components/layouts/HeaderInner';
export default function SmartDeployTemplate() {
  return (
    
        <>		
        <HeaderInner/>
        <article className="uni-terms uk-section uk-section-large@m uk-panel uk-overflow-hidden uk-border-top">
                <div className="uk-container uk-container-xsmall">
                    <header>
                        <div className="uk-panel uk-text-center">
                            <h1 className="uk-h4 uk-h1@m">Terms of Use</h1>
                        </div>
                    </header>
                    <div className="uk-panel uk-text-medium uk-text-xlarge@m uk-margin uk-margin-xlarge-top@m">
                        <p>By using the SmartDeploy website, you agree to be bound by the following Terms and Conditions:.</p>
                        <h3 className="uk-h4 uk-h3@m uk-margin-large-top">1. Use of our website</h3>
                        <p>You may use our website for lawful purposes only. You may not use our website in any way that violates applicable laws, regulations, or third-party rights.</p>
                        <h3 className="uk-h4 uk-h3@m uk-margin-large-top">2. Intellectual property</h3>
                        <p>All content on our website is protected by copyright and other intellectual property laws. You may not reproduce, modify, distribute, or sell any content from our website without our prior written consent.</p>
                        <h3 className="uk-h4 uk-h3@m uk-margin-large-top">3. Disclaimer of warranties</h3>
                        <p>We make no warranties or representations about the accuracy, completeness, or suitability of the content on our website. We do not guarantee that our website will be error-free or uninterrupted.</p>
                        <h3 className="uk-h4 uk-h3@m uk-margin-large-top">4. Limitation of liability</h3>
                        <p>We will not be liable for any damages arising out of or in connection with the use of our website. This includes direct, indirect, incidental, or consequential damages, even if we have been advised of the possibility of such damages.</p>
                        <h3 className="uk-h4 uk-h3@m uk-margin-large-top">5. Changes to these terms</h3>
                        <p className="uk-margin-large-bottom">We may update these Terms and Conditions at any time without notice. Your continued use of our website after any changes constitutes your acceptance of the revised terms.</p>
                        <hr></hr>
                        <p className="uk-text-muted uk-margin-large-small">If you have any questions or concerns about our <a href="/privacy">Privacy Policy</a> or Terms and Conditions, please <a href="mailto:go@smartdeploy.dev">contact us</a>.</p>
                        <p className="uk-text-meta uk-margin-large-top@m">Last updated: Apr 1, 2023</p>
                    </div>
                </div>
            </article>
        <Footer/>
        </>
        
  	);
}
