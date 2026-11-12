import { renderServiceCards } from '../components/service-cards'
import { arrowIcon, siteUrl } from '../components/site-shell'
import { services } from '../data/services'
import { technologies } from '../data/technologies'

export const title = 'Sahavi Software Solutions | Oracle EPM Consulting'

export const content = `
  <section class="hero page-home" id="home">
    <div class="hero-grid">
      <div class="hero-copy reveal">
        <div class="eyebrow"><span></span> ORACLE EPM CONSULTING & STAFFING</div>
        <h1>Oracle EPM.<br><em>expertise for</em><br>finance teams.</h1>
        <p class="hero-intro">Sahavi Software Solutions helps finance teams plan with confidence through focused Oracle EPM consulting, implementation, support, and training.</p>
        <div class="hero-actions"><a class="button button-primary" href="${siteUrl('/contact.html')}">Discuss your EPM goals ${arrowIcon}</a><a class="text-link" href="${siteUrl('/services.html')}">Explore services ${arrowIcon}</a></div>
        <div class="hero-proof"><span class="proof-rule"></span><p>Specialists in Oracle Enterprise Performance Management</p></div>
      </div>
      <div class="planning-visual reveal" aria-label="Oracle EPM capabilities for on-premises and cloud solutions, integrations, reporting, and training">
        <div class="visual-orbit orbit-one" aria-hidden="true"><span class="orbit-dot dot-one"></span><span class="orbit-dot dot-two"></span><span class="orbit-dot dot-three"></span><span class="orbit-dot dot-four"></span><span class="orbit-dot dot-five"></span></div><div class="visual-orbit orbit-two" aria-hidden="true"></div>
        <div class="visual-center"><span class="center-kicker">ORACLE</span><strong>EPM</strong><span class="center-caption">FINANCE CLOUD</span></div>
        <div class="orbiting-nodes">
          <div class="node node-on-premises"><strong>On-Premises</strong></div>
          <div class="node node-cloud-solutions"><strong>Cloud Solutions</strong></div>
          <div class="node node-integrations"><strong>Integrations</strong></div>
          <div class="node node-reporting"><strong>Reporting</strong></div>
          <div class="node node-training"><strong>Training</strong></div>
        </div>
      </div>
    </div>
    <a class="scroll-cue" href="#overview" aria-label="Scroll to company overview"><span></span></a>
  </section>
  <section class="overview-section section-pad" id="overview">
    <div class="section-heading reveal"><div><div class="eyebrow eyebrow-blue"><span></span> SAHAVI SOFTWARE SOLUTIONS</div><h2>Built around the work<br><em>finance teams do.</em></h2></div><p>We bring functional understanding and technical delivery together across Oracle EPM, helping organizations improve how they plan, close, and manage performance.</p></div>
    <div class="highlight-grid"><article><span>01</span><h3>Finance-led delivery</h3><p>EPM solutions shaped around planning, budgeting, consolidation, close, and reporting.</p></article><article><span>02</span><h3>Oracle EPM focus</h3><p>Consulting, application development, integrations, and support across the EPM suite.</p></article><article><span>03</span><h3>Support beyond launch</h3><p>Practical expertise for implementation, enhancements, migration, and ongoing operations.</p></article></div>
  </section>
  <section class="service-section section-pad" id="services">
    <div class="section-heading reveal"><div><div class="eyebrow eyebrow-blue"><span></span> OUR SERVICES</div><h2>Oracle EPM, from design<br><em>through delivery.</em></h2></div><a class="text-link" href="${siteUrl('/services.html')}">View all services ${arrowIcon}</a></div>
    <div class="service-grid home-service-grid">${renderServiceCards(true, services.filter(({ id }) => !['integrations-data-management', 'reporting-analytics'].includes(id)), false)}</div>
  </section>
  <section class="expertise-section" id="expertise">
    <div class="expertise-inner section-pad"><div class="expertise-copy reveal"><div class="eyebrow"><span></span> TECHNOLOGY EXPERTISE</div><h2>Deep in the<br><em>Oracle EPM stack.</em></h2><p>Focused capability across Oracle planning, close, reconciliation, data management, automation, and calculation technologies.</p><a class="button button-light" href="${siteUrl('/contact.html')}">Talk to our EPM team ${arrowIcon}</a></div><div class="technology-panel reveal"><div class="tech-panel-heading"><span>CORE CAPABILITIES</span><span class="tech-live"><i></i> ORACLE EPM</span></div><div class="tech-grid">${technologies.map((technology, index) => `<div class="tech-item"><span class="tech-index">${String(index + 1).padStart(2, '0')}</span><span>${technology.name}</span></div>`).join('')}</div></div></div>
  </section>
  <section class="staffing-section section-pad"><div class="staffing-layout"><div class="staffing-title reveal"><div class="eyebrow eyebrow-blue"><span></span> EPM STAFFING</div><h2>People who know<br><em>your platform.</em></h2></div><div class="staffing-content reveal"><p>Engage Oracle EPM functional and technical specialists in Planning (EPBCS/PBCS), Financial Consolidation and Close (FCCS), Account Reconciliation (ARCS), Enterprise Data Management (EDMCS), and data integrations.</p><a class="text-link dark-link" href="${siteUrl('/contact.html')}">Find your EPM specialist ${arrowIcon}</a></div></div></section>
  <section class="home-contact section-pad"><div><div class="eyebrow eyebrow-blue"><span></span> READY TO GET STARTED?</div><h2>Let's talk about<br><em>your EPM goals.</em></h2></div><a class="button button-primary" href="${siteUrl('/contact.html')}">Contact Sahavi ${arrowIcon}</a></section>
`