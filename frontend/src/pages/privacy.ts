import { siteUrl } from '../components/site-shell'

export const title = 'Privacy Notice | Sahavi Software Solutions'

export const content = `
  <section class="page-hero section-pad"><div class="eyebrow eyebrow-blue"><span></span> PRIVACY</div><h1>A clear note on<br><em>your information.</em></h1><p>This notice explains what happens when you use the Sahavi Software Solutions contact form.</p></section>
  <section class="privacy-page section-pad">
    <h2>Information you provide</h2>
    <p>The contact form asks for your name, work email, an optional company name, and a message. Please do not include passwords, financial account data, or other sensitive personal information.</p>
    <h2>How it is used</h2>
    <p>Your information is used to review and respond to your inquiry. When the production contact service is configured, the form sends it to Sahavi Software Solutions by email using Resend. The website does not maintain a separate inquiry database.</p>
    <h2>Service providers and retention</h2>
    <p>The website host, contact-service host, Resend, and the recipient's email provider may process or retain information as needed to provide their services, protect their systems, and meet legal obligations. Hosting providers may also record technical request details, such as IP addresses and access times, in their operational logs. Their own privacy notices and retention settings apply. Sahavi Software Solutions may retain inquiry correspondence in its email account for as long as it is needed to respond and maintain business records.</p>
    <h2>Choices and questions</h2>
    <p>You can choose not to use the form and contact Sahavi through <a href="https://www.linkedin.com/in/sahavi-solutions-876ab8220/" target="_blank" rel="noopener noreferrer">LinkedIn</a>. For questions about an inquiry you have sent, use the same profile to contact the company.</p>
    <p class="privacy-updated">Last updated: November 11, 2026.</p>
    <a class="button button-primary" href="${siteUrl('/contact.html')}">Back to Contact</a>
  </section>
`
