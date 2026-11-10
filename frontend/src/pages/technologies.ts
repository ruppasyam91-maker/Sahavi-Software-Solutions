import { arrowIcon, siteUrl } from '../components/site-shell'
import { technologies } from '../data/technologies'

export const title = 'Oracle EPM Technologies | Sahavi Software Solutions'

export const content = `
  <section class="page-hero section-pad"><div class="eyebrow eyebrow-blue"><span></span> ORACLE EPM TECHNOLOGIES</div><h1>Deep platform knowledge.<br><em>Practical delivery.</em></h1><p>Focused capability across the Oracle EPM tools finance teams use to plan, consolidate, reconcile, manage data, and automate work.</p></section>
  <section class="technology-page-section section-pad"><div class="technology-card-grid">${technologies.map((technology, index) => `<article class="technology-card"><span class="service-number">${String(index + 1).padStart(2, '0')} / ${technology.category.toUpperCase()}</span><h2>${technology.name}</h2><p>${technology.description}</p></article>`).join('')}</div><div class="tech-note"><span class="eyebrow eyebrow-blue"><span></span> DELIVERY CAPABILITIES</span><p>Related expertise includes Calculation Manager, BSO and ASO cube design, Data Maps, Smart Push, metadata management, and Data Integration.</p></div></section>
  <section class="home-contact section-pad"><div><div class="eyebrow eyebrow-blue"><span></span> ORACLE EPM EXPERTISE</div><h2>Have a platform<br><em>challenge in mind?</em></h2></div><a class="button button-primary" href="${siteUrl('/contact.html')}">Discuss your needs ${arrowIcon}</a></section>
`