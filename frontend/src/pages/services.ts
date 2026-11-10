import { renderServiceCards } from '../components/service-cards'
import { arrowIcon } from '../components/site-shell'

export const title = 'Oracle EPM Services | Sahavi Software Solutions'

export const content = `
  <section class="page-hero section-pad"><div class="eyebrow eyebrow-blue"><span></span> ORACLE EPM SERVICES</div><h1>Expertise for every<br><em>stage of EPM.</em></h1><p>From first implementation through ongoing optimization, work with a specialist team across Oracle EPM.</p></section>
  <section class="services-page-section section-pad"><div class="service-grid service-grid-full">${renderServiceCards()}</div></section>
  <section class="home-contact section-pad"><div><div class="eyebrow eyebrow-blue"><span></span> NEED A SPECIALIST?</div><h2>Let's shape the right<br><em>next step.</em></h2></div><a class="button button-primary" href="/contact.html">Talk with Sahavi ${arrowIcon}</a></section>
`