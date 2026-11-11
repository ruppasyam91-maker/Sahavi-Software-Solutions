import { siteUrl } from '../components/site-shell'

export const title = 'Contact Us | Sahavi Software Solutions'
const configuredEmail = import.meta.env.VITE_CONTACT_EMAIL?.trim()
const escapeAttribute = (value: string) => value.replace(/[&<>"']/g, (character) => {
  switch (character) {
    case '&': return '&amp;'
    case '<': return '&lt;'
    case '>': return '&gt;'
    case '"': return '&quot;'
    case "'": return '&#39;'
    default: return character
  }
})
const contactEmail = configuredEmail && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(configuredEmail)
  ? escapeAttribute(configuredEmail)
  : 'info@sahavisoftware.com'

export const content = `
  <section class="page-hero section-pad"><div class="eyebrow eyebrow-blue"><span></span> CONTACT SAHAVI</div><h1><em>Start a conversation</em><br></h1><p>Tell us what your team is working on. We’ll connect your inquiry with  EPM expertise.</p></section>
  <section class="contact-section contact-page-section"><div class="contact-inner section-pad"><div class="contact-copy"><div class="eyebrow"><span></span> HOW CAN WE HELP?</div><h2>Let's find your<br><em>next step.</em></h2><p>Share a few details about your project, application, or staffing needs.</p><div class="contact-details"><span class="contact-detail-label">EMAIL</span><a href="mailto:${contactEmail}">${contactEmail}</a><span class="contact-detail-label">LINKEDIN</span><a href="https://www.linkedin.com/in/sahavi-solutions-876ab8220/" target="_blank" rel="noopener noreferrer">Sahavi Software Solutions</a><span class="contact-detail-label">SPECIALTY</span><p>Oracle EPM consulting<br>Implementation<br>Consolidation and close<br>Reconciliation<br>Integrations<br>Staffing</p></div></div>
    <form class="contact-form" id="contact-form">
      <div class="form-row"><label class="form-field">Name<input name="name" type="text" autocomplete="name" maxlength="100" required></label><label class="form-field">Email<input name="email" type="email" autocomplete="email" maxlength="254" required></label></div>
      <label class="form-field">Company <span>(optional)</span><input name="company" type="text" autocomplete="organization" maxlength="120"></label>
      <label class="form-field">How can we help?<textarea name="message" rows="4" minlength="10" maxlength="3000" required></textarea></label>
      <div class="form-submit"><button class="button button-primary" type="submit">Send inquiry <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M10 5l5 5-5 5" /></svg></button><p class="form-status" role="status" aria-live="polite" aria-atomic="true"></p></div>
      <p class="privacy-note">Your inquiry details are used to respond to you. Read our <a href="${siteUrl('/privacy.html')}">privacy notice</a>.</p>
    </form>
  </div></section>
`