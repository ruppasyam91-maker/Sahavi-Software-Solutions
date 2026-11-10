import { renderServiceCards } from '../components/service-cards'
import { arrowIcon } from '../components/site-shell'
import { technologies } from '../data/technologies'

export const title = 'Sahavi Software Solutions | Oracle EPM Consulting'

export const content = `
  <section class="hero page-home" id="home">
    <div class="hero-grid">
      <div class="hero-copy reveal">
        <div class="eyebrow"><span></span> ORACLE EPM CONSULTING & STAFFING</div>
        <h1>Oracle EPM.<br><em>expertise for</em><br>finance teams.</h1>
        <p class="hero-intro">Sahavi Software Solutions helps finance teams plan with confidence through focused Oracle EPM consulting, implementation, and support.</p>
        <div class="hero-actions"><a class="button button-primary" href="/contact.html">Discuss your EPM goals ${arrowIcon}</a><a class="text-link" href="/services.html">Explore services ${arrowIcon}</a></div>
        <div class="hero-proof"><span class="proof-rule"></span><p>Specialists in Oracle Enterprise Performance Management</p></div>
      </div>
      <div class="planning-visual reveal" aria-label="Connected financial plans for workforce, revenue, and expenses">
        <div class="visual-orbit orbit-one"></div><div class="visual-orbit orbit-two"></div>
        <div class="visual-label"><span class="pulse-dot"></span> CONNECTED PLANNING</div>
        <div class="visual-center"><span class="center-kicker">ORACLE</span><strong>EPM</strong><span class="center-caption">FINANCE CLOUD</span></div>
        <div class="node node-workforce"><span class="node-icon">01</span><strong>Workforce</strong><small>People plan</small></div>
        <div class="node node-revenue"><span class="node-icon">02</span><strong>Revenue</strong><small>Growth plan</small></div>
        <div class="node node-expense"><span class="node-icon">03</span><strong>Expenses</strong><small>Cost plan</small></div>
        <div class="visual-foot"><span>ONE PLAN</span><b>↗</b><span>BETTER DECISIONS</span></div>
      </div>
    </div>
    <a class="scroll-cue" href="#overview" aria-label="Scroll to company overview"><span></span></a>
  </section>
  <section class="overview-section section-pad" id="overview">
    <div class="section-heading reveal"><div><div class="eyebrow eyebrow-blue"><span></span> SAHAVI SOFTWARE SOLUTIONS</div><h2>Built around the work<br><em>finance teams do.</em></h2></div><p>We bring functional understanding and technical delivery together across Oracle EPM, helping organizations improve how they plan, close, and manage performance.</p></div>
    <div class="highlight-grid"><article><span>01</span><h3>Finance-led delivery</h3><p>Planning solutions shaped around real budgeting, forecasting, and close processes.</p></article><article><span>02</span><h3>Oracle EPM focus</h3><p>Consulting, application development, integrations, and support in one specialist practice.</p></article><article><span>03</span><h3>Support beyond launch</h3><p>Practical expertise for implementation, enhancements, migration, and ongoing operations.</p></article></div>
  </section>
  <section class="service-section section-pad" id="services">
    <div class="section-heading reveal"><div><div class="eyebrow eyebrow-blue"><span></span> OUR SERVICES</div><h2>Oracle EPM, from design<br><em>through delivery.</em></h2></div><a class="text-link" href="/services.html">View all services ${arrowIcon}</a></div>
    <div class="service-grid">${renderServiceCards(true)}</div>
  </section>
  <section class="expertise-section" id="expertise">
    <div class="expertise-inner section-pad"><div class="expertise-copy reveal"><div class="eyebrow"><span></span> TECHNOLOGY EXPERTISE</div><h2>Deep in the<br><em>Oracle EPM stack.</em></h2><p>Focused capability across Oracle planning, close, reconciliation, data management, automation, and calculation technologies.</p><a class="button button-light" href="/technologies.html">Explore technologies ${arrowIcon}</a></div><div class="technology-panel reveal"><div class="tech-panel-heading"><span>CORE CAPABILITIES</span><span class="tech-live"><i></i> ORACLE EPM</span></div><div class="tech-grid">${technologies.map((technology, index) => `<div class="tech-item"><span class="tech-index">${String(index + 1).padStart(2, '0')}</span><span>${technology.name}</span></div>`).join('')}</div></div></div>
  </section>
  <section class="staffing-section section-pad"><div class="staffing-layout"><div class="staffing-title reveal"><div class="eyebrow eyebrow-blue"><span></span> EPM STAFFING</div><h2>People who know<br><em>your platform.</em></h2></div><div class="staffing-content reveal"><p>Bring in Oracle EPBCS, PBCS, functional, technical, Groovy, and Essbase specialists for the work ahead.</p><a class="text-link dark-link" href="/contact.html">Find your EPM specialist ${arrowIcon}</a></div><div class="staffing-note reveal"><p>Contract and permanent placements aligned to your project and team.</p><span class="note-line"></span></div></div></section>
  <section class="home-contact section-pad"><div><div class="eyebrow eyebrow-blue"><span></span> READY TO GET STARTED?</div><h2>Let's talk about<br><em>your EPM goals.</em></h2></div><a class="button button-primary" href="/contact.html">Contact Sahavi ${arrowIcon}</a></section>
`