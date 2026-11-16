import { arrowIcon, siteUrl } from '../components/site-shell'

export const title = 'Careers | Sahavi Software Solutions'

export const content = `
  <section class="page-hero section-pad">
    <div class="eyebrow eyebrow-blue"><span></span> CAREERS AT SAHAVI</div>
    <h1>Grow your career<br><em>with Oracle EPM.</em></h1>
    <p>Work with a focused team helping finance organizations plan, close, and report with confidence. Bring your functional, technical, or finance expertise to meaningful client projects.</p>
    <div class="hero-actions"><a class="button button-primary" href="#career-paths">Explore career paths ${arrowIcon}</a><a class="text-link" href="${siteUrl('/contact.html')}">Contact us ${arrowIcon}</a></div>
  </section>

  <section class="about-intro section-pad">
    <div class="about-lead">
      <span class="eyebrow eyebrow-blue"><span></span> LIFE AT SAHAVI</span>
      <h2>Put your skills behind better decisions.</h2>
    </div>
    <div class="about-copy">
      <p>Our work connects finance needs with practical Oracle EPM solutions. Team members contribute across the project lifecycle, from understanding business requirements to implementation and ongoing support.</p>
      <p>We value collaboration, clear communication, and a willingness to keep learning as platforms and client needs evolve.</p>
    </div>
  </section>

  <section class="values-section section-pad">
    <article>
      <span class="value-index">MAKE AN IMPACT</span>
      <h2>Solve real finance challenges.</h2>
      <p>Help organizations improve planning, consolidation, reconciliation, reporting, and the processes that support better decisions.</p>
    </article>
    <article>
      <span class="value-index">KEEP GROWING</span>
      <h2>Build your EPM expertise.</h2>
      <p>Work with functional and technical teams, learn across Oracle EPM capabilities, and develop skills through hands-on delivery.</p>
    </article>
  </section>

  <section class="expertise-section" id="career-paths">
    <div class="expertise-inner career-paths-inner section-pad">
      <div class="expertise-copy">
        <div class="eyebrow"><span></span> CAREER PATHS</div>
        <h2>Find where your skills<br><em>make an impact.</em></h2>
        <p>Interested in opportunities with Sahavi? Tell us about your experience and the kind of work you want to do. We’ll be in touch if there’s a suitable opportunity.</p>
        <a class="button button-light" href="${siteUrl('/contact.html')}">Contact us about a career ${arrowIcon}</a>
      </div>
    </div>
  </section>
`
