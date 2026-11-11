export const title = 'Contact Us | Sahavi Software Solutions'

export const content = `
  <section class="page-hero section-pad"><div class="eyebrow eyebrow-blue"></div><h1>Start a conversation</h1><p>Tell us what your team is working on. We’ll connect your inquiry with the right expertise.</p></section>
  <section class="contact-section contact-page-section"><div class="contact-inner section-pad"><div class="contact-copy"><div class="eyebrow"><span></span> HOW CAN WE HELP?</div><h2>Let's find your<br><em>next step.</em></h2><p>Share a few details about your project, application, or staffing needs.</p><div class="contact-details"><span class="contact-detail-label">EMAIL</span><a href="mailto:info@sahavisoftware.com">info@sahavisoftware.com</a><span class="contact-detail-label">SPECIALTY</span><p>Oracle EPM consulting<br>Implementation<br>Consolidation and close<br>Reconciliation<br>Integrations<br>Staffing</p></div></div>
    <form class="contact-form" id="contact-form">
      <div class="form-row"><label class="form-field">Name<input name="name" type="text" autocomplete="name" maxlength="100" required></label><label class="form-field">Email<input name="email" type="email" autocomplete="email" maxlength="254" required></label></div>
      <label class="form-field">Company <span>(optional)</span><input name="company" type="text" autocomplete="organization" maxlength="120"></label>
      <label class="form-field">How can we help?<textarea name="message" rows="4" minlength="10" maxlength="3000" required></textarea></label>
      <div class="form-submit"><button class="button button-primary" type="submit">Send inquiry <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M10 5l5 5-5 5" /></svg></button><p class="form-status" role="status" aria-live="polite"></p></div>
      <p class="privacy-note">Your details will only be used to respond to your inquiry.</p>
    </form>
  </div></section>
`