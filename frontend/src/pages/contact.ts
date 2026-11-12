import { siteUrl } from '../components/site-shell'

export const title = 'Contact Us | Sahavi Software Solutions'
const contactEmail = 'mabala@sahavi.in'

export const content = `
  <section class="contact-section contact-page-section"><div class="contact-inner section-pad"><div class="contact-copy"><div class="eyebrow"><span></span> HOW CAN WE HELP?</div><h2>Let's find your<br><em>next step.</em></h2><p>Share a few details about your project, application, or staffing needs.</p><div class="contact-details"><span class="contact-detail-label">EMAIL</span><a href="mailto:${contactEmail}">${contactEmail}</a><span class="contact-detail-label">LINKEDIN</span><a href="https://www.linkedin.com/in/sahavi-solutions-876ab8220/" target="_blank" rel="noopener noreferrer">Sahavi Software Solutions</a><span class="contact-detail-label">SPECIALTY</span><ul class="contact-specialty-list"><li>Oracle EPM consulting</li><li>Implementation</li><li>Integrations</li><li>Staffing</li></ul></div></div>
    <form class="contact-form" id="contact-form">
      <div class="form-row"><label class="form-field">Name<input name="name" type="text" autocomplete="name" maxlength="100" required></label><label class="form-field">Email<input name="email" type="email" autocomplete="email" maxlength="254" required></label></div>
      <label class="form-field">Company <span>(optional)</span><input name="company" type="text" autocomplete="organization" maxlength="120"></label>
      <label class="form-field">How can we help?<textarea name="message" rows="4" minlength="10" maxlength="3000" required></textarea></label>
      <div class="form-submit"><button class="button button-primary" type="submit">Send inquiry <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M10 5l5 5-5 5" /></svg></button><p class="form-status" role="status" aria-live="polite" aria-atomic="true"></p></div>
      <p class="privacy-note">Your inquiry details are used to respond to you. Read our <a href="${siteUrl('/privacy.html')}">privacy notice</a>.</p>
    </form>
  </div></section>
`
