import { renderServiceCards } from '../components/service-cards'
import { arrowIcon, siteUrl } from '../components/site-shell'
import { services } from '../data/services'

export const title = 'Oracle EPM Services | Sahavi Software Solutions'

export const content = `
  <section class="page-hero section-pad"><div class="eyebrow eyebrow-blue"><span></span> ORACLE EPM SERVICES</div><h1>Expertise for every<br><em>stage of EPM.</em></h1><p>From first implementation through ongoing optimization, work with a specialist team across Oracle EPM.</p></section>
  <section class="services-page-section section-pad">
    <div class="services-page-heading"><div><div class="eyebrow eyebrow-blue"><span></span> HOW WE HELP</div><h2>Focused expertise.<br><em>Practical outcomes.</em></h2></div><p>Choose the support that fits your finance team, your platform, and the work ahead.</p></div>
    <div class="service-grid services-page-grid">${renderServiceCards(false, services.filter(({ id }) => !['integrations-data-management', 'reporting-analytics'].includes(id)), false)}</div>
  </section>
  <section class="home-contact section-pad"><div><div class="eyebrow eyebrow-blue"><span></span> NEED A SPECIALIST?</div><h2>Let's shape the right<br><em>next step.</em></h2></div><a class="button button-primary" href="${siteUrl('/contact.html')}">Talk with Sahavi ${arrowIcon}</a></section>
`